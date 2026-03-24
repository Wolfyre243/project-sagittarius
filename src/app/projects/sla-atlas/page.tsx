import { projectList } from '@/data/projects';
import { Badge } from '@/ui/badge';
import { format } from 'date-fns';

const projectData = projectList.find((p) => p.id === 'sla-atlas');

function PageHeader() {
  if (!projectData)
    return (
      <div>
        <h1>Missing project data.</h1>
      </div>
    );

  return (
    <div className='flex h-64 w-full flex-row border-b border-dashed'>
      <div className='flex h-full w-fit flex-col border-r border-dashed py-6'>
        <div className='px-1'>
          <p className='text-muted text-xs'>A.T.L.A.S.</p>
          <p className='text-muted text-xs'>
            Automated Tracking & Land Administration System
          </p>
        </div>
        <h1 className='flex w-fit border-y border-dashed px-4 py-3 text-9xl font-semibold text-nowrap'>
          SLA Atlas
        </h1>
        <p className='text-muted w-full pe-1 text-end text-sm'>
          {format(projectData.startDate, 'MMM yyyy')} -{' '}
          {projectData.endDate !== 'present'
            ? format(projectData.endDate, 'MMM yyyy')
            : 'Present'}
        </p>
      </div>
      <div className='text-muted-foreground flex h-full w-full flex-row justify-between'>
        <div className='text-muted flex flex-col p-2'>
          <div className='flex flex-row items-baseline gap-3'>
            <h1 className='text-xl font-medium'>atlas</h1>
            <p className='text-xs'>{`/'atləs/`}</p>
          </div>
          <p className='text-sm italic'>A book of maps or charts.</p>
        </div>
        <div className='flex h-full flex-col justify-end p-2 text-end'>
          <p className=''>In collaboration with</p>
          <h1 className='text-4xl'>Singapore Land Authority</h1>
        </div>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section id='intro' className='mb-10 border-b border-dashed'>
      <div className='flex flex-col gap-2 border-b border-dashed px-4 py-3'>
        <p className='text-muted-foreground text-sm'>Technologies</p>
        <h1 className='text-3xl font-semibold'>Built to last.</h1>
        <div className='flex flex-row flex-wrap gap-2'>
          {projectData?.tags?.map((tag) => (
            <Badge className='text-sm' key={crypto.randomUUID()}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className='flex flex-row'>
        {/* Description */}
        <div className='flex w-full flex-col border-r border-dashed'>
          <h1 className='mt-6 h-fit w-full border-y border-dashed py-1 ps-4 text-3xl font-semibold'>
            Project Description
          </h1>
          <p className='px-4 py-2'>
            This project significantly enhances the{' '}
            <strong>Singapore Land Authority (SLA)'s</strong> internal system.
            Tailored for SLA officers and administrators handling intricate
            datasets across multiple planning areas, the system delivers{' '}
            <span className='bg-teal-800'>
              accuracy, transparency, and full traceability
            </span>
            . These enhancements replace outdated manual processes, accelerate
            reliable decision-making, strengthen data integrity, and equip SLA
            teams to manage increasing land administration demands more
            efficiently.
          </p>
          <p className='px-4 py-2'>
            I was in charge of the overall system architecture and CICD of the
            project, ensuring that our GitHub workflows were in check. One key
            feature I worked on was the batch processing of the building files,
            to ensure maximum efficiency in the system.
          </p>
        </div>
        {/* Gallery */}
        <div className='p-6'>
          <img
            src='/projects/sla-atlas/preview.png'
            width={1200}
            className='rounded-md shadow'
          />
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id='features' className='mb-10 h-full border-b border-dashed'>
      <h1 className='mt-6 h-fit w-full text-center text-3xl font-semibold'>
        Features
      </h1>
      {/* Feature List */}
      <div className='flex flex-row gap-4'></div>
    </section>
  );
}

// TODO: Add interactive side menu
export default function ProjectSLAAtlasPage() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center border-b border-dashed'>
      <div className='h-full w-full border border-y-0 border-dashed md:w-4/5'>
        <PageHeader />
        <IntroSection />
        <FeaturesSection />
      </div>
    </div>
  );
}
