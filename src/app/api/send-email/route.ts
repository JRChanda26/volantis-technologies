import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();
    
        // Create the transporter using Gmail service
        const transporter = nodemailer.createTransport({
          service: "gmail",
          secure: true,
          port: 465,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
    
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: "pragatika.r@iosyssoftware.com",
          subject: "Connection Request",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px;">
              <h1 style="color: #007BFF;">Hello,</h1>
              <p>
                The user with the email address <strong>${email}</strong> wants to connect with you.
              </p>
              <p style="margin-top: 20px;">Please respond to their request at your earliest convenience.</p>
              <footer style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 10px; font-size: 0.8em; color: #777;">
                <p>&copy; 2024 NextJS Mailer | All Rights Reserved.</p>
              </footer>
            </div>
          `,
        };
    
        // Send email
        const info = await transporter.sendMail(mailOptions);
    
        // Respond with success
        return NextResponse.json({
          success: true,
          message: "Email sent successfully",
          response: info,
        });
      } catch (error) {
        console.error("Error sending email:", error);
    
        // Respond with failure
        return NextResponse.json(
          { success: false, message: "Failed to send email" },
          { status: 500 }
        );
      }
    
}
