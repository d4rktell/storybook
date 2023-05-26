import cn from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode, RefObject } from 'react';

import { BUTTON_STYLES, ButtonVariants } from '../constants/button-style-variants';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  modalRef?: RefObject<HTMLButtonElement>;
  children?: ReactNode;
  customStyle?: string;
  onClick: VoidFunction;
}

export const Button: FC<Props> = ({
  variant = ButtonVariants.UTILITY,
  modalRef,
  children,
  customStyle, onClick,
  ...props
}) => {
  return (
    <button onClick={onClick}
      className={cn('self-stretch rounded-lg p-3', BUTTON_STYLES[variant], customStyle)}
      ref={modalRef}
      {...props}
    >
      {children}
    </button>
  );
};
