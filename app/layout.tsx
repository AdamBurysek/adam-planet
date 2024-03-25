import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import CookiesIntroBanner from './components/cookies/cookiesIntroBanner/CookiesIntroBanner';
import GoogleAnalytics from './components/cookies/googleAnalytics/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Adam Planet',
  description: 'Electronic Music Producer',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <GoogleAnalytics />
    <body>
      {children}
      <CookiesIntroBanner />
    </body>
  </html>
);

export default RootLayout;
