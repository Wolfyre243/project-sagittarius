import Dither from '../Dither';
import { motion } from 'framer-motion';
import FuzzyText from '../FuzzyText';
import { Copy, Dot, Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';
import { ContactSettings, SocialLinks } from '@/config/contact.config';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id='hero'
      className='flex h-screen w-full flex-col items-center justify-center border-b border-dashed'
    >
      {/* Backdrop */}
      <div className='absolute -z-50 h-screen w-full overflow-hidden opacity-30'>
        <Dither
          waveColor={[0.7, 0.7, 0.7]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.8}
          colorNum={10}
          pixelSize={3}
          waveAmplitude={0.35}
          waveFrequency={2.5}
          waveSpeed={0.08}
        />
      </div>
      <div className='flex h-full w-full flex-row items-center justify-between border border-y-0 border-dashed md:w-4/5'>
        <div className='flex w-full flex-col items-center justify-center gap-6 border border-x-0 border-dashed px-20 py-20'>
          <div className='flex w-fit flex-col'>
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FuzzyText baseIntensity={0.1} enableHover={false}>
                ZHANG JUNKAI
              </FuzzyText>
              {/* <h1 className='text-xl w-full text-center mt-4'>Full-stack Developer</h1> */}
              <div className='mt-6 flex w-full flex-row items-center justify-center gap-3 text-center text-xl font-semibold'>
                <h1>Full-stack</h1>
                <Dot />
                <h1>DevOps</h1>
                <Dot />
                <h1>Cloud</h1>
                <Dot />
                <h1>AI</h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='mt-4'
            >
              {/* Contact Details */}
              <div className='flex w-full flex-row items-center justify-center gap-12'>
                {/* <h4 className='mb-1 text-xl font-semibold'>Contact Me:</h4> */}
                <div className='flex w-fit flex-row items-center gap-2 hover:underline'>
                  <Mail className='size-4' />
                  <a target='_blank' href={`mailto:${ContactSettings.email}`}>
                    {ContactSettings.email}
                  </a>
                </div>
                <div className='flex w-fit flex-row items-center gap-2 hover:underline'>
                  <Phone className='size-4' />
                  <a
                    target='_blank'
                    href={`tel:${ContactSettings.phone.replace(' ', '')}`}
                  >
                    {ContactSettings.phone}
                  </a>
                </div>
              </div>
              {/* Socials */}
              <div className='mt-4 flex w-full flex-row items-center justify-center gap-2'>
                <a
                  target='_blank'
                  href={SocialLinks.github}
                  className='transition-all duration-150 ease-out hover:-translate-y-1'
                >
                  <FaGithub className='size-6' />
                </a>
                <a
                  target='_blank'
                  href={SocialLinks.linkedin}
                  className='transition-all duration-150 ease-out hover:-translate-y-1'
                >
                  <FaLinkedin className='size-6' />
                </a>
              </div>
            </motion.div>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <div className='bg-background text-muted-foreground flex w-fit flex-row items-center gap-4 rounded-md px-4 py-2 text-sm shadow-md'>
              <h1 className='font-mono'>$ &nbsp; zjk create-new-app@latest</h1>
              <Copy className='size-3 cursor-pointer' />
            </div>
            <Button size={'sm'} asChild>
              <Link
                href={'https://github.com/Wolfyre243/project-sagittarius'}
                target='_blank'
              >
                <FaGithub className='size-5' />
                Site Repo <SquareArrowOutUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
