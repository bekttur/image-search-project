export interface IButtonUI {
  icon: string;
  title?: string;
  background: string;
  border: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ISearchInput {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setImages: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface IImgMaximize {
  image: any;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
