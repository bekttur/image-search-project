import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getImageDetail } from '../../services/api';
import Loader from '../../ui/loader/loader';
import { Maximize } from 'lucide-react';
import UserCard from '../../ui/user-card/user-card';
import ImgMaximize from '../../ui/img-maximize/img-maximize';

const ImageDetail = () => {
  const { id } = useParams();
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchImageDetail = async () => {
      setLoading(true);
      setError('');
      try {
        const imageData = await getImageDetail(id!);
        setImage(imageData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchImageDetail();
    }
  }, [id]);

  if (loading)
    return (
      <div className='w-full h-fit py-20 flex items-center justify-center'>
        <Loader />
      </div>
    );
  if (error) return <p>{error}</p>;

  const openModal = () => setIsModalOpen(true);

  return (
    <div className='w-full bg-cover bg-no-repeat flex items-start justify-center relative'>
      <div
        className='w-full max-h-screen flex flex-col items-center relative'
        style={{
          backgroundImage: `url(${image?.urls.full})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div
          className='absolute top-0 left-0 w-full h-full bg-black opacity-80'
          style={{
            filter: 'grayscale(100%)',
          }}
        ></div>

        <UserCard image={image} />

        <div className='relative my-10 md:my-32 z-10'>
          <img
            src={image?.urls.full}
            alt={image?.alt_description}
            className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover rounded-xl'
          />
          <div
            className='absolute right-5 bottom-5 cursor-pointer z-10 mt-5'
            onClick={openModal}
          >
            <Maximize color='#4D4D4D' size={24} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ImgMaximize image={image} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default ImageDetail;
