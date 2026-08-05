import { ThemeProvider } from '@/context/theme-provider';
import type { Metadata } from 'next';
import {
  Manrope,
  Inter,
  Montserrat,
  JetBrains_Mono,
  Noto_Sans,
  Oxanium,
} from 'next/font/google';
// @ts-ignore
import './globals.css';
import { NavBar } from '@/components/navigation/nav-bar';
import ClickSpark from '@/components/ClickSpark';
import { SiteFooter } from '@/components/site-footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import LoadingScreen from '@/components/loading-screen';
import { SystemConfig } from '@/config/system.config';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

const oxanium = Oxanium({
  variable: '--font-oxanium',
  subsets: ['latin'],
});

const PUBLIC_BASE_URL = SystemConfig.PUBLIC_BASE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_BASE_URL),
  title: 'Zhang Junkai - Full-Stack Developer & Software Engineer',
  description:
    'Full-stack developer skilled in Web Development, Systems Design and DevOps. View my software engineering projects here.',
  applicationName: `Zhang Junkai's Portfolio`,
  keywords: [

  ],
  authors: [{ name: 'Zhang Junkai' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Zhang Junkai - Full-Stack Developer & Software Engineer',
    description:
      'Full-stack developer skilled in Web Development, Systems Design and DevOps. View my software engineering projects here.',
    url: PUBLIC_BASE_URL,
    siteName: `Zhang Junkai's Portfolio`,
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhang Junkai - Full-Stack Developer & Software Engineer',
    description:
      'Full-stack developer skilled in Web Development, Systems Design and DevOps. View my software engineering projects here.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='apple-mobile-web-app-title' content='Zhang Junkai' />
      </head>
      <body className={`${oxanium.variable} antialiased`}>
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
