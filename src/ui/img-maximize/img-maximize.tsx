import { useState } from 'react';
import type { IImgMaximize } from '../../interfaces/interfaces';
import { X } from 'lucide-react';

const ImgMaximize = ({ image, setIsModalOpen }: IImgMaximize) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50'
      onClick={closeModal}
    >
      <div
        className='relative max-w-full max-h-full overflow-scroll'
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image?.urls.full}
          alt={image?.alt_description}
          className={`max-w-full max-h-full object-contain transition-all duration-300 ${
            isZoomed ? 'scale-150' : ''
          }`}
          onClick={toggleZoom}
        />
        <button
          onClick={closeModal}
          className='absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer'
          style={{
            position: 'fixed',
            top: '40px',
            right: '40px',
            zIndex: 100,
          }}
        >
          <X className='scale-200' color='#4D4D4D' />
        </button>
      </div>
    </div>
  );
};

export default ImgMaximize;
