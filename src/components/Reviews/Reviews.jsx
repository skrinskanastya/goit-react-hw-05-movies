import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'helpers/api';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const reviewsData = await fetchReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Something went wrong. Error: {error}</p>
          ) : reviews.length === 0 ? (
            <p>No results</p>
          ) : (
            <ul>
              {reviews.length !== 0 &&
                reviews.map(item => {
                  return (
                    <li key={item.id}>
                      <p>Author: {item.author}</p>
                      <p>{item.content}</p>
                    </li>
                  );
                })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
