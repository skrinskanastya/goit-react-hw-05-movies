import { Link } from 'react-router-dom';
export const Button = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <div></div>
    </div>
  );
};
