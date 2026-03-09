export async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY ?? '',
    response: token,
    ...(ip ? { remoteip: ip } : {}),
  });

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });

  const data = await res.json() as { success: boolean };
  return data.success === true;
}
