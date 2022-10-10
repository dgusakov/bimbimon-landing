import "../../css/App.css";
import { BLOCK_GROUPS } from '../../data/blockchain';

function Block(props: any) {
  const group = Number(props.group) || 0
  const id = Number(props.id) - 1 || 0
  const BlockIcon = BLOCK_GROUPS[group][id]

  let className = props.className
  if (props.activated) {
    className+= " activated inactive"
  }
  return (
    <BlockIcon className={className} onClick={props.onClick} id={props.id}/>
  );
}

export default Block;
