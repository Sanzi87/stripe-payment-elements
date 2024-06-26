import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stripe Payment',
  description: 'Stripe payment elements app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
