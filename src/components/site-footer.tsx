import { SocialLinks } from "@/config/contact.config";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className='bg-secondary flex w-full flex-col gap-4 items-center justify-center py-4'>
      <div className='mt-4 flex flex-row gap-2'>
        <a target='_blank' href={SocialLinks.github}>
          <FaGithub className='size-6' />
        </a>
        <a target='_blank' href={SocialLinks.linkedin}>
          <FaLinkedin className='size-6' />
        </a>
      </div>
      <h1 className='text-sm'>© 2025 Zhang Junkai. All rights reserved.</h1>
    </footer>
  );
}
