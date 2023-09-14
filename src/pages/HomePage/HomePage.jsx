import React, { useEffect, useState } from 'react';
import { fetchTrends } from '../../helpers/api';
import TrendMovies from 'components/TrendMovies/TrendMovies';
import Loader from '../../components/Loader/Loader';
import { StyledList } from './HomePage.styled';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendsList = async () => {
      try {
        setError(null);
        setLoading(true);
        const trendsList = await fetchTrends();
        setTrends(trendsList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!trends.length) {
      fetchTrendsList();
    }
  }, [trends.length]);

  return (
    <div>
      <h1>Trending today</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : (
            <StyledList>
              {trends.map(movie => {
                return (
                  <TrendMovies
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                  />
                );
              })}
            </StyledList>
          )}
        </>
      )}
    </div>
  );
};
export default HomePage;
