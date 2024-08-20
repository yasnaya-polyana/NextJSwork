import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

 
export const metadata: Metadata = {
  title: {
    template: '%s | Oscar Invoices Dashboard',
    default: 'Oscar Dashboard',
  },
  description: 'Next.js Invoicing Dashboard built with Nextjs.',
  metadataBase: new URL('https://next-j-swork-gamma.vercel.app/'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
