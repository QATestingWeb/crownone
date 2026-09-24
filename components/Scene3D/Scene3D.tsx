"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import type { SceneVariant } from './FloatingScene';

// Three.js needs the browser (WebGL), so the scene is only loaded client-side and never blocks first paint.
const FloatingScene = dynamic(() => import('./FloatingScene'), { ssr: false });

interface Scene3DProps {
  variant?: SceneVariant;
  className?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ variant = 'banner', className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden='true'>
      <FloatingScene variant={variant} />
    </div>
  );
};

export default Scene3D;
