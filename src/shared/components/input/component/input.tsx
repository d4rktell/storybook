import {ChangeEvent, Dispatch, FC, InputHTMLAttributes, SetStateAction} from 'react';
import cn from "classnames";

import { INPUT_STYLES, InputVariants } from '../constants/input-style-variants';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  disabled: boolean;
  label?: string;
}

export const Input: FC<InputProps> =
  ({ variant = InputVariants.PRIMARY, value, setValue, disabled, label, ...props }) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return <div className="flex flex-col gap-2">
        {label && <label>{label}</label>}
        <input className={cn(INPUT_STYLES[variant], disabled && 'opacity-30 pointer-events-none')} value={value} onChange={onChange} {...props} disabled={disabled} />
    </div>
  };

