import { ReactComponent as Block11 } from "./img/blocks/A1.svg"
import { ReactComponent as Block13 } from "./img/blocks/A2.svg"
import { ReactComponent as Block12 } from "./img/blocks/A3.svg"
import { ReactComponent as Block14 } from "./img/blocks/A4.svg"
import { ReactComponent as BlockLine1 } from "./img/blocks/GroupA.svg"

import { ReactComponent as Block21 } from "./img/blocks/B1.svg"
import { ReactComponent as Block24 } from "./img/blocks/B2.svg"
import { ReactComponent as Block22 } from "./img/blocks/B3.svg"
import { ReactComponent as Block23 } from "./img/blocks/B4.svg"
import { ReactComponent as BlockLine2 } from "./img/blocks/GroupB.svg"

import { ReactComponent as Block33 } from "./img/blocks/C1.svg"
import { ReactComponent as Block32 } from "./img/blocks/C2.svg"
import { ReactComponent as Block31 } from "./img/blocks/C3.svg"
import { ReactComponent as Block34 } from "./img/blocks/C4.svg"
import { ReactComponent as BlockLine3 } from "./img/blocks/GroupC.svg"

import { ReactComponent as Block41 } from "./img/blocks/D1.svg"
import { ReactComponent as Block43 } from "./img/blocks/D2.svg"
import { ReactComponent as Block44 } from "./img/blocks/D3.svg"
import { ReactComponent as Block42 } from "./img/blocks/D4.svg"
import { ReactComponent as BlockLine4 } from "./img/blocks/GroupD.svg"

import { ReactComponent as BlockE1 } from "./img/blocks/E1.svg"
import { ReactComponent as BlockE2 } from "./img/blocks/E2.svg"
import { ReactComponent as BlockE3 } from "./img/blocks/E3.svg"
import { ReactComponent as BlockE4 } from "./img/blocks/E4.svg"
import { ReactComponent as BlockLineE } from "./img/blocks/GroupE.svg"

import { FunctionComponent, SVGProps } from 'react';

type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement>>;
export type BlockGroup = [SVGComponent, SVGComponent, SVGComponent, SVGComponent, SVGComponent, string];

// Easy mode block groups (E blocks) with different sequences
// Visual order is [E3, E2, E1, E4] but click sequences vary
const EASY_BLOCK_GROUPS: BlockGroup[] = [
    [BlockE3, BlockE2, BlockE1, BlockE4, BlockLineE, "3214"], // Click middle-left, middle-right, left, right
    [BlockE3, BlockE2, BlockE1, BlockE4, BlockLineE, "1432"], // Click left, right, middle-left, middle-right
    [BlockE3, BlockE2, BlockE1, BlockE4, BlockLineE, "2341"], // Click middle-right, middle-left, right, left
    [BlockE3, BlockE2, BlockE1, BlockE4, BlockLineE, "4123"], // Click right, left, middle-right, middle-left
];

// Regular block groups (A-D blocks)
const BLOCK_GROUPS: BlockGroup[] = [
    [Block11, Block12, Block13, Block14, BlockLine1, "2314"],
    [Block21, Block22, Block23, Block24, BlockLine2, "1423"],
    [Block31, Block32, Block33, Block34, BlockLine3, "3214"],
    [Block41, Block42, Block43, Block44, BlockLine4, "1342"],
];

export { EASY_BLOCK_GROUPS, BLOCK_GROUPS };

