export interface WhatIDoItem {
  number: string;
  spellName: string;
  name: string;
  description: string;
}

export const whatIDo: WhatIDoItem[] = [
  {
    number: '01',
    spellName: 'The Latency Vanishing Act',
    name: 'Backend Engineering',
    description:
      'Rewriting PHP into Golang, building ad-serving pipelines, and generally making backend services faster without waking anyone up at 2am.',
  },
  {
    number: '02',
    spellName: 'The Everywhere Charm',
    name: 'Mobile SDK Development',
    description:
      'Designing and maintaining Push and In-App SDKs across React Native, Flutter, Kotlin, and Swift — the kind of code that has to work everywhere, always.',
  },
  {
    number: '03',
    spellName: 'The Twin Ports Spell',
    name: 'Cross-Platform Apps',
    description:
      "Shipping product experiences that share logic across mobile and web, so 'it works on iOS' doesn't turn into a support ticket on Android.",
  },
  {
    number: '04',
    spellName: 'The Steady Hand Ward',
    name: 'Systems & Caching',
    description:
      'Working with Redis/ElastiCache and backend infrastructure to keep services fast under real load, not just in the demo.',
  },
  {
    number: '05',
    spellName: 'The Early Warning Sight',
    name: 'Monitoring & Observability',
    description:
      "Building the alarms and anomaly detection that catches problems before they become incidents, or angry Slack messages.",
  },
];
