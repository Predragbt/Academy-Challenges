import { Link } from "react-router-dom";
import { ArtistTypes } from "../types";

interface AlbumsListProps {
  album: ArtistTypes["albums"][number];
}

export const AlbumsList = ({ album }: AlbumsListProps) => {
  return (
    <div>
      <Link to={`${album.albumId}`}>
        <img src={`/images/albums/${album.cover}.jpg`} alt="Album Cover" />
      </Link>
    </div>
  );
};
