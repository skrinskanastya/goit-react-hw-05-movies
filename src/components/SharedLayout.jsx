import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledNav } from './Layout.styled';
import Loader from './Loader/Loader';
export const SharedLayout = () => {
  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </StyledNav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
