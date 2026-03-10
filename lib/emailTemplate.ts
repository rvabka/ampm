function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;width:40%;vertical-align:top;">
        <span style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;">${esc(label)}</span>
      </td>
      <td style="padding:12px 0 12px 16px;border-bottom:1px solid #f1f5f9;vertical-align:top;">
        <span style="font-size:14px;color:#333333;font-weight:500;">${esc(value)}</span>
      </td>
    </tr>`;
}

function messageBlock(label: string, value: string): string {
  return `
    <div style="margin-top:28px;">
      <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.8px;">${esc(label)}</p>
      <div style="background-color:#f8fafc;border-left:3px solid #00aeef;border-radius:0 8px 8px 0;padding:16px 20px;">
        <p style="margin:0;font-size:14px;color:#333333;line-height:1.7;white-space:pre-wrap;">${esc(value)}</p>
      </div>
    </div>`;
}

interface EmailOptions {
  category: string;
  title: string;
  subtitle: string;
  fields: { label: string; value: string }[];
  message?: { label: string; value: string };
}

export function buildEmail({ category, title, subtitle, fields, message }: EmailOptions): string {
  const date = new Date().toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const rows = fields.map(f => row(f.label, f.value)).join('');
  const msgBlock = message ? messageBlock(message.label, message.value) : '';

  return `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>AMPM</title>
</head>
<body style="margin:0;padding:0;background-color:#f8fafc;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f8fafc;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0f172a;padding:28px 40px;border-radius:12px 12px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">AMPM</span>
                  </td>
                  <td align="right">
                    <span style="font-size:10px;color:#00aeef;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">${esc(category)}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:36px 40px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">

              <!-- Title -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="border-left:4px solid #00aeef;padding-left:16px;">
                    <h1 style="margin:0;font-size:20px;font-weight:700;color:#333333;line-height:1.3;">${esc(title)}</h1>
                    <p style="margin:6px 0 0;font-size:13px;color:#64748b;">${esc(subtitle)}</p>
                  </td>
                </tr>
              </table>

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${rows}
              </table>

              ${msgBlock}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;padding:20px 40px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:12px;color:#94a3b8;">AMPM Sp. z o.o. · ampm.com.pl</p>
                    <p style="margin:3px 0 0;font-size:11px;color:#cbd5e1;">Wiadomość wygenerowana automatycznie z formularza kontaktowego.</p>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="font-size:11px;color:#00aeef;font-weight:600;">${date}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
