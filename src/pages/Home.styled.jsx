import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 24px;
  color: #2d2d2d;
  text-align: center;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MovieItem = styled.li`
  margin-bottom: 14px;
  font-size: 1.1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MovieLink = styled(Link)`
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #1565c0;
    text-decoration: underline;
  }
`;