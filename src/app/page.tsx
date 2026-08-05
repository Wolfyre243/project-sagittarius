'use client';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { BentoSection } from '@/components/sections/bento-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ExperienceSection } from '@/components/sections/experience-section';

// const typingMessages = [
//   'Full Stack Developer',
//   'Lifelong Learner',
//   'Dedicated Programmer',
//   'Crafting Seamless Web Experiences',
//   'Turning Ideas into Code',
//   'Woke Up and Chose to Code',
//   'Aspiring 10X Developer',
//   'Can Center a Div',
// ];

export default function HomePage() {
  return (
    <div className='flex w-full flex-col items-center'>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Bento Section for summary of skills etc. */}
      <BentoSection /> 

      {/* Experiences */}
      {/* <ExperienceSection /> */}

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
