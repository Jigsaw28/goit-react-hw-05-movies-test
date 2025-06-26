import styled from "styled-components";

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 28px 0 0 0;
`;

export const ReviewItem = styled.li`
  background: #f4f6fa;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.07);
  padding: 18px 20px;
  margin-bottom: 18px;
`;

export const Author = styled.h3`
  margin: 0 0 10px 0;
  color: #1976d2;
  font-size: 1.08rem;
`;

export const Content = styled.p`
  margin: 0;
  color: #222;
  font-size: 1rem;
`;

export const NoReviews = styled.p`
  color: #888;
  font-style: italic;
  margin-top: 18px;
`;