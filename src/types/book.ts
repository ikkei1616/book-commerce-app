import type {User} from "./user";

export type BookType = {
  id: string;
  title: string;
  content: string;
  price: number;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};


export type Purchase = {
  id: string,
  userId: string,
  bookId: string,
  createdAt: string,
  user: User;
}