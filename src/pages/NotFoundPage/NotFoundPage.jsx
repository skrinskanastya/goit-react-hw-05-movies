import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h1>
        Not found. Maybe you meant the <Link to="/">home page</Link>?
      </h1>
    </div>
  );
};
