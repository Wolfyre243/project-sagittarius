export interface ProjectData {
  id: string;
  name: string;
  description: string;
  image?: string;
  startDate: string;
  endDate: string | 'present';
}

export const projectList: ProjectData[] = [
  {
    id: 'sla-atlas',
    name: 'SLA ATLAS',
    image: '/projects/sla-atlas-preview.png',
    description:
      'A full-stack web application designed for Singapore Land Authority (SLA) to manage their land and map data. Done as part of my school project during my time in Singapore Polytechnic.',
    startDate: '2025-10-16',
    endDate: 'present',
  },
];
