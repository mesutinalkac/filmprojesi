import React, { useEffect, useState } from "react";
import "./Add.css";
import MovieCard from "./MovieCard/MovieCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Function to fetch initial 20 movies
    const fetchInitialMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=04789b5426aef2f69e73fc15c3320704&language=en-US&sort_by=popularity.desc&include_adult=false&page=1`
        );
        const data = await response.json();

        if (!data.error) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Error fetching initial movies:", error);
      }
    };

    // Call the fetch function when the component mounts
    fetchInitialMovies();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const onChange = (e) => {
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=04789b5426aef2f69e73fc15c3320704&include_adult=false&language=en-US&page=1&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add">
      <div className="add-container">
        <div className="add-wrapper">
          <input
            type="text"
            placeholder="Film, Dizi Ara..."
            onChange={onChange}
            value={query}
          />
        </div>
        <div className="movie-list">
          {results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Add;
