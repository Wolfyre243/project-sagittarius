interface Contributor {
  name: string;
  link: string;
}

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  image?: string;
  startDate: string;
  endDate: string | 'present';
  tags?: string[];
  contributors?: Contributor[];
  themeColor?: `rgba(${number}, ${number}, ${number}, ${number})`; // e.g. rgba(100, 200, 243, 0.15)
}

export const projectList: ProjectData[] = [
  {
    id: 'sla-atlas',
    name: 'SLA ATLAS',
    image: '/projects/sla-atlas/preview.png',
    description:
      'A full-stack web application designed for Singapore Land Authority (SLA) to manage their land and map data. Done as part of my school project during my time in Singapore Polytechnic.',
    startDate: '2025-10-16',
    endDate: '2026-08-11',
    tags: ['React', 'Node.js', 'WebSockets', 'Docker', 'Redis', 'GeoJSON', 'Maps'],
    contributors: [
      {
        name: 'Ilias Sam',
        link: '/',
      },
      {
        name: 'Kamal Akshay',
        link: '/',
      },
      {
        name: 'Jayden Lim',
        link: '/',
      },
    ],
    themeColor: 'rgba(30, 230, 250, 0.15)',
  },
];
