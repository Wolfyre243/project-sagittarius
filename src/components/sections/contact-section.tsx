import { ContactSettings, SocialLinks } from "@/config/contact.config";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  return (
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
          Drop me a message, and let&apos;s discuss how I can contribute to your
          project.
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
  );
}
