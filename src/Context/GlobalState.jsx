import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  watchlist:  localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")):[] ,
  watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) :[],
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(()=>{
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
    localStorage.setItem("watched", JSON.stringify(state.watched))
  },[state])

  const addToWatchlist = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLİST", payload: movie });
  };
  const addToWatched = (movie)=>{
    dispatch({type: "ADD_TO_WATCHED", payload:movie})

  }

  const removeToWatchlist = (id)=>{
    dispatch({type: "REMOVE_TO_WATCHLİST", payload:id})
  }

  const addToWatchlistFromWatched = (movie)=>{
    dispatch({type: "ADD_TO_WATCHLİST_FROM_WATCHED", payload:movie})
  }
  const removeToWatched = (id)=>{
    dispatch({type: "REMOVVE_TO_WATCHED", payload:id})
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addToWatchlist,
        removeToWatchlist,
        watched: state.watched,
        addToWatchlistFromWatched,
        removeToWatched,
        addToWatched,

      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
