import { ArticleContent } from "@/components/article/ArticleContent";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { Container } from "@/components/layout/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vision Pro Review: The Future is Heavy | YANTRA",
    description: "A deep dive into Apple's spatial computer.",
};

export default function TestArticlePage() {
    return (
        <main className="min-h-screen pb-24 bg-brand-carbon text-brand-steel">
            <ArticleHeader
                category="Tech & AI"
                title="Apple Vision Pro: The Future is Here, and It's Heavy"
                subtitle="It’s the most impressive piece of technology I’ve ever worn. It also gave me a headache after 45 minutes. Here is the honest truth about spatial computing."
                author={{
                    name: "YANTRA LABS",
                    role: "SYSTEM",
                }}
                publishedAt="February 6, 2026"
            />

            <Container>
                <ArticleContent>
                    <p>
                        The first time you put on the Apple Vision Pro, you gasp. Not metaphorically. You literally gasp because the pass-through video is so sharp, so lag-free, that your brain momentarily forgets you are looking at screens.
                    </p>
                    <p>
                        But 45 minutes later, you gasp again—this time because you are taking it off, and the relief on your cheekbones is palpable.
                    </p>

                    <h2>The Hardware: A Marvel of Engineering</h2>
                    <p>
                        Let’s get the obvious out of the way: <strong>This is the best consumer hardware ever made.</strong> The aluminum frame feels like a MacBook for your face. The bands are knitted from what feels like expensive yoga pants.
                    </p>

                    <blockquote>
                        "It feels less like a gadget and more like a piece of high-end furniture that you strap to your head."
                    </blockquote>

                    <p>
                        But weight is the enemy of immersion. At 600+ grams, physics is undefeated. No amount of "spatial magic" can negate the lever effect of glass and aluminum sitting 3 inches off your face.
                    </p>

                    <h3>The "Killer App" Problem</h3>
                    <p>
                        So what do you actually <em>do</em> with it?
                    </p>
                    <ul>
                        <li><strong>Movies:</strong> Incredible. Better than IMAX.</li>
                        <li><strong>Work:</strong> Surprisingly good. Mac Virtual Display is magic.</li>
                        <li><strong>Gaming:</strong> Underwhelming. No controllers means no precision.</li>
                    </ul>

                    <h2>The Verdict</h2>
                    <p>
                        Should you buy it? If you have $3,500 and love the future, yes. If you want a comfortable daily driver, wait for the Air model.
                    </p>
                    <p>
                        For now, it remains a <em>YANTRA</em> "Wait and See."
                    </p>
                </ArticleContent>
            </Container>
        </main>
    );
}
