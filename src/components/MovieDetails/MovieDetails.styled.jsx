import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.07);
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 24px;
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  background: #e3f2fd;
  padding: 7px 18px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #bbdefb;
    color: #1565c0;
  }
`;

export const DetailsSection = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 32px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
`;

export const Poster = styled.img`
  width: 260px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
  background: #f4f6fa;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 14px;
  font-size: 2rem;
  color: #222;
`;

export const Score = styled.p`
  font-weight: 500;
  color: #1976d2;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  margin-bottom: 14px;
`;

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Genre = styled.li`
  background: #e3f2fd;
  color: #1976d2;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.98rem;
`;

export const AdditionalSection = styled.div`
  margin-top: 24px;
`;

export const AdditionalTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 12px;
`;

export const AdditionalList = styled.ul`
  display: flex;
  gap: 18px;
  list-style: none;
  padding: 0;
  margin: 0 0 18px 0;
`;

export const AdditionalLink = styled(Link)`
  color: #1976d2;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 6px;
  background: #e3f2fd;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #bbdefb;
    color: #1565c0;
  }
`;