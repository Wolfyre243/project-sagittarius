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

export function SkillCircle() {
  return (
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
  );
}
