import { useContext } from "react"
import "./WatchlistCard.css"
import { GlobalContext } from "../../../Context/GlobalState"

const WatchlistCard = ({movie}) => {
  const {removeToWatchlist,addToWatchlistFromWatched}=useContext(GlobalContext)
  return (
    <div>
      <div className="movieCard-watchlist">
      <div className="movie-wrapper">
        <div className="movieCard-img">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.poster_path}
            />
          ) : (
            <div className="notfound"></div>
          )}
        </div>
        
        <div className="btns">
            <button className="del-btn" onClick={()=> removeToWatchlist(movie.id)} >Sil</button>
            <button className="ok-btn" onClick={()=> addToWatchlistFromWatched(movie)} >İzlendi</button>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default WatchlistCard
