import { Separator } from '@/ui/separator';
import { SkillCircle } from '../orbiting-skills';
import { skillList } from '@/data/skills';
import { Badge } from '@/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/button';
import Link from 'next/link';
import { ArrowRight, SquareArrowOutUpRight, ToolCase } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectList } from '@/data/projects';
import { ProjectCardMinimal } from '../projects/project-card';

export function BentoSection() {
  return (
    <section
      id='about'
      className='flex w-full flex-col items-center border-b border-dashed'
    >
      <div className='grid h-full w-full grid-cols-6 grid-rows-2 border border-y-0 border-dashed md:w-4/5'>
        <div className='col-span-4 col-start-1 flex flex-col border-r border-b border-dashed p-6'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-2xl font-semibold'>Skills</h1>
            <p className='text-muted-foreground font-mono text-sm'>01</p>
          </div>
          <div className='flex w-full flex-row items-start gap-6'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className='flex h-full flex-col items-center justify-center'
            >
              <SkillCircle />
            </motion.div>
            <div className='flex h-full w-full flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xl'>Full-Stack Development</h1>
                <Separator />
                <p className='mb-1 text-sm'>
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
                        key={crypto.randomUUID()}
                        className={cn('', skill.colour && `bg-${skill.colour}`)}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xl'>Cloud Systems</h1>
                <Separator />
                <p className='mb-1 text-sm'>
                  I've had a fair share of experience with Azure and AWS,
                  wielding fundamental knowledge of cloud systems and
                  containerisation. I explored Docker in my own time, leading to
                  my interests in networking and Linux as well.{' '}
                </p>
                <div className='flex w-full flex-row flex-wrap gap-2'>
                  {skillList
                    .filter((v) => v.category === 'cloud')
                    .map((skill) => (
                      <Badge key={crypto.randomUUID()}>{skill.name}</Badge>
                    ))}
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-xl'>DevOps</h1>
                <Separator />
                <p className='mb-1 text-sm'>
                  I am familiar with Git and GitHub, and well equipped with the
                  relevant skills to construct a development pipeline to improve
                  my team's efficiency.
                </p>
                <div className='flex w-full flex-row flex-wrap gap-2'>
                  {skillList
                    .filter((v) => v.category === 'devops')
                    .map((skill) => (
                      <Badge key={crypto.randomUUID()}>{skill.name}</Badge>
                    ))}
                </div>
              </div>
            </div>
          </div>
          {/* <Button variant={'secondary'} size={'sm'} className='w-fit self-end' asChild>
            <Link href={'/about'}>
              More Info <ArrowRight />
            </Link>
          </Button> */}
        </div>
        <div className='col-span-2 col-start-5 flex flex-col gap-4 border-b border-dashed p-6'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-2xl font-semibold'>Certifications</h1>
            <p className='text-muted-foreground font-mono text-sm'>02</p>
          </div>
          <div className='flex h-full w-full flex-col gap-4'>
            <h1>Nothing to see here yet...</h1>
          </div>
        </div>
        <div className='col-span-6 col-start-1 row-span-1 row-start-2 flex flex-col gap-4 p-6'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-2xl font-semibold'>Featured Projects</h1>
            <p className='text-muted-foreground font-mono text-sm'>03</p>
          </div>
          <div className='flex h-full w-full flex-row gap-4'>
            {projectList
              .sort(
                (a, b) =>
                  new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
              )
              .slice(0, 3)
              .map((project, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: (i + 2) / 10 }}
                  className='w-full'
                  key={crypto.randomUUID()}
                >
                  <ProjectCardMinimal project={project} />
                </motion.div>
              ))}
            {Array.from({ length: 3 - projectList.length }).map((_, i) => (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (i + 3) / 10 }}
                className='w-full'
                key={crypto.randomUUID()}
              >
                <div className='flex h-full w-full flex-col items-center justify-center rounded-md border border-dashed px-4 py-3'>
                  <ToolCase className='mb-2 size-8' />
                  <h1 className='text-xl font-semibold'>In development...</h1>
                  <p className='text-sm'>
                    Awesome projects coming soon. Stay tuned!
                  </p>
                  <Button
                    variant={'link'}
                    size={'sm'}
                    className='text-muted-foreground mt-2 text-sm'
                    asChild
                  >
                    <Link href={'/blog'}>
                      Read my blog <SquareArrowOutUpRight />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <Button
            variant={'outline'}
            size={'sm'}
            className='w-fit self-end'
            asChild
          >
            <Link href={'/projects'}>
              See All <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
