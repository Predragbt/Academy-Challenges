import { Link } from "react-router-dom";
import { ArtistTypes } from "../types";

interface Props {
  artist: ArtistTypes;
}

export const ArtistItem = ({ artist }: Props) => {
  return (
    <div className="card width-460">
      <Link to={`/artist/${artist.id}`}>
        <img
          src={`images/covers/${artist.cover}.jpg`}
          alt={artist.name}
          className="card-img"
        />

        <span className="card-span">{artist.name}</span>
      </Link>
    </div>
  );
};
