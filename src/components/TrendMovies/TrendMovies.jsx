import { useLocation, Link } from 'react-router-dom';

const TrendMovies = ({ id, title }) => {
  const location = useLocation();
  return (
    <li id={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
};
export default TrendMovies;
