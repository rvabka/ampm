interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

const MAX = Number(process.env.RATE_LIMIT_MAX ?? 5);
const WINDOW = Number(process.env.RATE_LIMIT_WINDOW ?? 900_000); // 15 min

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW });
    return { allowed: true, remaining: MAX - 1 };
  }

  if (entry.count >= MAX) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX - entry.count };
}
