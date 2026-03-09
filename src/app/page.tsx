'use client';

import Aurora from '@/components/backgrounds/aurora';
import { CSSIcon, HTMLIcon, JavascriptIcon } from '@/components/skill-icons';
import { ContactSettings, SocialLinks } from '@/config/contact.config';
import { OrbitingCircles } from '@/ui/orbiting-circles';
import { Copy, Dot, File, Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';
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
import { Separator } from '@/ui/separator';
import { skillList } from '@/data/skills';
import { Badge } from '@/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/ui/button';

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
  "Hello! I'm Junkai, a passionate Full Stack Developer and student at Singapore Polytechnic. " +
  'With a strong foundation in technologies like Next.js and a curiosity for solving real-world problems, I love turning ideas into functional, scalable solutions.\n' +
  'As a lifelong learner, I’m constantly exploring new tools and frameworks to enhance my skills. ' +
  'Whether it’s designing seamless frontend experiences or building robust backend systems, I learn through challenges that push me to grow, believing that there is always room for greater improvement.\n' +
  'I’m excited to take on opportunities; be it internships, freelance projects, or collaborations, I hope to contribute to innovative teams while balancing my studies.\n' +
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
            <div className='flex flex-row items-center gap-4'>
              <div className='bg-background text-muted-foreground flex w-fit flex-row items-center gap-4 rounded-md px-4 py-2 text-sm shadow-md'>
                <h1 className='font-mono'>
                  $ &nbsp; zjk create-new-app@latest
                </h1>
                <Copy className='size-3 cursor-pointer' />
              </div>
              <Button size={'sm'} asChild>
                <Link href={'https://github.com/Wolfyre243/project-sagittarius'} target='_blank'>
                  <FaGithub className='size-5' /> GitHub Repo <SquareArrowOutUpRight />
                </Link>
              </Button>
            </div>
          </div>

          {/* Orbiting Skills */}
          {/* <SkillCircle /> */}
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='flex w-full flex-col items-center border-b border-dashed'
      >
        {/* Backdrop */}
        <div className='absolute -z-50 h-100 w-full overflow-hidden md:w-4/5'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-accent/40 h-full w-full px-6 py-4'
          >
            <h1 className='text-9xl font-medium'>ABOUT</h1>
            <p className='animate-pulse text-sm font-medium'>
              Loading entity profile...
              <br />
              Matching identity...
              <br />
              Verifying checksum: 24% complete...
              <br />
              Checksum successfully verified.
              <br />
              Decrypting...
              <br />
              Identity match success.
              <br />
              Welcome home, Wolfyre.
            </p>
          </motion.div>
        </div>
        {/* Main Content */}
        <div className='flex h-full flex-col items-center justify-center border border-y-0 border-dashed md:w-4/5'>
          <div className='flex w-4xl flex-col gap-4 py-20'>
            <div className='flex w-full flex-col'>
              {aboutMe.split('\n').map((line, index) => (
                <div key={index}>
                  <p>{line}</p>
                  {index + 1 !== aboutMe.split('\n').length && <br />}
                </div>
              ))}
            </div>
            <Separator />
            <div className='flex flex-col gap-2'>
              <blockquote className='flex w-full flex-col gap-4 text-2xl font-semibold italic'>
                ❝In the midst of chaos, there is also opportunity.❞
              </blockquote>
              <div>
                <span className='text-xl'>- Sun Tzu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Projects Peek */}
      <section
        id='about'
        className='flex w-full flex-col items-center border-b border-dashed'
      >
        <div className='grid h-full w-full grid-cols-6 grid-rows-2 border border-y-0 border-dashed md:w-4/5'>
          <div className='col-span-4 col-start-1 flex flex-col gap-4 border-r border-b border-dashed p-6'>
            <div className='flex flex-row justify-between'>
              <h1 className='text-2xl font-semibold'>Skills</h1>
              <p className='text-muted-foreground font-mono text-sm'>01</p>
            </div>
            <div className='flex w-full flex-row items-start gap-6'>
              <div className='flex h-full flex-col items-center justify-center'>
                <SkillCircle />
              </div>
              <div className='flex h-full w-full flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xl'>Full-Stack Development</h1>
                  <Separator />
                  <p className='text-sm'>
                    I am familiar with modern web and backend frameworks as well
                    as databases and ORMs.
                  </p>
                  <div className='flex w-full flex-row flex-wrap gap-2'>
                    {skillList
                      .filter(
                        (v) =>
                          v.category === 'fullstack' || v.category === 'mobile',
                      )
                      .map((skill) => (
                        <Badge
                          className={cn(
                            '',
                            skill.colour && `bg-${skill.colour}`,
                          )}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xl'>Cloud Systems</h1>
                  <Separator />
                  <p className='text-sm'>
                    I've had a fair share of experience with Azure and AWS,
                    wielding fundamental knowledge of cloud systems and
                    containerisation. I explored Docker in my own time, leading
                    to my interests in networking and Linux as well.{' '}
                  </p>
                  <div className='flex w-full flex-row flex-wrap gap-2'>
                    {skillList
                      .filter((v) => v.category === 'cloud')
                      .map((skill) => (
                        <Badge>{skill.name}</Badge>
                      ))}
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xl'>DevOps</h1>
                  <Separator />
                  <p className='text-sm'>
                    I am familiar with Git and GitHub, and well equipped with
                    the relevant skills to construct a development pipeline to
                    improve my team's efficiency.
                  </p>
                  <div className='flex w-full flex-row flex-wrap gap-2'>
                    {skillList
                      .filter((v) => v.category === 'devops')
                      .map((skill) => (
                        <Badge>{skill.name}</Badge>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <Button size={'sm'} className='w-fit self-end' asChild>
              <Link href={'/about'}>More Info</Link>
            </Button>
          </div>
          <div className='col-span-2 col-start-5 flex flex-col gap-4 border-b border-dashed'>
            <h1>hi</h1>
          </div>
          <div className='col-span-2 col-start-1 row-span-1 row-start-2 flex flex-col gap-4 border-r border-dashed'>
            <h1>hi</h1>
          </div>
          <div className='col-span-2 col-start-3 row-span-1 row-start-2 flex flex-col gap-4 border-r border-dashed'>
            <h1>hi</h1>
          </div>
          <div className='col-span-2 col-start-5 row-span-1 row-start-2 flex flex-col gap-4 border-dashed'>
            <h1>hi</h1>
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
