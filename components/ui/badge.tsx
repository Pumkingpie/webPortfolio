import React from "react";
import clsx from "clsx";

export function Badge({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={clsx(
                "inline-block px-2 py-1 rounded-full text-xs font-semibold bg-purple-600/10 text-purple-400 border border-purple-400",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
} 