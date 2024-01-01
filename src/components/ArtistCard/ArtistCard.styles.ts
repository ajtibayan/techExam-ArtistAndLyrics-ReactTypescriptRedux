import styled, { css } from "styled-components";

export const ArtistCardSection = styled.button<{ $isSelected: boolean }>`
  cursor: pointer;
  padding: 40px 50px;
  position: relative;
  ${(p) =>
    p.$isSelected
      ? css`
          background-color: #dcf3e7;
          border: 1px solid #14ae5c;

          h2 {
            background-color: #14ae5c;
            border: 1px solid #11944e;
          }
        `
      : css`
          background-color: white;
          border: none;
        `}

  &:hover, &:focus {
    background-color: #dcf3e7;
    border: 1px solid #14ae5c;

    h2 {
      background-color: #14ae5c;
      border: 1px solid #11944e;
    }
  }
`;
