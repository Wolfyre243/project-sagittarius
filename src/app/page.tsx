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
import FuzzyText from '@/components/FuzzyText';
import { motion } from 'framer-motion';
import { SkillCircle } from '@/components/orbiting-skills';

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

const aboutMe =
  'Hello world! I am Junkai, a passionate Full Stack Developer and student at Singapore Polytechnic. ' +
  'With a strong foundation in technologies like Next.js and a curiosity for solving real-world problems, I love turning ideas into functional, scalable solutions.\n' +
  'As a lifelong learner, I’m constantly exploring new tools and frameworks to enhance my skills. ' +
  'Whether it’s designing seamless frontend experiences or building robust backend systems, I learn through challenges that push me to grow, believing that there is always room for greater improvement.\n' +
  'I’m excited to take on opportunities—be it internships, freelance projects, or collaborations—that let me contribute to innovative teams while balancing my studies.\n' +
  'Let’s connect to create something amazing together!';

export default function HomePage() {
  return (
    <div className='flex w-full flex-col'>
      {/* Background */}
      <div className='absolute top-0 -z-50 h-screen w-full'>
        <Aurora
          colorStops={['#97F0D7', '#5AB9F0', '#686FF8', '#8E38FF']}
          blend={0.5}
          amplitude={0.5}
          speed={0.5}
        />
      </div>

      {/* Hero Section */}
      <section
        id='hero'
        className='flex h-screen flex-col items-center justify-center p-6'
      >
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
                <h4 className='mb-1 text-xl font-semibold'>Contact Me:</h4>
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

          {/* Orbiting Skills */}
          <SkillCircle />
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='flex h-screen flex-col items-center justify-center p-6'
      >
        <div className='flex w-3xl flex-col gap-4'>
          <h1 className='text-3xl font-bold'>About Me</h1>
          <div>
            {aboutMe.split('\n').map((line, index) => (
              <div key={index}>
                <p>{line}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id='quote'
        className='flex h-screen flex-col items-center justify-center p-6'
      >
        <div className='flex flex-col gap-8'>
          <blockquote className='flex w-6xl flex-col gap-4 text-6xl font-semibold italic'>
            ❝In the midst of chaos, there is also opportunity.❞
          </blockquote>
          <div>
            <span className='text-xl'>- Sun Tzu</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='flex h-screen flex-col items-center justify-center p-6'
      >
        <div className='flex w-6xl flex-col items-center gap-4'>
          <h1 className='text-center text-5xl font-bold'>
            Let&apos;s Get In Touch!
          </h1>
          <span className='text-muted-foreground w-2/3 self-center text-center text-lg'>
            I am thrilled to explore new opportunities as a junior developer!{' '}
            <br />
            Drop me a message, and let&apos;s discuss how I can contribute to
            your project.
          </span>
          <div className='mt-8 flex flex-row items-center gap-8'>
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
            <div className='flex w-fit flex-row items-center gap-2 hover:underline'>
              <FaLinkedin />
              <a target='_blank' href={SocialLinks.linkedin}>
                Zhang Junkai
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
