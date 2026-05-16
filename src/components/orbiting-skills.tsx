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
import { DiRedis } from 'react-icons/di';
import { FaDartLang } from 'react-icons/fa6';
import { OrbitingCircles } from '@/ui/orbiting-circles';
import { FaGitAlt, FaJava, FaLinux, FaUbuntu } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export function SkillCircle({ className }: { className?: string }) {
  return (
    <div className={cn('relative flex h-[300px] w-80 flex-col items-center justify-center overflow-hidden', className)}>
      <OrbitingCircles radius={130}>
        <RiJavascriptFill className='size-5' key={crypto.randomUUID()} />
        <RiHtml5Fill className='size-5' key={crypto.randomUUID()} />
        <RiCss3Fill className='size-5' key={crypto.randomUUID()} />
        <DiRedis className='size-5' key={crypto.randomUUID()}/>
        <RiReactjsFill className='size-5' key={crypto.randomUUID()} />
        <SiRedux className='size-5' key={crypto.randomUUID()} />
        <BiLogoTypescript className='size-5' key={crypto.randomUUID()} />
        <RiTailwindCssFill className='size-5' key={crypto.randomUUID()} />
        <RiNextjsFill className='size-5' key={crypto.randomUUID()} />
        <BiLogoPostgresql className='size-5' key={crypto.randomUUID()} />
        <SiMysql className='size-5' key={crypto.randomUUID()} />
        <SiDrizzle className='size-5' key={crypto.randomUUID()} />
        <SiPrisma className='size-5' key={crypto.randomUUID()} />
      </OrbitingCircles>
      <OrbitingCircles radius={90} reverse speed={1.2}>
        <BiLogoDocker className='size-5' key={crypto.randomUUID()} />
        <RiNodejsFill className='size-5' key={crypto.randomUUID()} />
        <RiNpmjsFill className='size-5' key={crypto.randomUUID()} />
        <FaGitAlt className='size-5' key={crypto.randomUUID()} />
        <SiNestjs className='size-5' key={crypto.randomUUID()} />
        <SiExpress className='size-5' key={crypto.randomUUID()} />
        <RiFlutterFill className='size-5' key={crypto.randomUUID()} />
        <FaDartLang className='size-5' key={crypto.randomUUID()} />
      </OrbitingCircles>
      <OrbitingCircles radius={50} speed={1.5}>
        <FaJava className='size-5' key={crypto.randomUUID()} />
        <FaLinux className='size-5' key={crypto.randomUUID()} />
        <SiBlender className='size-5' key={crypto.randomUUID()} />
        <FaUbuntu className='size-5' key={crypto.randomUUID()} />
      </OrbitingCircles>
    </div>
  );
}
