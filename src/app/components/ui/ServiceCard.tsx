import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#93457D] hover:shadow-xl transition-all duration-300">
      <div className="w-14 h-14 rounded-full bg-[#93457D]/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-950 mb-3">{title}</h3>
      <p className="text-slate-700 leading-relaxed mb-6">
        {description}
      </p>
    </div>
  );
}