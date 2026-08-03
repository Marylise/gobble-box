import nodemailer from "nodemailer";

// Sends order/subscription notifications via Gmail SMTP.
// Requires GMAIL_USER + GMAIL_APP_PASSWORD env vars (an "App Password" from
// your Google Account, not your normal Gmail password — regular passwords
// won't work with SMTP if 2-Step Verification is on, which Google requires
// for App Passwords anyway).
// Nothing about an order is stored anywhere else — this email IS the record.

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error(
      "Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables. See .env.example."
    );
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendOrderNotification(subject: string, lines: [string, string][]) {
  const to = process.env.ORDER_NOTIFICATION_EMAIL || "marylise@gmail.com";
  const transporter = getTransporter();

  const html = `
    <div style="font-family: sans-serif; color: #1a1a1a;">
      <h2 style="color: #630031;">${subject}</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${lines
          .map(
            ([label, value]) => `
          <tr>
            <td style="font-weight: 600; vertical-align: top; padding-right: 12px;">${label}</td>
            <td>${value || "—"}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="color: #888; font-size: 12px; margin-top: 16px;">
        Sent automatically from the Gobble Box website. No payment has been collected — follow up
        with the customer directly.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    subject,
    html,
  });
}
