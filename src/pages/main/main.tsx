import { useEffect, useState } from 'react';
import Loader from '../../ui/loader/loader';
import { getRandomImages } from '../../services/api';
import { Link } from 'react-router-dom';
import SearchInput from '../../ui/search-input/search-input';

const Main = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomImages = async () => {
    setLoading(true);
    setError('');
    try {
      const images = await getRandomImages();
      setImages(images);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomImages();
  }, []);

  return (
    <div className='w-full min-h-screen h-fit'>
      <div className='w-full min-h-[268px] bg-[url("/background.png")] bg-cover bg-no-repeat flex items-center justify-center'>
        <SearchInput
          query={query}
          setQuery={setQuery}
          setLoading={setLoading}
          setError={setError}
          setImages={setImages}
        />
      </div>

      {error && <p className='text-red-500 text-center'>{error}</p>}

      {loading ? (
        <div className='w-full flex items-center justify-center mt-40'>
          <Loader />
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 w-full px-10 sm:px-16 md:px-40 py-20'>
          {images.length > 0 ? (
            images.map((img: any, idx: number) => (
              <Link
                to={`/image/${img.id}`}
                key={idx}
                className='w-full aspect-square'
              >
                <img
                  key={img.id}
                  src={img.urls.small}
                  alt={img.alt_description}
                  className='w-full h-full object-cover rounded-xl'
                />
              </Link>
            ))
          ) : (
            <p className='text-center col-span-3'>Изображений не найдено</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Main;
