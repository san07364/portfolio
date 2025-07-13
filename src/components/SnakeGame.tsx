import React from "react";

const SnakeGame: React.FC = () => {
  return (
    <div className="snake-game-container flex flex-col items-center justify-center p-8">
      <h3 className="text-white font-fira_retina text-lg mb-4">
        // Snake Game
      </h3>
      <div className="bg-blue-background border border-[#1E2D3D] rounded-lg p-6 w-80 h-80 flex items-center justify-center">
        <div className="text-menu-text font-fira_retina text-center">
          <div className="mb-4">🐍</div>
          <div className="text-sm">Snake Game</div>
          <div className="text-xs mt-2">Coming Soon...</div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
