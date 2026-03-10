import { ThemeProvider } from '@/context/theme-provider';
import type { Metadata } from 'next';
import { Manrope, Inter, Montserrat, JetBrains_Mono } from 'next/font/google';
// @ts-ignore
import './globals.css';
import { NavBar } from '@/components/navigation/nav-bar';
import ClickSpark from '@/components/ClickSpark';
import { SiteFooter } from '@/components/site-footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import LoadingScreen from '@/components/loading-screen';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Zhang Junkai - Aspiring Software Engineer',
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
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/* <LoadingScreen /> */}
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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
