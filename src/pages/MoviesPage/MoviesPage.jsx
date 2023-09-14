import { React, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from 'components/SearchForm/SearchForm';
import { fetchMovies } from 'helpers/api';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    const fetchMovieByQuery = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchMovies(query);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <div>
      <Form setSearchParams={setSearchParams} />

      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : (
            movies.length > 0 && <MoviesList movies={movies} />
          )}
        </>
      )}
    </div>
  );
};
export default MoviesPage;
