const center_style = 'flex items-center justify-center p-[3px] text-white ';
const between_style = 'flex items-center justify-between p-[3px] text-white ';

const col_style = center_style + 'h-full w-full flex-col gap-2 ';
const row_style = center_style + 'h-full w-full flex-row gap-2 ';
const title_style = 'flex text-center items-center justify-center text-[20px] ';
const score_style = title_style + 'text-[40px] ';

const normal_border_style = 'border-[1px] border-solid border-secondary-light rounded-[5px] bg-bkg-med ';
const hover_border_style = 'border-[1px] border-solid border-primary-light rounded-[5px] bg-bkg-med ';
const selected_border_style = 'border-[2px] border-solid border-primary-light rounded-[5px] bg-primary/30 ';


export default {
  center_style,
  between_style,

  col_style,
  row_style,
  title_style,
  score_style,

  normal_border_style,
  hover_border_style,
  selected_border_style
};
