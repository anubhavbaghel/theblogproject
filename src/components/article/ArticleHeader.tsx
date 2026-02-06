import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";

interface ArticleHeaderProps {
    category: string;
    title: string;
    subtitle: string;
    author: {
        name: string;
        role: string;
        image?: string;
    };
    publishedAt: string;
}

export function ArticleHeader({
    category,
    title,
    subtitle,
    author,
    publishedAt,
}: ArticleHeaderProps) {
    return (
        <Container className="pt-24 pb-12 text-center max-w-4xl border-b border-brand-grid mb-12">
            <div className="mb-8 flex justify-center">
                <Badge className="bg-brand-laser/10 text-brand-laser border border-brand-laser/20 font-mono">{category}</Badge>
            </div>

            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-brand-steel mb-8 leading-[1]">
                {title}
            </h1>

            <p className="text-xl md:text-2xl text-brand-steel/60 font-mono leading-relaxed mb-10 max-w-2xl mx-auto">
                {subtitle}
            </p>

            <div className="flex items-center justify-center space-x-4 pt-4 inline-block mx-auto font-mono text-xs text-brand-steel/40 uppercase tracking-widest">
                <span>{author.name}</span>
                <span>//</span>
                <span>{publishedAt}</span>
            </div>
        </Container>
    );
}
