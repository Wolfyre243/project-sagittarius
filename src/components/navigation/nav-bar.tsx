import { NavItem, NavItems } from '@/config/nav.config';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/button';
import Link from 'next/link';

function NavBarItem({
  navItem,
  className,
}: {
  navItem: NavItem;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-md px-2 py-1 transition-all duration-200 ease-in-out hover:scale-110',
        className,
      )}
    >
      <Link href={navItem.url} className='text-base font-medium'>
        {navItem.title}
      </Link>
    </div>
  );
}

// export function NavBar() {
//   return (
//     <div className='sticky top-0 z-10 flex w-full flex-row items-center justify-center px-4 py-2'>
//       {/* Nav Items */}
//       <nav className='bg-primary/20 backdrop-blur-2xl shadow-2xl flex w-fit flex-row items-center justify-center gap-8 rounded-full px-20 py-1.5'>
//         {NavItems.map((navItem: NavItem) => (
//           <NavBarItem navItem={navItem} key={crypto.randomUUID()} />
//         ))}
//       </nav>
//     </div>
//   );
// }

export function NavBar() {
  return (
    <div className='bg-background sticky top-0 z-10 w-full justify-center flex border-b border-dashed'>
      <div className='flex flex-row items-center px-4 py-3 w-full'>
        <div className='flex w-full justify-center'>
          {/* Emblem */}
          <Link href={'/'}>
            <h1 className='text-xl font-bold'>JK.z</h1>
          </Link>
        </div>

        {/* Nav Items */}
        <nav className='flex w-full flex-row items-center justify-evenly gap-8 rounded-full'>
          {NavItems.map((navItem: NavItem) => (
            <NavBarItem navItem={navItem} key={crypto.randomUUID()} />
          ))}
        </nav>
        <div className='flex w-full justify-center'>
          <Button>
            <Link href={'/#contact'}>Get in touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
