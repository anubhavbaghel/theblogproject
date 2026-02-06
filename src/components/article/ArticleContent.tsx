import clsx from "clsx";

interface ArticleContentProps {
    children: React.ReactNode;
    className?: string;
}

export function ArticleContent({ children, className }: ArticleContentProps) {
    return (
        <article
            className={clsx(
                "prose prose-lg md:prose-xl mx-auto prose-invert",
                "prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-brand-steel",
                "prose-p:text-brand-steel/80 prose-p:leading-8 prose-p:font-sans",
                "prose-a:text-brand-laser prose-a:no-underline prose-a:font-bold hover:prose-a:underline",
                "prose-strong:text-brand-steel prose-strong:font-bold",
                "prose-blockquote:border-l-brand-laser prose-blockquote:bg-brand-grid/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-mono prose-blockquote:text-brand-steel/90",
                "prose-img:rounded-none prose-img:border prose-img:border-brand-grid",
                className
            )}
        >
            {children}
        </article>
    );
}
