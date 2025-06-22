import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { FormData } from "@/app/(pages)/contact/page";
import * as brevo from '@getbrevo/brevo'
dotenv.config();

const API_KEY = 'MY API KEY'

async function sendEmail({ name, email, message }: FormData) {
  try {
    const apiInstance = new brevo.TransactionalEmailsApi()
    // Set the API key for transactional emails
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, API_KEY)

    const sendSmtpEmail = new brevo.SendSmtpEmail()
    sendSmtpEmail.subject = 'New Lee Dyer Form Submission'
    sendSmtpEmail.htmlContent =
      `<p>You have received a new form submission:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>Message: ${message}</p>`
    sendSmtpEmail.sender = {
      name: 'Lee Dyer',
      email: 'lee.dyer.dev@gmail.com'
    }
    sendSmtpEmail.to = [
      {
        email,
        name
      }
    ]
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail)
    console.log('Email sent successfully:', result)
  } catch (error) {
    console.error('Error sending email:', error)
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
  