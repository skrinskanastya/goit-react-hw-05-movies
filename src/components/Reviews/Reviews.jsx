import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from 'helpers/api';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
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

  if (error !== null) {
    return <p>Error, Something went wrong. : {error}</p>;
  }
  if (reviews.length === 0) {
    return <p>No results</p>;
  }
  return (
    <div>
      {loading ? (
        <Loader />
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
    </div>
  );
};
export default Reviews;
