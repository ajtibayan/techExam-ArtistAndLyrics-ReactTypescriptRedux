import styled from "styled-components";

export const FormContainer = styled.div``;

export const AddArtistForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem;
  background-color: #eaeaea;
  border: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;

  button {
    cursor: pointer;
    border: none;
    background-color: white;
    padding: 5px 10px;
  }
`;

export const ErrorMsg = styled.div`
  color: red;
  font-weight: bold;
`;

export const SuccessMsg = styled.div`
  text-align: center;
`;
