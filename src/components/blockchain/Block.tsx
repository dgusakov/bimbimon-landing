import '../../css/App.css';
import { useState } from 'react';
import { BLOCK_GROUPS } from '../../data/blockchain';

// Block component
function Block(props: any) {
  // Get the group and id props from the parent component
  const group = Number(props.group) || 0;
  const id = Number(props.id) - 1 || 0;

  // Get the corresponding BlockIcon component based on the group and id
  const BlockIcon = BLOCK_GROUPS[group][id];

  // State to track the activation status of the block
  const [activated, setActivated] = useState(false);

  // Function to toggle the activation state when the block is clicked
  const toggleActivation = () => {
    setActivated(!activated);
    // Call the onClick prop passed from the parent component
    props.onClick();
  };

  // Determine the class name based on the activation status
  const className = activated ? 'block-icon activated' : 'block';

  // Render the Block component with the BlockIcon and onClick handler
  return (
    <div className="block" onClick={toggleActivation}>
      <BlockIcon className={className} onClick={props.onClick} id={props.id} />
    </div>
  );
}

// Props for the BigBlock component
interface BigBlockProps {
  group: number;
}

// BigBlock component
export const BigBlock: React.FC<BigBlockProps> = ({ group }) => {
  // Get the corresponding BigBlockIcon component based on the group
  const BigBlockIcon = BLOCK_GROUPS[group][4];

  // Render the BigBlock component with the BigBlockIcon
  return (
    <div className="big-block-container">
      <BigBlockIcon className="big-block-icon" />
    </div>
  );
};

export default Block;
