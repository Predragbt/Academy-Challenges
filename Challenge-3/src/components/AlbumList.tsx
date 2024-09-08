import { Link } from "react-router-dom";

interface AlbumsListProps {
  cover: string;
  albumId: string;
}

export const AlbumsList = ({ cover, albumId }: AlbumsListProps) => {
  return (
    <div>
      <Link to={`${albumId}`}>
        <img src={`/images/albums/${cover}.jpg`} alt="" />
      </Link>
    </div>
  );
};
