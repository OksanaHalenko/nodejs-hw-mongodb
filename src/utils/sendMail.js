import nodemailer from 'nodemailer';

import { SMTP } from '../constants/index.js';

const transport = nodemailer.createTransport({
  host: SMTP.SMTP_HOST,
  port: Number(SMTP.SMTP_PORT),
  auth: {
    user: SMTP.SMTP_USER,
    pass: SMTP.SMTP_PASSWORD,
  },
});

export async function sendEmail(message) {
  return await transport.sendMail(message);
}
