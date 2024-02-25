import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pprincipal.css";
import { Link } from "react-router-dom";
import Pfinal from "./Pfinal";

function Pprincipal() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let movieResponse, seriesResponse;

        if (searchTerm) {
          const movieUrl = "https://api.themoviedb.org/3/search/movie";
          const seriesUrl = "https://api.themoviedb.org/3/search/tv";
          const apiKey = "2701beb63f13bbddff4cacd46cdb0a20";

          movieResponse = await axios.get(movieUrl, {
            params: { api_key: apiKey, query: searchTerm },
          });

          seriesResponse = await axios.get(seriesUrl, {
            params: { api_key: apiKey, query: searchTerm },
          });
        } else {
          const movieUrl = "https://api.themoviedb.org/3/movie/popular";
          const seriesUrl = "https://api.themoviedb.org/3/tv/popular";
          const apiKey = "2701beb63f13bbddff4cacd46cdb0a20";

          movieResponse = await axios.get(movieUrl, {
            params: { api_key: apiKey },
          });

          seriesResponse = await axios.get(seriesUrl, {
            params: { api_key: apiKey },
          });
        }

        setMovies(movieResponse.data.results);
        setSeries(seriesResponse.data.results);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleMediaHover = (media) => {
    setSelectedMedia(media);
  };

  const renderMediaList = (mediaList) => (
    <ul>
      {mediaList.map((media) => (
        <li
          key={media.id}
          onMouseEnter={() => handleMediaHover(media)}
          onMouseLeave={() => handleMediaHover(null)}
        >
          <Link to="/Pfinal" state={{ selectedMedia: { ...media, trailerLink: getTrailerLink(media.id) } }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
              alt={media.title || media.name}
              style={{ height: "375px" }}
            />
            <div className="overlay_principal">
              <p>{media.title || media.name}</p>
              {selectedMedia && selectedMedia.id === media.id && (
                <div>
                  <p>Descripción: {media.overview}</p>
                  <p>Puntuación: {media.vote_average}</p>
                </div>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  const getTrailerLink = (id) => {
    return `https://www.youtube.com/embed/${id}`;
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="Pprincipal_div">
      <input
        type="text"
        placeholder="Buscar películas y series..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {searchTerm && (movies.length === 0 && series.length === 0) ? (
        <p>No se encontraron resultados</p>
      ) : (
        <>
          <h2>Popular films</h2>
          {renderMediaList(movies)}

          <h2>Popular series</h2>
          {renderMediaList(series)}
        </>
      )}
    </div>
  );
}

export default Pprincipal;
