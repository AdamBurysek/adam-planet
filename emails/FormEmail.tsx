import React from 'react';
import {
  Html,
  Body,
  Container,
  Tailwind,
  Link,
  Preview,
  Hr,
  Img,
} from '@react-email/components';

import { Text } from './_components/StyledComponents';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const FormEmail = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Thank you for your message</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Img
              style={{
                position: 'relative',
                left: '50%',
                marginTop: 40,
                marginBottom: 40,
              }}
              src={`${baseUrl}/static/ap-logo.png`}
              alt="Adam Planet Logo"
              width="80"
              height="80"
            />
            <Text>Dear {name}, </Text>
            <Text>
              Thank you for reaching out! I've received your message and will
              get back to you as soon as possible.
            </Text>
            <Text>Best regards, </Text>
            <Text>Adam Planet</Text>
            <Hr className="mt-16" />
            <Link href="https://music.adamplanet.cz/">music.adamplanet.cz</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default FormEmail;
