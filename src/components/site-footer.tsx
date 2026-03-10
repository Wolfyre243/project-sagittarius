import { ContactSettings, SocialLinks } from "@/config/contact.config";
import { Dot, Mail } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className='flex w-full flex-row gap-4 items-center justify-between px-10 py-6'>
      <div className='flex flex-row items-center gap-4'>
        <Dot className="size-6"/>
        <div className="border-b-2 border-primary h-0.5 w-20"></div>
        <Link className="flex flex-row gap-2 items-center text-sm" target='_blank' href={SocialLinks.github}>
          <FaGithub className='size-5' />
          Github
        </Link>
        <Link className="flex flex-row gap-2 items-center text-sm" target='_blank' href={SocialLinks.linkedin}>
          <FaLinkedin className='size-5' />
          LinkedIn
        </Link>
        <div className="border-b-2 border-primary h-0.5 w-50"></div>
        <Link className="flex flex-row gap-2 items-center text-sm" target='_blank' href={SocialLinks.linkedin}>
          <Mail className='size-5' />
          {ContactSettings.email}
        </Link>
      </div>
      <h1 className='text-sm'>© 2026 Zhang Junkai. All rights reserved.</h1>
    </footer>
  );
}
