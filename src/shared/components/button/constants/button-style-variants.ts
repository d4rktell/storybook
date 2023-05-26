export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  UTILITY = 'utility'
}

export const BUTTON_STYLES: { [key in ButtonVariants]: string } = {
  [ButtonVariants.PRIMARY]:
    'text-white bg-black text-center rounded-xl flex-1 font-medium text-lg leading-5 transition duration-300 hover:bg-black/50',
  [ButtonVariants.SECONDARY]:
    'font-medium rounded-xl flex items-center justify-center text-black border-2 flex-1 border-black hover:border-black/50',
  [ButtonVariants.UTILITY]:
    'text-white font-medium bg-gray-600 flex-1 transition duration-300 hover:bg-gray-600/50'
};
