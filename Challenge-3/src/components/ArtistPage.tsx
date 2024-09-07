import { useParams } from "react-router-dom";
import { ArtistTypes } from "../types";
import artists from "../db";

export const ArtistPage = () => {
  const { id } = useParams();

  let currentArtist: ArtistTypes | undefined = undefined;

  if (id) {
    currentArtist = artists.find(
      (artist: ArtistTypes) => artist.id === Number(id)
    );
  }

  if (!currentArtist) {
    return <div>Artist not found</div>;
  }

  // Log the image path to verify it's correct
  console.log(`Image Path: images/covers/${currentArtist.cover}.jpg`);

  return (
    <div className="artists-container width-460 artist-profile">
      <img
        src={`/images/covers/${currentArtist.cover}.jpg`}
        alt={currentArtist.name}
        className="artist-profile-image"
      />

      <h3>{currentArtist.name}</h3>
      <p>{currentArtist.bio}</p>

      <div className="albums">
        {currentArtist.albums!.map((album: ArtistTypes["albums"][number]) => (
          <li key={album.albumId}>
            <strong>{album.title}</strong> ({album.year}) - ${album.price}
          </li>
        ))}
      </div>
    </div>
  );
};
