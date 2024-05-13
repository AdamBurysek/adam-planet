/* eslint-disable react/jsx-one-expression-per-line */
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
import React from 'react';

import { Text } from './_components/StyledComponents';

const FormEmail = ({ name }: { name: string }) => (
  <Html>
    <Preview>Thank you for your message</Preview>
    <Tailwind>
      <Body>
        <Container>
          <Text>Dear {name},</Text>
          <Text>
            Thank you for reaching out! I&apos;ve received your message and will
            get back to you as soon as possible.
          </Text>
          <Text>Best regards, </Text>
          <Text>Adam Planet</Text>
          <Img
            alt="Adam Planet Logo"
            className="relative mt-10 mb-10"
            height="80"
            src="https://res.cloudinary.com/dkc6fl63j/image/upload/v1711548687/r5idhkhxjec8raa2m0rp.png"
            width="80"
          />
          <Hr className="mt-16" />
          <Link href="https://music.adamplanet.cz/">music.adamplanet.cz</Link>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default FormEmail;
