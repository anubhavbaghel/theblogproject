
import React from 'react';
import { Mission } from '@/lib/agents/types';
import { INITIAL_AGENTS } from '@/lib/agents/mock-data';

interface MissionLogProps {
    mission: Mission | null;
}

export function MissionLog({ mission }: MissionLogProps) {
    if (!mission) {
        return (
            <div className="h-full flex items-center justify-center text-brand-steel/30 font-mono text-sm border border-brand-grid/30 rounded-lg p-12 bg-brand-surface/20">
                AWAITING MISSION PARAMETERS...
            </div>
        );
    }

    return (
        <div className="bg-brand-carbon/50 border border-brand-grid rounded-lg overflow-hidden flex flex-col h-[600px]">
            {/* Header */}
            <div className="p-4 border-b border-brand-grid bg-brand-surface/50 flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-white font-sans tracking-tight">Mission Log: {mission.title}</h3>
                    <p className="text-xs text-brand-steel/50 font-mono uppercase">ID: {mission.id}</p>
                </div>
                <div className="px-3 py-1 bg-brand-surface border border-brand-grid rounded text-xs font-mono text-brand-laser animate-pulse">
                    {mission.status}
                </div>
            </div>

            {/* Log Feed */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {mission.steps.map((step, index) => {
                    const agent = INITIAL_AGENTS.find((a) => a.id === step.agentId);
                    const isPending = step.status === 'PENDING';
                    const isActive = step.status === 'IN_PROGRESS';
                    const isDone = step.status === 'COMPLETED';

                    if (isPending && index > mission.currentStepIndex) return null;

                    return (
                        <div
                            key={step.id}
                            className={`flex gap-4 ${isPending ? 'opacity-50 grayscale' : 'opacity-100'}`}
                        >
                            {/* Avatar */}
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-surface border border-brand-grid flex items-center justify-center text-xl">
                                {agent?.avatar || '❓'}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-baseline justify-between mb-1">
                                    <span className="font-bold text-brand-steel text-sm">{agent?.name}</span>
                                    <span className="text-[10px] text-brand-steel/30 font-mono uppercase">{step.action}</span>
                                </div>

                                <div className={`p-3 rounded-lg border text-sm ${isActive
                                        ? 'bg-brand-laser/10 border-brand-laser/50 text-brand-laser'
                                        : 'bg-brand-surface border-brand-grid/30 text-brand-steel/80'
                                    }`}>
                                    {isActive ? (
                                        <span className="flex items-center gap-2">
                                            Processing... <span className="animate-pulse">_</span>
                                        </span>
                                    ) : isDone ? (
                                        step.output
                                    ) : (
                                        "Queued"
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
