
export type AgentRole = 'SCOUT' | 'EDITOR' | 'WRITER' | 'MANAGER' | 'STRATEGIST';

export type AgentStatus = 'IDLE' | 'WORKING' | 'PAUSED' | 'OFFLINE';

export interface Agent {
    id: string;
    name: string;
    role: AgentRole;
    description: string;
    avatar: string; // Emoji character or image URL
    status: AgentStatus;
    capabilities: string[];
    currentTask?: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    assignedTo?: string; // Agent ID
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface MissionStep {
    id: string;
    agentId: string;
    action: string; // e.g., "Researching", "Reviewing", "Writing"
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
    output?: string; // The result of the step
    timestamp: string;
}

export interface Mission {
    id: string;
    title: string;
    status: 'PLANNING' | 'IN_PROGRESS' | 'COMPLETED';
    steps: MissionStep[];
    currentStepIndex: number;
    createdAt: string;
}
