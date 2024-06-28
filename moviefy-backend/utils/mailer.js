import { transporter } from "../config/mailer.js";
import { recoveryEmailBody } from "../mailTemplates/revoveryEmail.js";
import { verificationEmailBody } from "../mailTemplates/verificationEmail.js";

export function sendMail(email, subject, message) {
  const mailOptions = {
    from: { name: "Moviefy", address: "moviefyappbot@gmail.com" },
    to: email,
    subject,
    html: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}

export function sendVerificationEmail(email, username, token) {
  const subject = "Bienvenido/a a Moviefy";
  const message = verificationEmailBody(username, token, email);
  sendMail(email, subject, message);
}

export function sendPasswordRecoveryEmail(email, username, token) {
  const subject = "Recuperá tu contraseña de Moviefy";
  const message = recoveryEmailBody(username, token, email);
  sendMail(email, subject, message);
}
