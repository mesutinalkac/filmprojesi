import { useContext } from "react";
import "./Watched.css";
import { GlobalContext } from "../../Context/GlobalState";
import WatchedCard from "./WatchedCard/WatchedCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="watchlist">
      <h1 className="title">İzlenenler</h1>
      <div className="counter-movie">
        {watched.length} {watched.length > 100 ? "Filmler" : "Film"}
      </div>
      {watched.length > 0 ? (
        <div className="watchlist-wrapper">
          {watched.map((movie) => (
            <WatchedCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <h2 className="watchlis-movie">Listenizde Film Yok...</h2>
      )}
    </div>
  );
};

export default Watched;
