import { HeaderBar, Nav, NavLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBar>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
    </HeaderBar>
  );
};
