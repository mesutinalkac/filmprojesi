import { useContext } from "react";
import "./MovieCard.css";
import { GlobalContext } from "../../../Context/GlobalState";

const MovieCard = ({ movie }) => {
  const { addToWatchlist, watchlist, addToWatched } = useContext(GlobalContext);
  const { title, release_date, vote_average, poster_path } = movie;

  const moviestop = watchlist.some((o) => o.id === movie.id);

  return ( 
    <div className="movieCard">
      <div className="movie-wrapper">
        <div className="movieCard-img">
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt={poster_path}
            />
          ) : (
            <div className="notfound"></div>
          )}
        </div>
        <div className="movie-content">
          <p className="movie-title">
            {" "}
            <b>{title ? title : "-"}</b>{" "}
          </p>
          <p>
            {" "}
            YIL: <b>{release_date ? release_date.substring(0, 4) : "-"}</b>{" "}
          </p>
          <p>
            {" "}
            İMDB: <b>{vote_average ? vote_average : "-"}</b>{" "}
          </p>
        </div>
        <div className="btns">
          <button
            className="add-btn"
            disabled={moviestop}
            onClick={() => addToWatchlist(movie)}
          >
            Ekle
          </button>
          <button className="ok-btn" onClick={() => addToWatched(movie)}>
            İzlendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
