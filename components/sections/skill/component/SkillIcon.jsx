import { cn } from "@/lib/utils";
import { Code, Cpu, Database, LineChart } from "lucide-react";

// Map skill titles to Lucide components
const iconMap = {
  Frontend: Code,
  Backend: Cpu,
  Database: Database,
  Devops: LineChart,
};

export default function SkillIcon({ title, theme }) {
  // Select the icon component based on the title
  const IconComponent = iconMap[title];

  // Return null if no theme, title, or matching icon found
  if (!theme || !title || !IconComponent) {
    return null;
  }

  return (
    <div className="mb-4">
      <div
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner",
          "bg-gradient-to-br",
          theme.iconBgGradient
        )}
      >
        <IconComponent className={cn("w-7 h-7", theme.iconText)} />
      </div>
    </div>
  );
}
