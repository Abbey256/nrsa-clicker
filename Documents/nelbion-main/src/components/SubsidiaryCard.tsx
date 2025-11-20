import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SubsidiaryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  impact: string;
}

export function SubsidiaryCard({ icon: Icon, title, description, impact }: SubsidiaryCardProps) {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth border-border bg-card h-full">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">
          <span className="font-semibold text-accent">{impact}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
