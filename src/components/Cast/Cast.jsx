import { useParams } from 'react-router-dom';
import { fetchCast } from 'helpers/api';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { StyledList } from './Cast.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCastList = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchCast(movieId);
        setCast(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCastList();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error !== null ? (
            <p>Error, Something went wrong. : {error}</p>
          ) : cast.length === 0 ? (
            <p>No results</p>
          ) : (
            <StyledList>
              {cast.map(item => (
                <li key={item.id}>
                  <img
                    src={`${
                      item.profile_path
                        ? BASE_POSTER_URL + item.profile_path
                        : PLACEHOLDER + '?text=' + item.name
                    }`}
                    alt={item.name}
                    width="150"
                  />
                  <p>{item.name}</p>
                </li>
              ))}
            </StyledList>
          )}
        </>
      )}
    </div>
  );
};
export default Cast;
