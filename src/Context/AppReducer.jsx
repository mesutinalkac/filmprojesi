export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLİST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "REMOVE_TO_WATCHLİST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_TO_WATCHLİST_FROM_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      };
      case "REMOVVE_TO_WATCHED":
        return{
          ...state,
          watched: state.watched.filter((movie)=> movie.id !== action.payload)
        }
        case "ADD_TO_WATCHED":
          return{
            ...state,
            watched: [...state.watched, action.payload]
          }
  }
};
