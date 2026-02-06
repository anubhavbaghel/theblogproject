
import React from 'react';
import { Agent } from '@/lib/agents/types';

interface AgentCardProps {
    agent: Agent;
}

const statusColors = {
    IDLE: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50',
    WORKING: 'bg-green-500/20 text-green-500 border-green-500/50',
    PAUSED: 'bg-gray-500/20 text-gray-500 border-gray-500/50',
    OFFLINE: 'bg-red-500/20 text-red-500 border-red-500/50',
};

export function AgentCard({ agent }: AgentCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-brand-grid bg-brand-carbon/50 p-6 transition-all hover:border-brand-laser/50 hover:shadow-[0_0_30px_-5px_var(--color-brand-laser)]">

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div className="text-4xl bg-brand-surface p-3 rounded-lg border border-brand-grid/30">
                        {agent.avatar}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-brand-steel font-sans tracking-tight">
                            {agent.name}
                        </h3>
                        <span className="text-xs font-mono text-brand-steel/50 uppercase tracking-wider">
                            {agent.role}
                        </span>
                    </div>
                </div>

                {/* Status Badge */}
                <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${statusColors[agent.status]}`}>
                    {agent.status}
                </div>
            </div>

            {/* Description */}
            <p className="text-brand-steel/70 text-sm mb-6 leading-relaxed">
                {agent.description}
            </p>

            {/* Capabilities */}
            <div className="mb-6">
                <p className="text-[10px] uppercase text-brand-steel/40 font-bold mb-2 tracking-widest">
                    Capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                    {agent.capabilities.map((cap) => (
                        <span
                            key={cap}
                            className="text-xs px-2 py-1 bg-brand-surface border border-brand-grid/30 rounded text-brand-steel/80"
                        >
                            {cap}
                        </span>
                    ))}
                </div>
            </div>

            {/* Current Task (if active) */}
            {agent.status === 'WORKING' && agent.currentTask && (
                <div className="mt-auto border-t border-brand-grid/30 pt-4">
                    <p className="text-[10px] uppercase text-brand-laser font-bold mb-1 tracking-widest animate-pulse">
                        Current Operation
                    </p>
                    <p className="text-brand-steel font-mono text-xs truncate">
                        {'>'} {agent.currentTask}
                    </p>
                </div>
            )}
        </div>
    );
}
