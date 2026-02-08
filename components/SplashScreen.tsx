import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#172554] flex items-center justify-center z-50">
      <h1 className="text-5xl sm:text-7xl font-mono font-bold text-slate-200 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-slate-200">
        Welcome 😊
      </h1>
    </div>
  );
};

export default SplashScreen;
