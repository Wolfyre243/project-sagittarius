import { ContactSettings, SocialLinks } from '@/config/contact.config';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section
      id='contact'
      className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden p-6 z-0'
    >
      {/* Top-left gradient light - Light Red */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='pointer-events-none absolute -top-48 -left-40 h-100 w-100 rounded-full blur-3xl'
        style={{
          background:
            'radial-gradient(circle, rgba(255, 100, 100, 0.8) 0%, transparent 70%)',
        }}
      />

      {/* Bottom-right gradient light - Teal Blue */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='pointer-events-none absolute -right-40 -bottom-48 h-100 w-100 rounded-full opacity-40 blur-3xl'
        style={{
          background:
            'radial-gradient(circle, rgba(0, 200, 200, 0.8) 0%, transparent 70%)',
        }}
      />
      <div className='relative z-10 flex w-6xl flex-col items-center gap-4'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className='flex w-full flex-col items-center gap-4'
        >
          <h1 className='text-center text-5xl font-bold'>
            Every project is a{' '}
            <span className='text-teal-200'>new journey</span>.
          </h1>
          <span className='text-muted-foreground w-full self-center text-center text-lg md:w-2/3'>
            Got an idea? Great! Let's make it happen. <br />
            <br />
            Drop me a message, and let&apos;s discuss how I can contribute to
            your project.
          </span>
        </motion.div>
        <div className='mt-4 flex w-full flex-row items-center justify-center gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className='flex w-fit flex-row items-center gap-2 hover:underline'
          >
            <Mail className='size-4' />
            <a target='_blank' href={`mailto:${ContactSettings.email}`}>
              {ContactSettings.email}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className='flex w-fit flex-row items-center gap-2 hover:underline'
          >
            <Phone className='size-4' />
            <a
              target='_blank'
              href={`tel:${ContactSettings.phone.replace(' ', '')}`}
            >
              {ContactSettings.phone}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            className='flex w-fit flex-row items-center gap-2 hover:underline'
          >
            <FaLinkedin />
            <a target='_blank' href={SocialLinks.linkedin}>
              Zhang Junkai
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
