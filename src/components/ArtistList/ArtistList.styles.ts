import styled from "styled-components";

export const ArtistListSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #eaeaea;
  width: 450px;
  padding-top: 50px;
  border: 1px solid #767676;
`;

export const ArtistCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 25px;
  padding: 10px 40px 0;
  overflow-y: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  gap: 30px;

  button {
    cursor: pointer;
    border: none;
    background-color: white;
    padding: 5px 10px;
  }
`;

export const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "150px",
    left: "calc(50% - 200px",
    width: "400px",
    height: "400px",
    backgroundColor: "#eaeaea",
  },
};
