import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#6742b0' }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
          Website Under Construction
        </h1>
        <p className="text-lg text-gray-200">
          Stay tuned for exciting updates!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
