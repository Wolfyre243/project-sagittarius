'use client';

import Aurora from '@/components/backgrounds/aurora';
import { CSSIcon, HTMLIcon, JavascriptIcon } from '@/components/skill-icons';
import { ContactSettings, SocialLinks } from '@/config/contact.config';
import { OrbitingCircles } from '@/ui/orbiting-circles';
import { File, Mail, Phone } from 'lucide-react';
import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaLinux,
  FaUbuntu,
} from 'react-icons/fa';
import {
  RiCss3Fill,
  RiFlutterFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiNpmjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import {
  SiBlender,
  SiDrizzle,
  SiExpress,
  SiMysql,
  SiNestjs,
  SiPrisma,
  SiRedux,
} from 'react-icons/si';
import {
  BiLogoDocker,
  BiLogoPostgresql,
  BiLogoTypescript,
} from 'react-icons/bi';
import { FaDartLang } from 'react-icons/fa6';
import TextType from '@/components/text/typing-text';
import FuzzyText from '@/components/FuzzyText';
import { motion } from 'framer-motion';

const typingMessages = [
  'Full Stack Developer',
  'Lifelong Learner',
  'Dedicated Programmer',
  'Crafting Seamless Web Experiences',
  'Turning Ideas into Code',
  'Woke Up and Chose to Code',
  'Aspiring 10X Developer',
  'Can Center a Div',
];

export default function HomePage() {
  return (
    <div className='flex w-full flex-col'>
      {/* Background */}
      <div className='absolute top-0 -z-50 h-full w-full'>
        <Aurora
          colorStops={['#97F0D7', '#5AB9F0', '#686FF8', '#8E38FF']}
          blend={0.5}
          amplitude={0.5}
          speed={0.5}
        />
      </div>

      <section className='flex h-screen flex-col items-center justify-center p-6'>
        <div className='flex w-full flex-row items-center justify-between px-40'>
          {/* <TextType
              text={typingMessages}
              textColors={['#999999']}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter='|'
              className='text-muted-foreground text-xl'
            /> */}
          {/* Personal Info */}

          <div className='flex w-fit flex-col'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FuzzyText baseIntensity={0.1} enableHover={false}>
                ZHANG
              </FuzzyText>
              <FuzzyText baseIntensity={0.1} enableHover={false}>
                JUNKAI
              </FuzzyText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='mt-8'
            >
              {/* Contact Details */}
              <div className='flex flex-col gap-1'>
                <h4 className='mb-1 text-xl font-semibold'>Contact Me</h4>
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
              <div className='mt-4 flex flex-row gap-2'>
                <a target='_blank' href={SocialLinks.github}>
                  <FaGithub className='size-6' />
                </a>
                <a target='_blank' href={SocialLinks.linkedin}>
                  <FaLinkedin className='size-6' />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Orbiting Skills */}
          <div className='relative flex h-[600px] w-150 flex-col items-center justify-center overflow-hidden'>
            <OrbitingCircles radius={250}>
              {/* <JavascriptIcon />
              <HTMLIcon />
              <CSSIcon /> */}
              <RiJavascriptFill className='size-10' />
              <RiHtml5Fill className='size-10' />
              <RiCss3Fill className='size-10' />
              <RiReactjsFill className='size-10' />
              <SiRedux className='size-10' />
              <BiLogoTypescript className='size-10' />
              <RiTailwindCssFill className='size-10' />
              <RiNextjsFill className='size-10' />
              <BiLogoPostgresql className='size-10' />
              <SiMysql className='size-10' />
              <SiDrizzle className='size-10' />
              <SiPrisma className='size-10' />
            </OrbitingCircles>
            <OrbitingCircles radius={180} reverse speed={1.2}>
              <BiLogoDocker className='size-10' />
              <RiNodejsFill className='size-10' />
              <RiNpmjsFill className='size-10' />
              <FaGitAlt className='size-10' />
              <SiNestjs className='size-10' />
              <SiExpress className='size-10' />
              <RiFlutterFill className='size-10' />
              <FaDartLang className='size-10' />
            </OrbitingCircles>
            <OrbitingCircles radius={100} speed={1.5}>
              <FaJava className='size-10' />
              <FaLinux className='size-10' />
              <SiBlender className='size-10' />
              <FaUbuntu className='size-10' />
            </OrbitingCircles>
          </div>
        </div>
      </section>
    </div>
  );
}
