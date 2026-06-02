import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
  feature: FeatureType;
  delay?: number;
};

export function FeatureCard({ feature, className, delay = 0, ...props }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={cn(
        'glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 border-emerald-50 bg-white/40', 
        className
      )} 
      {...props}
    >
      {/* Subtle gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 to-green-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/80 shadow-sm border border-emerald-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
          <feature.icon className="text-emerald-800 size-7" strokeWidth={1.5} aria-hidden />
        </div>
      </div>
      
      <div className="relative z-10 mt-auto">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-emerald-900/80 text-base md:text-lg font-medium leading-relaxed max-w-md">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
