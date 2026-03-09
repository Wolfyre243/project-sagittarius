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
import { OrbitingCircles } from '@/ui/orbiting-circles';
import { FaGitAlt, FaJava, FaLinux, FaUbuntu } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export function SkillCircle({ className }: { className?: string }) {
  return (
    <div className={cn('relative flex h-[300px] w-80 flex-col items-center justify-center overflow-hidden', className)}>
      <OrbitingCircles radius={130}>
        {/* <JavascriptIcon />
              <HTMLIcon />
              <CSSIcon /> */}
        <RiJavascriptFill className='size-5' />
        <RiHtml5Fill className='size-5' />
        <RiCss3Fill className='size-5' />
        <RiReactjsFill className='size-5' />
        <SiRedux className='size-5' />
        <BiLogoTypescript className='size-5' />
        <RiTailwindCssFill className='size-5' />
        <RiNextjsFill className='size-5' />
        <BiLogoPostgresql className='size-5' />
        <SiMysql className='size-5' />
        <SiDrizzle className='size-5' />
        <SiPrisma className='size-5' />
      </OrbitingCircles>
      <OrbitingCircles radius={90} reverse speed={1.2}>
        <BiLogoDocker className='size-5' />
        <RiNodejsFill className='size-5' />
        <RiNpmjsFill className='size-5' />
        <FaGitAlt className='size-5' />
        <SiNestjs className='size-5' />
        <SiExpress className='size-5' />
        <RiFlutterFill className='size-5' />
        <FaDartLang className='size-5' />
      </OrbitingCircles>
      <OrbitingCircles radius={50} speed={1.5}>
        <FaJava className='size-5' />
        <FaLinux className='size-5' />
        <SiBlender className='size-5' />
        <FaUbuntu className='size-5' />
      </OrbitingCircles>
    </div>
  );
}
