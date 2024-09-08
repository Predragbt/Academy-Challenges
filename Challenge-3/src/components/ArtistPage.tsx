import { useParams } from "react-router-dom";
import { ArtistTypes } from "../types";
import artists from "../db";
import { AlbumsList } from "./AlbumList";

export const ArtistPage = () => {
  const { id } = useParams();

  const currentArtist = artists.find(
    (artist: ArtistTypes) => artist.id === Number(id)
  );

  if (!currentArtist) {
    return <div className="artists-container error-page-artist-album">Artist not found</div>;
  }

  return (
    <div className="artists-container width-460 artist-profile">
      <img
        src={`/images/covers/${currentArtist.cover}.jpg`}
        alt={currentArtist.name}
        className="artist-profile-image"
      />

      <h3>{currentArtist.name}</h3>
      <p>{currentArtist.bio}</p>

      <div className="artist-albums">
        {currentArtist.albums!.map((album: ArtistTypes["albums"][number]) => (
          <AlbumsList
            cover={album.cover}
            albumId={album.albumId}
            key={album.albumId}
          />
        ))}
      </div>
    </div>
  );
};
