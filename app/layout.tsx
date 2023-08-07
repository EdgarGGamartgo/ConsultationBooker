import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "tw-elements/dist/css/tw-elements.min.css";
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Consulta Fácil',
  description: 'Agenda una consulta fácil y rápido',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
