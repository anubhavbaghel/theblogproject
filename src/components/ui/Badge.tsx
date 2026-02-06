import clsx from "clsx";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export function Badge({ children, className }: BadgeProps) {
    return (
        <span
            className={clsx(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-widest bg-brand-navy/5 text-brand-navy",
                className
            )}
        >
            {children}
        </span>
    );
}
