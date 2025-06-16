import { useFavorites } from '../../context/favorites-context';
import ButtonUI from '../button/button';


const UserCard = ({ image }: any) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  
  const handleFavorite = () => {
    if (isFavorite(image.id)) {
      removeFavorite(image.id);
    } else {
      addFavorite(image.id);
    }
  };

  return (
    <div className='w-full h-fit flex items-center justify-between px-10 sm:px-16 md:px-40 py-5 z-10'>
      <div className='flex items-center justify-start gap-2 md:gap-4'>
        <img
          className='w-[40px] md:w-[60px] border-2 border-white rounded-lg'
          src={image?.user.profile_image.medium}
          alt='user'
        />
        <div className='text-white'>
          <p className='text-sm md:text-2xl'>{image?.user.name}</p>
          <a
            href={`https://www.instagram.com/${image?.user.instagram_username}`}
            target='_blank'
          >
            <span className='text-xs md:text-lg'>
              @{image?.user.instagram_username}
            </span>
          </a>
        </div>
      </div>

      <div className='flex items-center gap-5'>
        <ButtonUI
          icon='Heart'
          background={isFavorite(image.id) ? 'red' : '#fff'}
          border={isFavorite(image.id) ? 'red' : '#fff'}
          onClick={handleFavorite}
        />
        <a href={`${image?.links.download}&force=true`}>
          <ButtonUI
            icon='ArrowDownToLine'
            title='Download'
            background='#FFF302'
            border='#FFF302'
          />
        </a>
      </div>
    </div>
  );
};

export default UserCard;
