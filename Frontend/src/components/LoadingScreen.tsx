import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  minLoadTime?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete, 
  minLoadTime = 2500 
}) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoadingComplete, 500);
    }, minLoadTime);

    return () => clearTimeout(timer);
  }, [minLoadTime, onLoadingComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center z-50 transition-all duration-500 ${
      fadeOut ? 'opacity-0 invisible' : 'opacity-100 visible'
    }`}>
      <div className="text-center px-4">
        {/* Animated Loader */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-white border-r-white border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-transparent border-r-pink-200 border-b-pink-200 border-l-transparent rounded-full animate-spin animation-delay-300"></div>
        </div>

        {/* Title with animated dots */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-pulse">
          Resume Analyzer
          <span className="inline-flex ml-1">
            <span className="animate-bounce [animation-delay:0ms]">.</span>
            <span className="animate-bounce [animation-delay:150ms]">.</span>
            <span className="animate-bounce [animation-delay:300ms]">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-base md:text-lg mb-8">
          Powered by Gemini AI
        </p>

        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-white rounded-full animate-[loading_2.5s_ease-out]"></div>
        </div>

        {/* Loading tips - optional */}
        <p className="text-white/70 text-sm mt-6 animate-pulse">
          Preparing AI model...
        </p>
      </div>

      {/* Add custom animation keyframes in your global CSS or tailwind.config.js */}
      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;