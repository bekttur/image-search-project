import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getImageDetail } from '../../services/api';
import { useFavorites } from '../../context/favorites-context';
import { motion } from 'framer-motion';

const Favorites = () => {
  const { favoriteImages } = useFavorites();
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImageDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const imageDetails = await Promise.all(
          favoriteImages.map(async (id: string) => {
            const imageData = await getImageDetail(id);
            return imageData;
          })
        );
        setImages(imageDetails);
      } catch (err: any) {
        setError('Произошла ошибка при загрузке изображений.');
      } finally {
        setLoading(false);
      }
    };

    if (favoriteImages.length > 0) {
      fetchImageDetails();
    }
  }, [favoriteImages]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className='w-full min-h-screen py-20'
    >
      <h1 className='text-3xl font-semibold text-center mb-10'>Избранное</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-16 md:px-40'>
        {images.length > 0 ? (
          images.map((image: any) => (
            <Link
              to={`/image/${image.id}`}
              key={image.id}
              className='w-full aspect-square'
            >
              <img
                src={image.urls.small}
                alt={image.alt_description}
                className='w-full h-full object-cover rounded-xl'
              />
            </Link>
          ))
        ) : (
          <p className='text-center col-span-3'>Нет избранных изображений</p>
        )}
      </div>
    </motion.div>
  );
};

export default Favorites;
