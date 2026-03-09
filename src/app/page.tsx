'use client';

import Aurora from '@/components/backgrounds/aurora';
import { CSSIcon, HTMLIcon, JavascriptIcon } from '@/components/skill-icons';
import { ContactSettings, SocialLinks } from '@/config/contact.config';
import { OrbitingCircles } from '@/ui/orbiting-circles';
import { Copy, Dot, File, Mail, Phone } from 'lucide-react';
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
import Dither from '@/components/Dither';

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
    <div className='flex w-full flex-col items-center'>
      {/* Hero Section */}
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
          {/* <TextType
              text={typingMessages}
              textColors={['#999999']}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter='|'
              className='text-muted-foreground text-xl'
            /> */}
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
                <div className='mt-6 flex w-full flex-row items-center justify-center gap-3 text-center text-xl'>
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
            <div className='bg-background text-muted-foreground flex w-fit flex-row gap-4 rounded-md px-4 py-2 text-sm items-center shadow-md'>
              <h1 className='font-mono'>$ &nbsp; zjk create-new-app@latest</h1>
              <Copy className='size-3 cursor-pointer' />
            </div>
          </div>

          {/* Orbiting Skills */}
          {/* <SkillCircle /> */}
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='flex h-screen w-full flex-col items-center border-b border-dashed'
      >
        <div className='flex h-full w-full flex-col items-center justify-center border border-y-0 border-dashed px-20 md:w-4/5'>
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
