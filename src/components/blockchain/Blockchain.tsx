import "../../css/App.css";
import React, { useState } from "react";
import BlockchainChild from "./BlockchainChild";
import { getRandomInt } from '../../heplers/index';
import { EASY_BLOCK_GROUPS, BLOCK_GROUPS } from '../../data/blockchain';

function Blockchain() {
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>('easy');
  
  // Choose block groups based on difficulty
  const blockGroups = difficulty === 'easy' ? EASY_BLOCK_GROUPS : BLOCK_GROUPS;
  
  // For easy mode, we randomly select from multiple predefined sequences
  const group = getRandomInt(blockGroups.length);
  const seq = blockGroups[group][5];
  
  return (
    <BlockchainChild 
      group={group} 
      seq={seq} 
      difficulty={difficulty}
      onDifficultyChange={setDifficulty}
      blockGroups={blockGroups}
    />
  );
}

export default Blockchain;
