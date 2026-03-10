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
import { Separator } from '@/ui/separator';
import { skillList } from '@/data/skills';
import { Badge } from '@/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/ui/button';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { BentoSection } from '@/components/sections/bento-section';
import { ContactSection } from '@/components/sections/contact-section';

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
    <div className='flex w-full flex-col items-center'>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Bento Section for summary of skills etc. */}
      <BentoSection /> 

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
