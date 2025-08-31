export type Book = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  author: {
    id: number;
    name: string;
    description: string;
    profile_icon: string;
  };
  content: string;
  created_at: string;
  updated_at: string;
};
