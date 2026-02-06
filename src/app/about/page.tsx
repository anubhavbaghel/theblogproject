import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "System Status | YANTRA",
    description: "The Signal Engine. Constructivist intelligence.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pb-24 bg-brand-carbon text-brand-steel">
            {/* HERO SECTION */}
            <section className="pt-32 pb-24 border-b border-brand-grid relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-xs text-brand-grid">
                    SYS_INIT_SEQUENCE // V1.0
                </div>
                <Container>
                    <div className="max-w-4xl mx-auto text-left">
                        <Badge className="mb-8 border border-brand-laser text-brand-laser bg-brand-laser/5 font-mono">SYSTEM MANIFESTO</Badge>
                        <h1 className="font-sans text-5xl md:text-7xl font-black tracking-tighter text-brand-steel mb-8 leading-[1] uppercase">
                            The Internet is <span className="text-brand-grid">NOISE</span>. <br />
                            We are the <span className="text-brand-laser">SIGNAL</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-steel/60 font-mono leading-relaxed max-w-2xl">
                            YANTRA (यन्त्र) is a machine. We build tools for high-fidelity intelligence.
                        </p>
                    </div>
                </Container>
            </section>

            {/* PHILOSOPHY SECTION */}
            <section className="py-24 bg-brand-carbon">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                Operating Parameters
                            </h2>
                            <div className="w-full h-px bg-brand-laser mb-8"></div>
                            <p className="text-lg leading-loose font-mono text-brand-steel/80 mb-6">
                                Most media is "Content." It is designed to fill space and sell ads.
                            </p>
                            <p className="text-lg leading-loose font-mono text-brand-steel/80">
                                YANTRA is "Data." It is designed to solve problems and optimize decisions. We do not have "readers." We have "Operators."
                            </p>
                        </div>
                        <div className="border border-brand-grid p-8 md:p-12 relative bg-brand-grid/10">
                            <h3 className="font-mono text-xs font-bold tracking-widest uppercase mb-8 text-brand-laser">
                // CORE PROTOCOLS
                            </h3>
                            <ul className="space-y-8 font-mono">
                                <li className="flex items-start">
                                    <span className="text-brand-laser mr-4 text-xl">01</span>
                                    <div>
                                        <strong className="block text-xl font-bold mb-2 text-brand-steel">Precision</strong>
                                        <p className="opacity-60 text-sm">Every word costs CPU cycles. Delete the fluff.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-laser mr-4 text-xl">02</span>
                                    <div>
                                        <strong className="block text-xl font-bold mb-2 text-brand-steel">Geometry</strong>
                                        <p className="opacity-60 text-sm">Truth is structured. Logic is beautiful.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-laser mr-4 text-xl">03</span>
                                    <div>
                                        <strong className="block text-xl font-bold mb-2 text-brand-steel">Utility</strong>
                                        <p className="opacity-60 text-sm">If it doesn't function, it doesn't exist.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-24 border-t border-brand-grid">
                <Container className="text-center">
                    <div className="inline-block p-4 border border-brand-dashed border-brand-grid mb-8">
                        <span className="font-mono text-brand-laser text-xs tracking-widest uppercase">Input Required</span>
                    </div>

                    <h2 className="font-sans text-4xl font-black text-brand-steel mb-6 tracking-tight uppercase">
                        Join the Network
                    </h2>
                    <p className="text-lg text-brand-steel/50 mb-10 max-w-xl mx-auto font-mono">
                        Receive the daily signal packet.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="primary" className="bg-brand-laser text-brand-carbon hover:bg-white">Connect</Button>
                    </div>
                </Container>
            </section>
        </main>
    );
}
