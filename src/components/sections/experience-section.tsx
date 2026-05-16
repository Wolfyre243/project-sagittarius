import { motion } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section
      id='experience'
      className='flex w-full flex-col items-center border-b border-dashed'
    >
      <div className='flex min-h-screen flex-col items-center justify-center border border-y-0 border-dashed md:w-4/5'>
        {/* Intro Part */}
        <div className='flex h-screen w-full flex-col items-center justify-center p-6'>
          {/* TODO: Add more background visuals */}
          <div className='w-full md:w-2/3'>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className='mb-8 text-4xl font-semibold'
            >
              My work extends beyond just a text editor;
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: 'easeOut' }}
              className='text-4xl font-semibold'
            >
              I wish to leave an impact on this world, making lasting memories
              with others as I go.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3, ease: 'easeOut' }}
              className='mt-20 flex flex-col items-center justify-center gap-1'
            >
              <ChevronsDown className='size-8' />
              <p>Scroll Down</p>
            </motion.div>
          </div>
        </div>
        {/* TODO: Use scroll snap */}
        {/* Teaching Part */}
        <div className='flex h-screen w-full flex-col items-center justify-center gap-6 p-6'>
          <div className='flex w-full flex-row justify-between gap-4 px-4'>
            <div className='flex flex-col gap-6'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              >
                <h1 className='text-6xl font-semibold'>
                  Technology is my passion.
                </h1>
                <h1 className='text-6xl font-semibold'>
                  Knowledge is my mission.
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                className='my-auto me-8 text-xl'
              >
                <h1 className='text-2xl font-semibold'>Codeezy</h1>
                <p>
                  At Codeezy, I translate programming concepts into engaging,
                  hands-on workshops for students, mentoring the next generation
                  of digital architects. Through interactions with them, I aim
                  to inspire and ignite curiosity within my students, empowering
                  them to see programming as a tool for innovation.
                </p>
              </motion.div>
            </div>
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              src={'/experiences/codeezy-newtownsec.png'}
              className='rotate-3 border-16 border-white sepia-[30%]'
              width={550}
            />
          </div>
        </div>
        <div className='flex h-screen w-full flex-col items-center justify-center gap-6 p-6'>
          <div className='flex w-full flex-row justify-between gap-4 px-4'>
            <div className='flex flex-col gap-12'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              >
                <h1 className='text-6xl font-semibold'>
                  Challenges are my chance.
                </h1>
                <h1 className='text-6xl font-semibold'>
                  Lessons weave my tapestry.
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                className='me-8 text-xl'
              >
                <p>
                  <span className='bg-teal-400 dark:bg-teal-900'>Growth exists only at the edge of one's comfort zone.</span> I
                  constantly seek out challenges, transforming my bottled
                  uncertainty into strength and resilience. Each unique
                  experience forms a thread in the fabric of my craft, weaving
                  towards its evolution.
                </p>
                <p className='mt-4'>
                  In such environments, I have but a single rule for myself:{' '}
                  <span className='text-teal-200'>never back down</span>.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                className='me-8 text-xl'
              >
                <h1 className='text-2xl font-semibold'>
                  World Skills Singapore 2025
                </h1>
                <p>
                  Participating in World Skills Singapore 2025 was an
                  unforgettable journey. Stepping into the heart of high-stakes
                  development, I was tasked with mobile app development in the
                  span of only 3 days; a test that pushed my technical skills to
                  its limits. Although I won no awards this time, I am honoured
                  to have been able to test my craft on such a prestigious
                  stage.
                </p>
              </motion.div>
            </div>
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              src={'/experiences/world-skills-2025.jpg'}
              className='-rotate-2 border-16 border-white'
              width={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
