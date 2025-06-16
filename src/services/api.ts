import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.unsplash.com/search/photos';
const RANDOM_API_URL = 'https://api.unsplash.com/photos/random';

export const getRandomImages = async () => {
  try {
    const response = await axios.get(RANDOM_API_URL, {
      params: {
        count: 8,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error('Произошла ошибка при загрузке случайных изображений.');
  }
};

export const getImages = async (searchQuery: string) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        query: searchQuery,
        client_id: API_KEY,
      },
    });
    return response.data.results;
  } catch (err) {
    throw new Error('Произошла ошибка при загрузке данных.');
  }
};

export const getImageDetail = async (id: string) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
      params: {
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error('Произошла ошибка при загрузке данных изображения.');
  }
};
