'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function VectorDecorations() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* 1. Left Curved Leaf Design (Sleek Minimalist Leaf Curve) */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        whileInView={{ opacity: 0.35, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[-5%] top-[15%] w-[320px] h-[600px] hidden xl:block"
      >
        <svg 
          viewBox="0 0 100 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[-10px_20px_40px_rgba(16,185,129,0.1)]"
        >
          <defs>
            <linearGradient id="banana-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#047857" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="leaf-veins" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {/* Main Leaf Silhouette - stylized curved curve matching theme */}
          <path 
            d="M5 200 C30 180, 50 140, 55 90 C60 40, 45 10, 5 2 C25 25, 30 65, 25 105 C20 145, 12 185, 5 200 Z" 
            fill="url(#banana-grad-1)" 
          />
          {/* Stem Wireframe Line */}
          <path 
            d="M5 200 Q30 140 45 42" 
            stroke="url(#leaf-veins)" 
            strokeWidth="1.2" 
            className="animate-pulse"
          />
          {/* Small Segment Cuts (Banana-leaf splits) */}
          <path d="M42 50 L52 38" stroke="url(#leaf-veins)" strokeWidth="0.8" />
          <path d="M37 78 L52 64" stroke="url(#leaf-veins)" strokeWidth="0.8" />
          <path d="M32 110 L48 94" stroke="url(#leaf-veins)" strokeWidth="0.8" />
          <path d="M25 142 L42 124" stroke="url(#leaf-veins)" strokeWidth="0.8" />
        </svg>
      </motion.div>

      {/* 2. Right Floating Minimalist Organic Foliage Design */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 15 }}
        whileInView={{ opacity: 0.35, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute right-[-4%] top-[45%] w-[350px] h-[650px] hidden xl:block"
      >
        <svg 
          viewBox="0 0 100 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[10px_20px_40px_rgba(16,185,129,0.08)]"
        >
          <defs>
            <linearGradient id="banana-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#059669" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="leaf-veins-r" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path 
            d="M95 190 C65 170, 45 130, 40 85 C35 38, 50 8, 95 0 C75 22, 70 60, 75 100 C80 140, 88 175, 95 190 Z" 
            fill="url(#banana-grad-2)" 
          />
          <path 
            d="M95 190 Q65 135 50 40" 
            stroke="url(#leaf-veins-r)" 
            strokeWidth="1.2" 
          />
          <path d="M54 48 L44 36" stroke="url(#leaf-veins-r)" strokeWidth="0.8" />
          <path d="M59 74 L44 62" stroke="url(#leaf-veins-r)" strokeWidth="0.8" />
          <path d="M64 105 L48 91" stroke="url(#leaf-veins-r)" strokeWidth="0.8" />
          <path d="M72 136 L55 120" stroke="url(#leaf-veins-r)" strokeWidth="0.8" />
        </svg>
      </motion.div>

      {/* 3. Growth Grid Pattern representing high-tech advertising and target vectors */}
      <div className="absolute inset-x-0 top-[28%] h-[400px] w-full opacity-[0.25] pointer-events-none hidden lg:block">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="mix-blend-overlay">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeOpacity="0.12" strokeWidth="0.8" />
              <circle cx="40" cy="0" r="1" fill="#10b981" fillOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 4. Tiny Floating organic seeds/spores to fill spatial gaps */}
      <motion.div 
        animate={{ 
          y: [-12, 12, -12],
          x: [-6, 6, -6]
        }}
        transition={{ 
          duration: 9, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute left-[8%] top-[38%] w-4 h-4 bg-emerald-400/45 rounded-full blur-[1px] hidden lg:block"
      />
      <motion.div 
        animate={{ 
          y: [10, -10, 10],
          x: [4, -4, 4]
        }}
        transition={{ 
          duration: 11, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute right-[12%] top-[18%] w-3 h-3 bg-green-300/40 rounded-full blur-[1px] hidden lg:block"
      />
      <motion.div 
        animate={{ 
          y: [-15, 15, -15],
          x: [8, -8, 8]
        }}
        transition={{ 
          duration: 14, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute left-[15%] top-[72%] w-5 h-5 bg-teal-300/35 rounded-full blur-[2px] hidden lg:block"
      />
      
      {/* 5. Parabolic Growth Vectors behind sections */}
      <div className="absolute right-[5%] bottom-[20%] w-[350px] h-[350px] hidden xl:block opacity-[0.22]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 95 C 45 95, 95 45, 95 5" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M5 95 C 35 95, 95 35, 95 5" stroke="#34d399" strokeWidth="0.5" />
          <circle cx="95" cy="5" r="3" fill="#10b981" className="animate-ping" />
          <circle cx="95" cy="5" r="2.5" fill="#047857" />
        </svg>
      </div>

    </div>
  );
}
