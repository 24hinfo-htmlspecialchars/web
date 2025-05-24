import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
        // Fond : clair = noir, sombre = blanc
        "bg-black text-white dark:bg-white dark:text-black",
        // Border: on peut garder une bordure visible dans les 2 cas
        "border-black dark:border-white",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {/* Cercle : clair = blanc, sombre = noir */}
        <div className="h-2 w-2 rounded-full bg-white dark:bg-black transition-all duration-300 group-hover:scale-[100.8]"></div>

        {/* Texte de base : opacity et translation au hover */}
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>

      {/* Texte animé + icône : clair = noir, sombre = blanc */}
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span className="text-black dark:text-white">{children}</span>
        <ArrowRight className="text-black dark:text-white" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
