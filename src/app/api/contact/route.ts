import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { FormData } from "@/app/(pages)/contact/page";
import { transporter } from "../../../nodemailer";
dotenv.config();

const GMAIL_USER = process.env.GMAIL_USER;

async function sendEmail({ name, email, message }: FormData) {
  try {
    const result = await transporter.sendMail({
      from: "Your Server",
      to: GMAIL_USER,
      subject: "New Lee Dyer Form Submission",
      html: `<p>You have received a new form submission:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>Message: ${message}</p>`,
      text: `You have received a new form submission: Name: ${name}, Email: ${email}. Message: ${message}`,
    });
    console.log("Email sent successfully:", result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await sendEmail(body);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (e) {
    return NextResponse.json({ errors: e }, { status: 400 });
  }
}
