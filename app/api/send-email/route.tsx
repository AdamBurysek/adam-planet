import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import FormEmail from '@/emails/FormEmail';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Body = {
  formValues: FormValues;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body: Body = (await request.json()) as Body;

  if (body) {
    try {
      const data = await resend.emails.send({
        from: 'info@adamplanet.cz',
        to: body.formValues.email,
        subject: 'Thank You for Your Message!',
        react: <FormEmail name={body.formValues.name} />,
      });

      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error });
    }
  }
}
