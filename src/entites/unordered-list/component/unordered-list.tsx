import {FC} from 'react';
import cn from "classnames";

import { LIST_STYLES, ListVariants } from '../constants/list-style-variants';

interface Props {
  listItems: string[];
  variant?: ListVariants;
  direction?: 'flex-row' | 'flex-col';
  wrap?: 'flex-wrap' | 'flex-nowrap';
}

export const UnorderedList: FC<Props> = ({ listItems, direction = 'row', wrap = 'flex-wrap', variant = ListVariants.PRIMARY }) => {
  return (
    <ul className={cn('flex gap-2 bg-black/20 active:border-2 active:border-amber-500 hover:bg-black/50 p-4', direction, wrap)}>
      {listItems.map((listItem) => (
        <li key={listItem} className={LIST_STYLES[variant]}>
          {listItem}
        </li>
      ))}
    </ul>
  );
};
