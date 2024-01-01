import styled, { css } from "styled-components";

interface ListItemProps {
  tabindex?: number;
}

export const Main = styled.div`
  display: flex;
  width: 100%;
  font-family: sans-serif;
`;

export const DropDownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const DropDownHeader = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  gap: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  a:focus {
    display: inline-block;
    border: 1px solid black;
    width: 35px;
  }

  .fa-arrow-up-right-from-square {
    position: absolute;
    top: 10px;
    right: 10px;
    color: black;
    z-index: 1;
  }
`;

export const SelectionContainer = styled.button`
  flex-grow: 1;
  border: none;
  text-align: left;
  padding: 10px 15px;
  background-color: white;

  .fa-bars {
    margin-right: 10px;
  }
`;

export const DropDownListContainer = styled.div`
  overflow: hidden;
`;

export const DropDownList = styled.ul<{ $isOpen: boolean }>`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-sizing: border-box;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  transition: all 0.5s;
  ${(p) =>
    p.$isOpen
      ? css`
          margin-top: 0;
        `
      : css`
          margin-top: -100%;
        `}
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.4em;
  &:hover {
    color: #fd9e46;
  }
`;

export const ListItemLink = styled.button<ListItemProps>`
  cursor: pointer;
  width: 100%;
  padding: 5px 1em;
  border: none;
  text-align: left;
  background-color: white;
`;
