import { ProjectData } from '@/data/projects';
import { format } from 'date-fns';
import SpotlightCard from '../SpotlightCard';
import { Badge } from '@/ui/badge';

export function ProjectCardMinimal({ project }: { project: ProjectData }) {
  return (
    <SpotlightCard
      spotlightColor={project.themeColor ?? 'rgba(100, 200, 243, 0.15)'}
      className='bg-card flex h-full w-full flex-col gap-2 rounded-md border px-4 py-3'
    >
      <div className='flex flex-row items-center justify-between font-medium'>
        <h1 className='text-xl font-semibold'>{project.name}</h1>
        <p className='text-muted-foreground text-xs'>
          {format(project.startDate, 'MMM yyyy')} -{' '}
          {project.endDate !== 'present'
            ? format(project.endDate, 'MMM yyyy')
            : 'Present'}
        </p>
      </div>
      <img
        src={project.image ?? '/projects/fallback.png'}
        className='aspect-16/9 rounded-md shadow-md'
      />
      <p className='text-muted-foreground text-sm'>{project.description}</p>
      <div className='text-muted-foreground flex flex-row flex-wrap gap-2'>
        {project.tags?.length !== 0 &&
          project.tags
            ?.slice(0, 5)
            .map((tag) => <Badge variant={'outline'} key={crypto.randomUUID()}>#{tag}</Badge>)}
        {project.tags && project.tags?.length > 5 && <Badge variant={'outline'}>...</Badge>}
      </div>
    </SpotlightCard>
  );
}
