import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "nipsermcnamara@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log(result);
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}