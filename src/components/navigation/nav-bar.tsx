import { NavItem, NavItems } from '@/config/nav.config';
import { cn } from '@/lib/utils';
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

export function NavBar() {
  return (
    <div className='absolute top-0 z-10 flex w-full flex-row items-center justify-center px-4 py-2'>
      {/* Nav Items */}
      <nav className='bg-primary/20 backdrop-blur-2xl shadow-2xl flex w-fit flex-row items-center justify-center gap-8 rounded-full px-20 py-1.5'>
        {NavItems.map((navItem: NavItem) => (
          <NavBarItem navItem={navItem} key={crypto.randomUUID()} />
        ))}
      </nav>
    </div>
  );
}
