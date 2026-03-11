import { Separator } from '@/ui/separator';
import { motion } from 'framer-motion';

const aboutMe =
  'With a strong foundation in technologies like Next.js and a curiosity for solving real-world problems, I love turning ideas into functional, scalable solutions.\n' +
  'As a lifelong learner, I’m constantly exploring new tools and frameworks to enhance my skills. ' +
  'Whether it’s designing seamless frontend experiences or building robust backend systems, I learn through challenges that push me to grow, believing that there is always room for greater improvement.\n' +
  'I’m excited to take on opportunities; be it internships, freelance projects, or collaborations, I hope to contribute to innovative teams effectively.';

export function AboutSection() {
  return (
    <section
      id='about'
      className='flex h-full w-full flex-col items-center border-b border-dashed'
    >
      {/* Backdrop */}
      <div className='absolute -z-50 w-full overflow-hidden md:w-4/5'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-muted/60 h-full w-full px-8 py-10'
        >
          <h1 className='text-9xl font-medium'>ABOUT</h1>
          <p className='animate-pulse text-sm font-medium'>
            Loading entity profile...
            <br />
            Matching identity...
            <br />
            Verifying checksum: 24% complete...
            <br />
            Checksum successfully verified.
            <br />
            Decrypting...
            <br />
            Identity match success.
            <br />
            Welcome home, Wolfyre.
          </p>
        </motion.div>
      </div>
      {/* Main Content */}
      <div className='flex h-full flex-col items-center justify-center border border-y-0 border-dashed md:w-4/5'>
        <div className='flex w-4xl flex-col gap-4 py-30'>
          {/* Header Text */}
          <div className='text-5xl font-bold'>
            <h1>Hi, I'm Junkai</h1>
            <h2>
              I turn ideas into <span className='text-teal-200'>reality</span>
            </h2>
          </div>
          {/* Small Description */}
          <div className='flex w-full flex-col gap-2'>
            {aboutMe.split('\n').map((line, index) => (
              <div key={index}>
                <p>{line}</p>
                {/* {index + 1 !== aboutMe.split('\n').length && <br />} */}
              </div>
            ))}
          </div>
          <Separator />
          <div className='flex flex-col gap-2'>
            <blockquote className='flex w-full flex-col gap-4 text-2xl font-semibold italic'>
              ❝ In the midst of chaos, there is also opportunity.❞
            </blockquote>
            <div>
              <span className='text-xl'>- Sun Tzu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
