import { Link } from "react-router-dom";
import { ArtistSummary } from "../types";

export const ArtistItem = ({ cover, id, name }: ArtistSummary) => {
  return (
    <div className="card width-460">
      <img src={cover} alt={name} className="card-img" />
      <Link to={`/artist/${id}`}>
        <button className="card-button">{name}</button>
      </Link>
    </div>
  );
};
