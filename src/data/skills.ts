interface SkillObject {
  name: string;
  category: string;
  colour?: string;
}

export const skillList: SkillObject[] = [
  { name: 'TypeScript', category: 'fullstack' },
  { name: 'JavaScript', category: 'fullstack' },
  { name: 'React', category: 'fullstack' },
  { name: 'Next.js', category: 'fullstack' },
  { name: 'Node.js', category: 'fullstack' },
  { name: 'Express', category: 'fullstack' },
  { name: 'NestJS', category: 'fullstack' },
  { name: 'Redux', category: 'fullstack' },
  { name: 'Prisma', category: 'fullstack' },
  { name: 'Drizzle', category: 'fullstack' },
  { name: 'PostgreSQL', category: 'fullstack' },
  { name: 'Redis', category: 'fullstack' },
  { name: 'MySQL', category: 'fullstack' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'Dart', category: 'mobile' },
  { name: 'Git', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  // { name: 'ESLint', category: 'devops' },
  { name: 'Azure', category: 'cloud' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Docker', category: 'cloud' },
  { name: 'Linux', category: 'cloud' },
  { name: 'Cloudflare', category: 'cloud' },
]