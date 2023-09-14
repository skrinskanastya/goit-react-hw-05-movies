import { Outlet, Link, useLocation } from 'react-router-dom';
import { MovieWrapper, InfoWrapper, StyledGenresList } from './Movie.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

const Movie = ({ img, title, genres, overview, rating }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <div>
        <div>
          <Link to={backLinkHref}>Go back</Link>
        </div>
        <MovieWrapper>
          <img
            src={`${
              img ? BASE_POSTER_URL + img : PLACEHOLDER + '?text=' + title
            }`}
            alt={title}
            width="150"
          />
          <div>
            <h3>{title}</h3>
            <p>User Score: {Math.round(rating)}</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            {genres && genres.length > 0 ? (
              <div>
                <h4>Genres</h4>
                <StyledGenresList>
                  {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
                </StyledGenresList>
              </div>
            ) : (
              <p>No genres available</p>
            )}
          </div>
        </MovieWrapper>
        <InfoWrapper>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
        </InfoWrapper>
      </div>
      <Outlet />
    </>
  );
};
export default Movie;
