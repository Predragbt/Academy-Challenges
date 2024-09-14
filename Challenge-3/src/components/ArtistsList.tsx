import { ArtistTypes } from "../types";
import { ArtistItem } from "./ArtistItem";

interface Props {
  artists: ArtistTypes[];
}

export const ArtistsList = ({ artists }: Props) => {
  return (
    <>
      <div className="artists-container">
        <h2>Browse the artists</h2>
        {artists.map((artist) => (
          <ArtistItem artist={artist} key={artist.id} />
        ))}
      </div>
    </>
  );
};
