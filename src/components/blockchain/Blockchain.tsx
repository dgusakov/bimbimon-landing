import '../../css/App.css';
import BlockchainChild from './BlockchainChild';
import { getRandomInt } from '../../heplers/index';
import { BLOCK_GROUPS } from '../../data/blockchain';

interface BlockchainProps {
  path?: string;
}

const Blockchain: React.FC<BlockchainProps> = () => {
  const group = getRandomInt(BLOCK_GROUPS.length);
  const seq = BLOCK_GROUPS[group][5];
  return <BlockchainChild group={group} seq={seq} />;
};

export default Blockchain;
