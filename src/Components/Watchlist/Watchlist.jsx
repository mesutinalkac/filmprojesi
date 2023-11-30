import { useContext } from "react";
import "./Watchlist.css";
import { GlobalContext } from "../../Context/GlobalState";
import WatchlistCard from "./WatchlistCard/WatchlistCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (

    <div className="watchlist">
      <h1 className="title">İzleme Listesi</h1>
      <div className="counter-movie">
        {watchlist.length} {watchlist.length > 100 ? "Filmler": "Film" }
      </div>
      {watchlist.length > 0 ? (
        <div className="watchlist-wrapper">
          {watchlist.map((movie) => (
            <WatchlistCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <h2 className="watchlis-movie"> Listenizde Film Yok... </h2>
      )}
    </div>
  );
};

export default Watchlist;
