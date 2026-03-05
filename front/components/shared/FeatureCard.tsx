import { type LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
      <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
        <Icon
          size={28}
          className="text-secondary group-hover:text-primary transition-colors"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-lg font-bold text-secondary mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
