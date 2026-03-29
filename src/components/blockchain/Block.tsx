import "../../css/App.css";
import { useState, useEffect } from "react";
import type { BlockGroup } from '../../data/blockchain';

interface BlockProps {
  className: string;
  id: string;
  onClick: () => void;
  group: number;
  activated: boolean;
  difficulty: 'easy' | 'hard';
  blockGroups: BlockGroup[];
}

function Block({ className, id, onClick, group, activated, difficulty, blockGroups }: BlockProps) {
  const blockId = Number(id) - 1 || 0;
  const BlockIcon = blockGroups[group][blockId];
  const [isHinting, setIsHinting] = useState(false);

  // Add difficulty-based animations and effects
  useEffect(() => {
    if (difficulty === 'hard' && activated) {
      const timeout = setTimeout(() => {
        onClick(); // Auto-deactivate after delay in hard mode
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [activated, difficulty, onClick]);

  const handleClick = () => {
    onClick();
    setIsHinting(true);
    setTimeout(() => setIsHinting(false), 300);
  };

  // Apply different styles based on difficulty
  const getBlockStyle = () => {
    const baseStyle = activated ? "block-icon activated" : "block";
    const difficultyStyles = {
      easy: "",
      hard: "hard-difficulty"
    };
    return `${baseStyle} ${difficultyStyles[difficulty]} ${isHinting ? 'hinting' : ''}`;
  };

  return (
    <div className="block" onClick={handleClick}>
      <BlockIcon className={getBlockStyle()} id={id} />
    </div>
  );
}

// Props for the BigBlock component
interface BigBlockProps {
  group: number;
  blockGroups: BlockGroup[];
}

// BigBlock component
export const BigBlock: React.FC<BigBlockProps> = ({ group, blockGroups }) => {
  // Get the corresponding BigBlockIcon component based on the group
  const BigBlockIcon = blockGroups[group][4];

  // Render the BigBlock component with the BigBlockIcon
  return (
    <div className="big-block-container">
      <BigBlockIcon className="big-block-icon" />
    </div>
  );
};

export default Block;
