import { Heart, ArrowDownToLine, ArrowUp } from 'lucide-react';

import type { IButtonUI } from '../../interfaces/interfaces';

const iconMap: { [key: string]: React.ElementType } = {
  Heart,
  ArrowDownToLine,
  ArrowUp,
};

const ButtonUI = ({ icon, title, background, border, onClick }: IButtonUI) => {
  const IconComponent = iconMap[icon];

  return (
    <button
      className={`p-2 shadow-2xl md:shadow-none md:p-4 text-[#000000] rounded-lg flex items-center justify-center ${title ? 'gap-2' : 'gap-0'} cursor-pointer`}
      style={{
        backgroundColor: background,
        borderColor: border,
      }}
      onClick={onClick}
    >
      {IconComponent && <IconComponent width={24} height={24} />}
      <span className='hidden md:block'>{title}</span>
    </button>
  );
};

export default ButtonUI;
