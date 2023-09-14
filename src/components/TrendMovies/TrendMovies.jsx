import { useLocation, Link } from 'react-router-dom';
import { StyledItem } from './TrendMovies.styled';

const TrendMovies = ({ id, title }) => {
  const location = useLocation();
  return (
    <StyledItem id={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </StyledItem>
  );
};
export default TrendMovies;
