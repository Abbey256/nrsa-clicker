import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full">
      {(title || subtitle) && (
        <div className="border-b border-border bg-gradient-subtle py-12 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {title && (
              <h1 className="text-foreground mb-4">{title}</h1>
            )}
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      <div className="px-6 lg:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
