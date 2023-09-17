import React, { useEffect, useState } from 'react';
import { fetchTrends } from '../../helpers/api';
import Loader from '../../components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

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

  if (error !== null) {
    return <p>Something went wrong. Error: {error}</p>;
  }
  return (
    <div>
      <h1>Trending today</h1>
      {loading ? <Loader /> : <MoviesList movies={trends} />}
    </div>
  );
};

export default HomePage;
