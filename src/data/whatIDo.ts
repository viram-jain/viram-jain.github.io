export interface WhatIDoItem {
  number: string;
  name: string;
  description: string;
}

export const whatIDo: WhatIDoItem[] = [
  {
    number: '01',
    name: 'Backend Engineering',
    description:
      'Building and testing Golang based microservices and APIs, from billing systems to conversational AI pipelines, at Kaleyra and Radisys.',
  },
  {
    number: '02',
    name: 'Mobile SDK Development',
    description:
      'Designing and maintaining client SDKs across React Native, Flutter, Kotlin (Android), and Swift (iOS) for developers to integrate into their own apps.',
  },
  {
    number: '03',
    name: 'Cross-Platform Apps',
    description:
      'Shipping product experiences that share logic across mobile and web, keeping behavior consistent without duplicating work per platform.',
  },
  {
    number: '04',
    name: 'Systems & Caching',
    description:
      'Working with Redis/ElastiCache and backend infrastructure to keep services fast and reliable under real-world load.',
  },
  {
    number: '05',
    name: 'Full-Stack Prototyping',
    description:
      'Going from idea to working prototype with Node.js, Python, and Django — the muscle behind projects like Voice Based Email and Fake Currency Detection.',
  },
];
