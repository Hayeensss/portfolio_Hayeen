import { cn } from "@/lib/utils";

export default function SkillTags({ tags, theme }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, tagIndex) => (
        <span
          key={tag}
          className={cn(
            "text-xs px-3 py-1.5 rounded-full font-medium",
            theme.tagText,
            theme.tagBg,
            theme.tagBorder
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
