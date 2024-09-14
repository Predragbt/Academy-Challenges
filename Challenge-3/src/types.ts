export interface ArtistTypes {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: {
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;
  }[];
}
