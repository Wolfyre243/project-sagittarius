import { ProjectData } from '@/data/projects';
import { format } from 'date-fns';
import SpotlightCard from '../SpotlightCard';

export function ProjectCardMinimal({ project }: { project: ProjectData }) {
  return (
    <SpotlightCard className='bg-card flex h-full w-full flex-col gap-2 rounded-md border px-4 py-3'>
      <div className='flex flex-row items-center justify-between font-medium'>
        <h1 className='text-xl font-semibold'>{project.name}</h1>
        <p className='text-muted-foreground text-xs'>
          {format(project.startDate, 'MMM yyyy')} -{' '}
          {project.endDate !== 'present'
            ? format(project.endDate, 'MMM yyyy')
            : 'Present'}
        </p>
      </div>
      <p className='text-muted-foreground text-sm'>{project.description}</p>
    </SpotlightCard>
  );
}
