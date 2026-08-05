import WireframeBuilding from '@/components/wireframe-building';
import { projectList } from '@/data/projects';
import { Badge } from '@/ui/badge';
import { Separator } from '@/ui/separator';
import { Skeleton } from '@/ui/skeleton';
import { format } from 'date-fns';
import { Building2, Star, User } from 'lucide-react';
import Link from 'next/link';

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
          A.T.L.A.S.
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
    <section id='intro' className='border-b border-dashed'>
      <div className='flex flex-row items-center gap-8 border-b border-dashed px-4 py-3'>
        <div className='flex flex-col gap-1'>
          <p className='text-muted-foreground text-sm'>Technologies</p>
          {/* <h1 className='text-3xl font-semibold'>Built to last.</h1> */}
          <div className='flex flex-row gap-2'>
            {projectData?.tags?.map((tag) => (
              <Badge className='text-sm' key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <Separator orientation='vertical' className='min-h-10' />
        <div className='flex flex-col gap-1'>
          <p className='text-muted-foreground text-sm'>Contributors</p>
          <div className='flex flex-row gap-2'>
            {projectData?.contributors?.map((c) => (
              <Link href={c.link} key={c.name}>
                <Badge variant={'outline'} className='flex gap-2 text-sm'>
                  <User />
                  {c.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
        <Separator orientation='vertical' className='min-h-10' />
        <div className='flex flex-col gap-1'>
          <p className='text-muted-foreground text-sm'>Awards</p>
          <div className='flex flex-row gap-2'>
            <Link href='/' className='flex items-center gap-2'>
              <Star className='size-4' />
              NA
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-row'>
        {/* Description */}
        <div className='flex w-full flex-col justify-center space-y-4 border-r border-dashed px-6'>
          <h1 className='h-fit w-full text-3xl font-semibold'>
            Project Description
          </h1>
          <span className='text-muted-foreground text-xl italic'>
            Automating geospatial change detection
          </span>
          <p className=''>
            In order to validate addresses, SLA Administrators previously had to
            go through each building in a dataset containing thousands of these
            instances, and verify their address strings manually. <br />
            ATLAS significantly enhances the{' '}
            <strong>Singapore Land Authority (SLA)'s</strong> internal system,
            ensuring{' '}
            <span className='bg-teal-800'>
              accuracy, transparency, and full traceability
            </span>{' '}
            while autonomously processing such datasets. These enhancements
            replace outdated manual processes, accelerate reliable
            decision-making, strengthen data integrity, and equip SLA teams to
            manage increasing land administration demands more efficiently.
          </p>
          <p className=''>
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
    <section id='features' className='h-full border-b border-dashed'>
      <h1 className='my-4 h-fit w-full text-center text-5xl font-semibold'>
        Features
      </h1>
      {/* Feature List */}
      <div className='grid h-full w-full auto-rows-auto grid-cols-6'>
        <div className='col-span-3 col-start-1 row-span-1 row-start-1 border-y border-dashed'>
          <div className='flex flex-col gap-2 p-6'>
            <h1 className='text-2xl font-semibold'>Batch Processing</h1>
            <div className='flex flex-col gap-4'>
              <Skeleton className='h-40 w-120 self-center' />
              <div className='w-full'>
                <p>
                  Here, I implemented a batch processing system running on Redis
                  + BullMQ, built on an event driven architecture to process
                  multiple files simultaneously. This allows SLA to upload
                  multiple zip files, significantly improving the UX on their
                  end.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3 col-start-4 row-span-1 row-start-1 border border-r-0 border-dashed'>
          <div className='flex flex-col gap-2 p-6'>
            <h1 className='text-2xl font-semibold'>Address Validation</h1>
            <div className='flex flex-col gap-4'>
              <div className='flex w-full gap-4'>
                <Skeleton className='h-40 w-full' />
                {/* <Separator orientation='vertical' className='h-auto self-stretch'/> */}
                <div className='text-muted-foreground flex flex-col text-sm text-nowrap'>
                  <p className='text-lg'>Confidence Scoring</p>
                  <Separator className='mb-2' />
                  <p>Postal Code: 40%</p>
                  <p>Road Name Similarity: 20%</p>
                  <p>Building Name Similarity: 20%</p>
                  <p>Block/House Number Similarity: 5%</p>
                  <p>Geographic Distance: 15%</p>
                </div>
              </div>
              <p>
                In order to validate addresses against current conventions, we
                used multiple APIs as sources with a custom confidence scoring
                system to ensure that address data was accurate and up-to-date.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-2 col-start-1 row-span-1 row-start-2 border-r border-dashed'>
          <div className='flex flex-col gap-2 p-6'>
            <h1 className='text-2xl font-semibold'>Deployment</h1>
            <div className='flex flex-col gap-4'>
              <Skeleton className='h-40 w-60 self-center' />
              <div className='w-full'>
                <p>
                  ATLAS had to be deployed on-premises, hence I decided to use
                  Docker to containerise the entire application and it's
                  dependent services for a quick and easy deployment, within
                  SLA's own intranet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-4 col-start-3 row-span-1 row-start-2 border-dashed'>
          <div className='flex flex-col gap-2 p-6'>
            <h1 className='text-2xl font-semibold'>Comparison Engine</h1>
            <div className='flex flex-col gap-4'>
              <Skeleton className='h-40 w-full self-center' />
              <div className='w-full'>
                <p>
                  The bread and butter of ATLAS, our custom-made comparison
                  engine helps to detect changes between map layers based on
                  data provided, completely automating the manual process of
                  checking each building individually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section id='impact' className='h-full px-6 py-28'>
      <h1 className='mb-8 h-fit w-full text-center text-5xl font-semibold'>
        Impact
      </h1>
      <div className='mx-auto flex max-w-5xl flex-col gap-8 md:w-5xl'>
        <div className='flex flex-row items-center gap-4'>
          {/* <Skeleton className='aspect-square size-96' /> */}
          <div className='aspect-square'>
            <WireframeBuilding />
          </div>
          <p className='w-full'>
            ATLAS empowers Singapore&apos;s long-term urban development by
            serving as a central, reliable foundation for location and building
            data. <br />
            By keeping national mapping information accurate and up to date, it
            enables government agencies to plan smarter infrastructure, optimize
            public services, and manage state land efficiently. <br />
            Beyond public administration, businesses and daily consumer
            platforms rely on this seamless map data for precise navigation,
            smoother logistics, and improved essential services.
          </p>
        </div>
        <div className='max-w-5xl mx-auto'>
          <p className='text-xl font-semibold text-center'>
            Ultimately, ATLAS ensures that as Singapore&apos;s landscape
            evolves, city planning stays coordinated, efficient, and responsive
            to the community's needs.
          </p>
        </div>
      </div>
    </section>
  );
}

// TODO: Add interactive side menu
export default function ProjectSLAAtlasPage() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <div className='h-full w-full border border-y-0 border-dashed md:w-4/5'>
        <PageHeader />
        <IntroSection />
        <FeaturesSection />
        <ImpactSection />
      </div>
    </div>
  );
}
