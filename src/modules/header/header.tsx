import { Heart, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();

  const isImagePage =
    location.pathname.includes('image') ||
    location.pathname.includes('favorites');

  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className='w-full h-fit bg-[#000000] flex items-center justify-between px-10 sm:px-16 md:px-40 py-7'
    >
      <Link to={'/'}>
        <img
          src='/logo/OBJECTS.png'
          className='w-[100px] md:w-[200px]'
          alt='logo'
        />
      </Link>

      <div className='flex items-center justify-start gap-8'>
        {isImagePage && (
          <Link to={'/'} className='flex items-center gap-2'>
            <Search color='#ffffff' />
            <p className='text-white hidden md:block'>Поиск</p>
          </Link>
        )}

        <Link to={'/favorites'} className='flex items-center gap-2'>
          <Heart color='#ffffff' />
          <p className='text-white hidden md:block'>Избранное</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
