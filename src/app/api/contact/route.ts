import { NextResponse } from 'next/server';
import { verifyRecaptchaToken } from '@/utils/recaptcha';

type ContactPayload = {
  name?: string;
  email?: string;
  contact?: string;
  address?: string;
  message?: string;
  recaptchaToken?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }

  const { name, email, contact, address, message, recaptchaToken } = payload;

  if (!name?.trim() || !email?.trim() || !contact?.trim() || !address?.trim() || !message?.trim()) {
    return NextResponse.json(
      { success: false, error: 'Please fill in all fields.' },
      { status: 400 }
    );
  }

  if (!recaptchaToken) {
    return NextResponse.json(
      { success: false, error: 'Please complete the reCAPTCHA.' },
      { status: 400 }
    );
  }

  const isHuman = await verifyRecaptchaToken(recaptchaToken);

  if (!isHuman) {
    return NextResponse.json(
      { success: false, error: 'reCAPTCHA verification failed. Please try again.' },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}
