'use client';

import { ProjectCardMinimal } from '@/components/projects/project-card';
import { projectList } from '@/data/projects';
import { motion } from 'framer-motion';

function ProjectsPageHeader() {
  return (
    <div className='flex w-full flex-row justify-between border-b border-dashed'>
      <div className='w-fit border-r border-dashed py-8'>
        <p className='text-muted text-xs'>py-8 text-9xl border-dashed</p>
        <h1 className='flex w-fit border-y border-dashed px-4 py-3 text-9xl font-semibold'>
          Projects
        </h1>
      </div>
      <div className='text-muted-foreground h-full w-fit px-4 py-1 text-end text-7xl'>
        <h1>Ready</h1>
        <h1>Set</h1>
        <h1>Build</h1>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className='flex h-screen w-full flex-col items-center border-b border-dashed'>
      <div className='h-full w-full border border-y-0 border-dashed md:w-4/5'>
        <ProjectsPageHeader />
        <div className='flex h-full w-full flex-row flex-wrap py-4 px-2'>
          {projectList.map((project, i) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (i + 2) / 10 }}
              className='w-full md:w-1/4 h-fit px-3'
              key={crypto.randomUUID()}
            >
              <ProjectCardMinimal project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
