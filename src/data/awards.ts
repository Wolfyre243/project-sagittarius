export interface Award {
  id: string;
  date: string;
  name: string;
  description?: string;
}

export const awardList: Award[] = [
  {
    id: 'dhr-2025',
    date: '2025-08-06',
    name: "Director's Honour Roll 2025 - Singapore Polytechnic",
    description: 'For ranking in the top 10% of the cohort'
  },
  {
    id: 'dhr-2026',
    date: '2026-05-20',
    name: "Director's Honour Roll 2026 - Singapore Polytechnic",
    description: 'For ranking in the top 10% of the cohort'
  },
  {
    id: 'wss-2025',
    date: '2025-04-25',
    name: "WorldSkills Singapore 2025 - Certificate of Participation"
  },
]