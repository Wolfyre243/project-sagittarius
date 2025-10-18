import { ThemeProvider } from '@/context/theme-provider';
import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';

// @ts-expect-error CSS Import
import './globals.css';
import { NavBar } from '@/components/navigation/nav-bar';
import ClickSpark from '@/components/ClickSpark';
import { SiteFooter } from '@/components/site-footer';

const geistSans = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio Site',
  description: 'Welcome to my Portfolio Site!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <main className='flex min-h-screen max-w-screen flex-col items-center justify-center'>
              <NavBar />
              {children}
              <SiteFooter />
            </main>
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
