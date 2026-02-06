
import { INITIAL_AGENTS } from './mock-data';
import { Mission, MissionStep } from './types';

export class WorkflowEngine {
    private missions: Mission[] = [];

    createMission(topic: string): Mission {
        const newMission: Mission = {
            id: `mission-${Date.now()}`,
            title: topic,
            status: 'PLANNING',
            steps: [],
            currentStepIndex: 0,
            createdAt: new Date().toISOString(),
        };

        // Define the Standard Newsroom Pipeline
        const pipeline = [
            { role: 'STRATEGIST', action: 'Market Analysis' },
            { role: 'SCOUT', action: 'Topic Research' },
            { role: 'EDITOR', action: 'Strategy Brief' },
            { role: 'WRITER', action: 'Draft Content' },
            { role: 'EDITOR', action: 'Final Review' },
        ];

        // Assign Agents
        newMission.steps = pipeline.map((step, index) => {
            const agent = INITIAL_AGENTS.find(a => a.role === step.role);
            return {
                id: `step-${index}`,
                agentId: agent ? agent.id : 'unknown',
                action: step.action,
                status: 'PENDING',
                timestamp: new Date().toISOString(),
            };
        });

        this.missions.push(newMission);
        return newMission;
    }

    getMission(id: string): Mission | undefined {
        return this.missions.find(m => m.id === id);
    }

    // Simulator: Advance the mission one step
    async advanceMission(missionId: string): Promise<Mission | null> {
        const mission = this.getMission(missionId);
        if (!mission) return null;

        if (mission.status === 'COMPLETED') return mission;

        mission.status = 'IN_PROGRESS';
        const currentStep = mission.steps[mission.currentStepIndex];

        if (currentStep) {
            currentStep.status = 'IN_PROGRESS';

            // Simulate "Work" delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            currentStep.status = 'COMPLETED';
            currentStep.output = `Output for ${currentStep.action} completed by Agent ${currentStep.agentId}.`;
            currentStep.timestamp = new Date().toISOString();

            // Move to next step
            mission.currentStepIndex++;

            if (mission.currentStepIndex >= mission.steps.length) {
                mission.status = 'COMPLETED';
            }
        }

        return mission;
    }
}

// Singleton Instance
export const workflowEngine = new WorkflowEngine();
