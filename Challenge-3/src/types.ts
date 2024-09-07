// Interface for Artist without albums (for ArtistItem)
export interface ArtistSummary {
  id: number;
  name: string;
  cover: string;
  bio: string;
}

// Interface for Artist with albums (for ArtistPage)
export interface ArtistTypes extends ArtistSummary {
  albums: {
    albumId: string;
    title: string;
    year: number;
    cover: string;
    price: number;
  }[];
}
