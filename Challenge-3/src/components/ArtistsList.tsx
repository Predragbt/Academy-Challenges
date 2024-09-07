import artists from "../db";
import { ArtistItem } from "./ArtistItem";
import { ArtistSummary } from "../types";

export const ArtistsList = () => {
  return (
    <>
      <div className="artists-container">
        <h2>Browse the artists</h2>
        {artists.map((artist: ArtistSummary) => (
          <ArtistItem
            cover={`images/covers/${artist.cover}.jpg`}
            id={artist.id}
            name={artist.name}
            key={artist.id}
            bio={artist.bio}
          />
        ))}
      </div>
    </>
  );
};
