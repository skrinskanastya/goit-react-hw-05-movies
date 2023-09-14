import { useLocation, Link } from 'react-router-dom';
import { StyledList, StyledItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(movie => {
        return (
          <StyledItem key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};
export default MoviesList;
