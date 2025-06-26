import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderBar = styled.header`
  background: #1976d2;
  padding: 18px 0;
  margin-bottom: 32px;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.15rem;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: color 0.2s;
  padding: 6px 14px;
  border-radius: 6px;

  &:hover,
  &.active {
    background: #1565c0;
    color: #e3f2fd;
  }
`;
