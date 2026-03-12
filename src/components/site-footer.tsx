'use client';

import { ContactSettings, SocialLinks } from '@/config/contact.config';
import { cn } from '@/lib/utils';
import { Dot, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { LiveDateTimeDisplay } from './live-datetime';
import { Separator } from '@/ui/separator';

function FooterSocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <h1 className='text-xl font-semibold'>Socials</h1>
      <Link
        className='flex flex-row items-center gap-2 text-sm'
        target='_blank'
        href={SocialLinks.github}
      >
        <FaGithub className='size-4' />
        Github
      </Link>
      <Link
        className='flex flex-row items-center gap-2 text-sm'
        target='_blank'
        href={SocialLinks.linkedin}
      >
        <FaLinkedin className='size-4' />
        LinkedIn
      </Link>
    </div>
  );
}

function FooterContactLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <h1 className='text-xl font-semibold'>Contact Me</h1>
      <Link
        className='flex flex-row items-center gap-2 text-sm'
        target='_blank'
        href={`mailto:${ContactSettings.email}`}
      >
        <Mail className='size-4' />
        {ContactSettings.email}
      </Link>
      <Link
        className='flex flex-row items-center gap-2 text-sm'
        target='_blank'
        href={`tel:${ContactSettings.phone}`}
      >
        <Phone className='size-4' />
        {ContactSettings.phone}
      </Link>
    </div>
  );
}

function FooterQuickLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col items-end gap-4', className)}>
      <h1 className='text-xl font-semibold'>Quick Links</h1>
      <motion.div
        initial={{ x: 0, opacity: 0.7 }}
        whileHover={{ x: -10, opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <Link href={'/#hero'} className='flex flex-row items-center gap-2 text-sm'>
          Home
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0.7 }}
        whileHover={{ x: -10,  opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <Link
          href={'/#about'}
          className='flex flex-row items-center gap-2 text-sm'
        >
          About
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0.7 }}
        whileHover={{ x: -10,  opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <Link
          href={'/projects'}
          className='flex flex-row items-center gap-2 text-sm'
        >
          Projects
        </Link>
      </motion.div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className='h-100 w-full border-t border-dashed'>
      {/* Backdrop */}
      <div className='absolute -z-50 h-100 w-full overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-primary-foreground/20 h-full w-full'
        >
          <h1 className='text-[350px] font-semibold'>JUNKAI</h1>
        </motion.div>
      </div>
      {/* Main */}
      <div className='flex h-full w-full flex-col justify-between px-10 py-10'>
        <h1 className='text-2xl font-semibold'>No time like the present.</h1>
        <div className='my-8 flex h-full flex-row justify-between'>
          <div className='flex flex-row gap-20'>
            <FooterSocialLinks />
            <FooterContactLinks />
          </div>
          <div className='flex flex-row gap-20'>
            <FooterQuickLinks />
          </div>
        </div>
        <div className='flex w-full flex-row items-center justify-between'>
          <LiveDateTimeDisplay
            timezone='Asia/Singapore'
            className='text-muted-foreground text-sm'
          />
          <h1 className='text-sm'>
            © 2026 Zhang Junkai. All rights reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
}
