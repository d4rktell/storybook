export enum InputVariants {
  PRIMARY = 'primary',
  RADIO = 'radio'
}

export const INPUT_STYLES: { [key in InputVariants]: string } = {
  [InputVariants.PRIMARY]:
    'bg-black/20 text-lg px-6 py-3.5 rounded-lg leading-5 placeholder:text-black/60 active:placeholder:text-black/70 outline-none hover:outline-3 focus:bg-black/10 focus:outline-3 hover:outline-offset-0 focus:outline-offset-0 hover:outline-amber-500 focus:outline-amber-700 hover:bg-black/50 hover:placeholder:text-black/90',
  [InputVariants.RADIO]: 'hidden peer appearance-none'
};
