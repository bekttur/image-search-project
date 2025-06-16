import { Search } from 'lucide-react';
import type { ISearchInput } from '../../interfaces/interfaces';
import { getImages } from '../../services/api';

const SearchInput = ({ query, setQuery, setLoading, setError, setImages }: ISearchInput) => {
  const handleSearch = async () => {
    if (query) {
      setLoading(true);
      setError('');
      try {
        const images = await getImages(query);
        setImages(images);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='relative w-[335px] md:w-[866px]'>
      <input
        type='text'
        className='w-full h-fit bg-white rounded-none py-3 md:py-5 px-4 md:px-10  md:pr-16 text-lg md:text-xl font-light focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300'
        placeholder='Поиск'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type='button'
        onClick={handleSearch}
        className='absolute right-5 md:right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black'
      >
        <Search size={22} />
      </button>
    </div>
  );
};

export default SearchInput;
