import { ArrowUp } from 'lucide-react';

const ButtonToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-5 right-5 p-3 bg-white shadow-sm rounded-xl hover:bg-[#e6e6e6] transition-all duration-300'
    >
      <ArrowUp color='#000000' />
    </button>
  );
};

export default ButtonToTop;
