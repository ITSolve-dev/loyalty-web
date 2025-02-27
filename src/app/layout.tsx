// import "./globals.css";
import type { Metadata } from 'next';
import Script from 'next/script';

import { Box } from '@mui/material';

import { ThemeRegistry } from '@/shared';
import QRButton from '@/shared/ui/QRButton';
import { Providers } from '@/shared/Providers';

import 'swiper/css';
import 'swiper/css/free-mode';

export const metadata: Metadata = {
  title: 'Template Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" />
      </head>
      <body>
        <Providers>
          <ThemeRegistry options={{ key: 'mui' }}>
            {/* <Link href="/">Главная</Link>
            <Link href="/institutions/1">Заведение</Link>
            <Link href="/dashboard/customer">Customer</Link>
            <Link href="/dashboard/employee">Employee</Link>
            <Link href="/profile">Профиль</Link> */}
            <Box sx={{ p: '10px 16px' }}>{children}</Box>
            <Box sx={{ position: 'fixed', bottom: 16, left: 16, zIndex: 999 }}>
              <QRButton />
            </Box>
          </ThemeRegistry>
        </Providers>
        <Script src="https://telegram.org/js/telegram-web-app.js" />
      </body>
    </html>
  );
}
