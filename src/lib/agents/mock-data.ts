import { Agent } from './types';

export const INITIAL_AGENTS: Agent[] = [
    {
        id: 'agent-001',
        name: 'Veda',
        role: 'SCOUT',
        description: 'Scans the digital horizon for trending topics in Tech & AI.',
        avatar: '🔭',
        status: 'WORKING',
        capabilities: ['Trend Analysis', 'Keyword Research', 'Competitor Scan'],
        currentTask: 'Scanning Reddit for "Generative AI" discussions',
    },
    {
        id: 'agent-002',
        name: 'Kavi',
        role: 'WRITER',
        description: 'Crafts engaging narratives and deep-dive articles.',
        avatar: '✍️',
        status: 'IDLE',
        capabilities: ['Blog Writing', 'SEO Optimization', 'Copywriting'],
    },
    {
        id: 'agent-003',
        name: 'Dharma',
        role: 'EDITOR',
        description: 'Ensures quality, tone, and strategic alignment.',
        avatar: '⚖️',
        status: 'PAUSED',
        capabilities: ['Content Review', 'Fact Checking', 'Style Enforcement'],
    },
    {
        id: 'agent-004',
        name: 'Chanakya',
        role: 'STRATEGIST',
        description: 'Master of Brand Strategy, Blue Ocean Thinking, and Semiotics.',
        avatar: '🧠',
        status: 'IDLE',
        capabilities: ['Blue Ocean Strategy', 'Color Psychology', 'Domain Arbitration', 'Semiotics', 'Cultural Analysis'],
    },
];
