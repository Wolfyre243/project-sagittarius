import { Button } from '@/ui/button';
import { Skull } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex max-w-7xl flex-col items-center gap-4'>
        <Skull className='size-8'/>
        <h2 className='text-3xl font-bold'>Page Not Found</h2>
        <p>Oops! Look&apos;s like we hit a roadblock...</p>
        <Button asChild>
          <Link href='/'>Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
