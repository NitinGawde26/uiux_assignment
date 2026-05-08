import { Code2 } from 'lucide-react';

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#e8f4ea] text-[#2d5a3d] rounded-lg text-xs font-semibold border border-[#2d5a3d]/20 hover:bg-[#2d5a3d] hover:text-white transition-all duration-200">
      <Code2 className="w-3 h-3" />
      {tech}
    </div>
  );
}
