import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Strict input structural sanity assertions
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Required fields are missing validation hooks.' },
        { status: 400 }
      );
    }

    // Configure the transport layer engine using production credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailDataPayload = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || 'sales1@emraldace.com',
      replyTo: email,
      subject: `🚨 New Contact Form Enquiry from Emrald Ace website`,
      text: `
        New Contact Form Enquiry from Emrald Ace website:
        ------------------------------------------
        Client Name: ${name}
        Contact Number: ${phone}
        Email Address: ${email}
        
        Requirement Specification Message:
        ${message || 'No additional scope specifications attached.'}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0b63c5; margin-top: 0;">New Contact Form Enquiry from Emrald Ace website</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 30%;">Client Name:</td>
              <td style="padding: 8px 0; color: #475569;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Contact Number:</td>
              <td style="padding: 8px 0; color: #475569;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #475569;"><a href="mailto:${email}" style="color: #0b63c5; text-decoration: none;">${email}</a></td>
            </tr>
          </table>
          <h4 style="color: #0b63c5; margin-bottom: 8px; margin-top: 24px;">Requirement Specification Notes:</h4>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; font-size: 13px; color: #334155; border: 1px solid #f1f5f9; white-space: pre-wrap;">${message || 'No additional scope specifications attached.'}</div>
        </div>
      `,
    };

    // Execute standard transmission execution block
    await transporter.sendMail(mailDataPayload);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('SMTP core transport failure encountered:', error);
    return NextResponse.json(
      { error: 'Internal SMTP server communication routing breakdown.' },
      { status: 500 }
    );
  }
}