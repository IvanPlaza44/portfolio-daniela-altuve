import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // En las Serverless Functions es más fácil manejar JSON en vez de FormData
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message, organization } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'plazaivanalt@gmail.com',
      subject: `🚀 New Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #000; color: #fff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">New Portfolio Message</h2>
          </div>
          <div style="padding: 24px; color: #374151; line-height: 1.5;">
            <p style="margin-bottom: 20px; font-size: 16px;">You have received a new message through your portfolio contact form:</p>
            <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
              ${organization ? `<p style="margin: 0 0 8px 0;"><strong>Organization:</strong> ${organization}</p>` : ''}
            </div>
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
              <p style="margin-top: 20px;"><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; color: #4b5563; font-style: italic;">"${message}"</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return res.status(500).json({ error });
    }

    return res.status(200).json({ message: 'Sent successfully!' });
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}