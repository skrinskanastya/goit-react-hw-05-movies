import { Outlet, Link, useLocation } from 'react-router-dom';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
const PLACEHOLDER = 'https://via.placeholder.com/182x273';

export const Movie = ({ img, title, genres, overview, rating }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <div>
        <div>
          <Link to={backLinkHref}>Go back</Link>
        </div>
        <div>
          <img
            src={`${
              img ? BASE_POSTER_URL + img : PLACEHOLDER + '?text=' + title
            }`}
            alt={title}
            width="150"
          />
          <div>
            <h3>{title}</h3>
            <p>Rating: {Math.round(rating)}</p>
            {genres && genres.length > 0 ? (
              <div>
                <h4>Genres</h4>
                <ul>
                  {genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No genres available</p>
            )}
            <h4>Overview</h4>
            <p>{overview}</p>
          </div>
        </div>
        <div>
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
        </div>
      </div>
      <Outlet />
    </>
  );
};
