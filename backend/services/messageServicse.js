import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// transporter fro send email message
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// HTML template for the email message
const ContactMessageBox = (name, email, message) => `
  <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 30px;">
    <div style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); padding: 25px; max-width: 600px; margin: 0 auto;"> 
      <h2 style="color: #2563eb; margin-top: 0; font-size: 20px; text-align: center;">
         New Portfolio Message
      </h2>
      <div style="margin-top: 20px; line-height: 1.6; color: #374151;">
        <p><strong style="color: #111827;">Name:</strong> ${name}</p>
        <p><strong style="color: #111827;">Email:</strong> ${email}</p>
      </div>
      <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 8px; color: #1f2937; font-size: 15px; white-space: pre-line;">
        ${message}
      </div>
    </div>
  </div>
`;

// Function to send contact message
export const sendContactMessage = async (name, email, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,       
    to: process.env.RECEIVER_EMAIL,      
    subject: "Message From Portfolio",
    html: ContactMessageBox(name, email, message),
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent successfully");
  } catch (error) {
    console.log("Failed to send  message:", error);
    throw new Error("Failed to send contact");
  }
};

export default sendContactMessage;
