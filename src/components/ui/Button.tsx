import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    {
                        "bg-brand-navy text-brand-cream hover:bg-brand-orange":
                            variant === "primary",
                        "bg-brand-cream text-brand-navy border border-brand-navy hover:bg-brand-navy hover:text-brand-cream":
                            variant === "secondary",
                        "bg-transparent text-brand-navy border border-brand-slate/30 hover:border-brand-navy":
                            variant === "outline",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
