import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

export const SearchInput = styled.input`
  padding: 8px 14px;
  font-size: 1rem;
  border: 1px solid #bdbdbd;
  border-radius: 6px 0 0 6px;
  outline: none;
  width: 260px;
`;

export const SearchButton = styled.button`
  padding: 8px 18px;
  font-size: 1rem;
  border: none;
  background: #1976d2;
  color: #fff;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1565c0;
  }
`;
