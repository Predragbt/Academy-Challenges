import { useParams } from "react-router-dom";
import { AlbumsList } from "./AlbumList";
import { ArtistTypes } from "../types";

interface ArtistPageProps {
  artists: ArtistTypes[];
}
export const ArtistPage = ({ artists }: ArtistPageProps) => {
  const { id } = useParams();

  const currentArtist = artists.find((artist) => artist.id === Number(id));

  if (!currentArtist) {
    return (
      <div className="artists-container error-page-artist-album">
        Artist not found
      </div>
    );
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
        {currentArtist.albums.map((album) => (
          <AlbumsList album={album} key={album.albumId} />
        ))}
      </div>
    </div>
  );
};
