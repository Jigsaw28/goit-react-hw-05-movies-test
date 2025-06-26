import styled from "styled-components";

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 24px 0 0 0;
`;

export const CastItem = styled.li`
  width: 160px;
  background: #f4f6fa;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.07);
  padding: 16px 10px;
  text-align: center;
`;

export const CastImg = styled.img`
  width: 100px;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  background: #e3f2fd;
  margin-bottom: 10px;
`;

export const CastName = styled.p`
  font-weight: 500;
  margin: 8px 0 4px 0;
  color: #1976d2;
`;

export const CastCharacter = styled.p`
  font-size: 0.98rem;
  color: #444;
  margin: 0;
`;