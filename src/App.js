import "./App.css";
import { useState, useEffect } from "react";
import Search from "./assets/Search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=817e05f2";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL} &s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Dark");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type=""
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={Search} alt="Search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
