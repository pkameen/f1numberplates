import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-yellow-500/60
        hover:bg-white/10
        hover:shadow-[0_20px_60px_rgba(255,215,0,0.15)]
      "
    >
      {/* Gold Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
      </div>

      {/* Icon */}
      <div
        className="
          relative
          z-10
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-yellow-500/10
          text-yellow-400
          transition-transform
          duration-500
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          relative
          z-10
          text-2xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          relative
          z-10
          mt-4
          leading-7
          text-gray-400
        "
      >
        {description}
      </p>

      {/* Button */}
      <button
        className="
          relative
          z-10
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-yellow-400
          transition-all
          duration-300
          group-hover:gap-4
        "
      >
        Explore
        <ArrowRight size={18} />
      </button>
    </div>
  );
}