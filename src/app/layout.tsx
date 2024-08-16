// 1. External modules
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// 2. Internal components
import { Providers } from '../store/Providers';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Design",
  description:
    "A platform for companies to contract graphic design services on a monthly subscription basis. Users can define design tasks, such as logos and banners, and communicate with designers through an integrated chat, all with minimal need for direct interaction and maximum automation of the process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
