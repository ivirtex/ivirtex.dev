import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter
    .sendMail({
      from: "postmaster@sandboxc9ff558d95c640ad82e2e4b272058a35.mailgun.org",
      to: "contact@ivirtex.dev",
      subject: "New contact form submission from ivirtex.dev",
      html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    })
    .catch((err) => {
      console.error(err);

      return new Response("", { status: 500 });
    });

  return new Response("", { status: 200 });
}
