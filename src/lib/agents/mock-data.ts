import { Agent } from './types';

export const INITIAL_AGENTS: Agent[] = [
    {
        id: 'agent-001',
        name: 'Veda',
        role: 'SCOUT',
        description: 'Monitors tech trends and identifies topics that confuse beginners.',
        avatar: '🔭',
        status: 'WORKING',
        capabilities: ['HackerNews Monitoring', 'Reddit r/learnprogramming', 'GitHub Trending', 'Tech Confusion Detection'],
        currentTask: 'Scanning developer forums for common AI misconceptions',
    },
    {
        id: 'agent-002',
        name: 'Kavi',
        role: 'WRITER',
        description: 'Transforms complex tech into clear, respectful explanations.',
        avatar: '✍️',
        status: 'IDLE',
        capabilities: ['ELI5 Writing', 'Analogy Creation', 'Code Examples', 'Beginner-Friendly Tone'],
    },
    {
        id: 'agent-003',
        name: 'Dharma',
        role: 'EDITOR',
        description: 'Ensures accuracy without jargon, clarity without condescension.',
        avatar: '⚖️',
        status: 'PAUSED',
        capabilities: ['Technical Accuracy Check', 'Jargon Detection', 'Accessibility Review', 'Tone Calibration'],
    },
    {
        id: 'agent-004',
        name: 'Chanakya',
        role: 'STRATEGIST',
        description: 'Identifies knowledge gaps in the tech learning landscape.',
        avatar: '🧠',
        status: 'IDLE',
        capabilities: ['Learning Path Design', 'Audience Research', 'Content Gap Analysis', 'Beginner Psychology'],
    },
];
