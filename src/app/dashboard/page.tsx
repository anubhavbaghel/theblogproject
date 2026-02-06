"use client";

import { useState } from 'react';
import { INITIAL_AGENTS } from "@/lib/agents/mock-data";
import { AgentCard } from "@/components/agent-card";
import { MissionLog } from "@/components/mission-log";
import { workflowEngine } from "@/lib/agents/workflow-engine";
import { Mission } from "@/lib/agents/types";

export default function Dashboard() {
    const [activeMission, setActiveMission] = useState<Mission | null>(null);
    const [topic, setTopic] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const startMission = async () => {
        if (!topic) return;

        // Create Mission
        const mission = workflowEngine.createMission(topic);
        setActiveMission({ ...mission }); // specific spread to trigger state update
        setTopic("");
        setIsProcessing(true);

        // Automation Loop (Simulation)
        let current = mission;
        while (current.status !== 'COMPLETED') {
            const updated = await workflowEngine.advanceMission(current.id);
            if (updated) {
                current = updated;
                setActiveMission({ ...updated });
            } else {
                break;
            }
        }
        setIsProcessing(false);
    };

    return (
        <div className="min-h-screen bg-brand-carbon text-brand-steel font-sans selection:bg-brand-laser selection:text-brand-carbon">

            {/* Top Navigation / Header */}
            <header className="sticky top-0 z-50 border-b border-brand-grid bg-brand-carbon/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-brand-laser rounded-full animate-pulse" />
                        <span className="font-mono font-bold tracking-widest text-brand-laser">
                            YANTRA <span className="text-brand-steel/50 font-normal">OS v1.0</span>
                        </span>
                    </div>

                    <div className="flex gap-6 text-sm font-mono text-brand-steel/60">
                        <span className="hover:text-brand-laser cursor-pointer transition-colors text-brand-laser">DASHBOARD</span>
                        <span className="hover:text-brand-laser cursor-pointer transition-colors">MISSIONS</span>
                        <span className="hover:text-brand-laser cursor-pointer transition-colors">SETTINGS</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* Page Header */}
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-black tracking-tighter mb-4 text-white">
                            Command Center
                        </h1>
                        <p className="text-brand-steel/60 max-w-2xl text-lg">
                            Manage your autonomous workforce. Monitor trends, assign missions, and review content output.
                        </p>
                    </div>

                    {/* Mission Control Input */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Enter Mission Objective..."
                            className="bg-brand-surface border border-brand-grid rounded px-4 py-2 w-64 text-sm focus:border-brand-laser outline-none transition-colors"
                            disabled={isProcessing}
                        />
                        <button
                            onClick={startMission}
                            disabled={!topic || isProcessing}
                            className="bg-brand-laser text-brand-carbon px-6 py-2 font-mono uppercase font-bold text-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? 'EXECUTING...' : 'INITIATE'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Agents */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 border border-brand-grid rounded-lg bg-brand-surface/50">
                                <p className="text-[10px] uppercase tracking-widest text-brand-steel/50 font-bold mb-1">Active Agents</p>
                                <p className="text-2xl font-mono font-bold text-white">{INITIAL_AGENTS.length}</p>
                            </div>
                            <div className="p-4 border border-brand-grid rounded-lg bg-brand-surface/50">
                                <p className="text-[10px] uppercase tracking-widest text-brand-steel/50 font-bold mb-1">Mission Status</p>
                                <p className="text-2xl font-mono font-bold text-white">
                                    {activeMission ? activeMission.status : 'IDLE'}
                                </p>
                            </div>
                            <div className="p-4 border border-brand-grid rounded-lg bg-brand-surface/50">
                                <p className="text-[10px] uppercase tracking-widest text-brand-steel/50 font-bold mb-1">System Health</p>
                                <p className="text-2xl font-mono font-bold text-green-500">OPTIMAL</p>
                            </div>
                        </div>

                        {/* Agent Grid */}
                        <h2 className="text-xs uppercase tracking-widest text-brand-steel/40 font-bold mb-4 border-b border-brand-grid pb-2">
                            Active Units
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {INITIAL_AGENTS.map((agent) => (
                                <AgentCard key={agent.id} agent={agent} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Mission Log */}
                    <div className="lg:col-span-1">
                        <MissionLog mission={activeMission} />
                    </div>

                </div>

            </main>
        </div>
    );
}
