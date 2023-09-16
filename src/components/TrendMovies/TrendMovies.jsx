import { useLocation, Link } from 'react-router-dom';
import { StyledItem } from './TrendMovies.styled';
// const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w200/';
// const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const TrendMovies = ({ id, title, image }) => {
  const location = useLocation();
  return (
    <StyledItem id={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
        {/* <img
          src={`${
            image ? BASE_POSTER_URL + image : PLACEHOLDER + '?text=' + title
          }`}
          alt={title}
          width="150"
        /> */}
      </Link>
    </StyledItem>
  );
};
export default TrendMovies;
