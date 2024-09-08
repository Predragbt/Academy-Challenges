import { useParams } from "react-router-dom";
import { ArtistTypes } from "../types";
import artists from "../db";

export const AlbumPage = () => {
  const { albumId } = useParams();

  const currentAlbum = artists
    .map((artists: ArtistTypes) => artists.albums)
    .flat()
    .find((album) => album.albumId === albumId);

  if (!currentAlbum) {
    return (
      <div className="artists-container error-page-artist-album">
        Album not found
      </div>
    );
  }

  return (
    <div className="width-460 artists-container">
      <img
        src={`/images/albums/${currentAlbum.cover}.jpg`}
        className="album-profile-image"
      />
      <p className="album-m-top">
        <b>Title</b>: {currentAlbum.title}
      </p>
      <p className="album-m-top">
        <b>Year</b>: {currentAlbum.year}
      </p>
      <p className="album-m-top album-m-bottom">
        <b>Price</b>: {currentAlbum.price} $
      </p>
    </div>
  );
};
