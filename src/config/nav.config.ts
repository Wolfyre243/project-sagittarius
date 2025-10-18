export type NavItem = {
  title: string;
  url: string;
  icon?: string; // icon key
};

export const NavItems: NavItem[] = [
  {
    title: 'Home',
    url: '/#hero',
  },
  {
    title: 'About',
    url: '/#about',
  },
  {
    title: 'Contact',
    url: '/#contact',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
];
