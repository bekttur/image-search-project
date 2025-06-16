import { createContext, useContext, useState } from 'react';

interface FavoritesContextType {
  favoriteImages: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteImages, setFavoriteImages] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteImages((prev) => [...prev, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteImages((prev) => prev.filter((imageId) => imageId !== id));
  };

  const isFavorite = (id: string) => favoriteImages.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favoriteImages, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
