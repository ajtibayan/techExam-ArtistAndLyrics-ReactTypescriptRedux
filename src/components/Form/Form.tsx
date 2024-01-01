import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  AddArtistForm,
  ButtonContainer,
  CloseModal,
  ErrorMsg,
  FormContainer,
  InputContainer,
  SuccessMsg,
} from "./Form.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { addArtist } from "../../store";
import { validate } from "../../utils";

type Props = {
  modalClose: () => void;
};

type FormFields = {
  name: string;
  nationality: string;
  age: string;
};

const Form: React.FC<Props> = ({ modalClose }) => {
  const initValue: FormFields = {
      name: "",
      nationality: "",
      age: "",
    },
    form = useRef(),
    [formVals, setFormVals] = useState(initValue),
    [formErrs, setFormErrs] = useState({}),
    [isSubmit, setIsSubmit] = useState(false),
    [isSent, setIsSent] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(formErrs).length === 0 && isSubmit) {
      dispatch(addArtist(formVals));
      setIsSent(true);
    }
  }, [dispatch, formErrs, formVals, isSubmit]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setFormVals({ ...formVals, [id]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setFormErrs(validate(formVals));
    setIsSubmit(true);
  };

  return (
    <FormContainer
      id="add-artist-form"
      aria-labelledby="add-artist-form__heading"
    >
      {isSent ? (
        <SuccessMsg>
          <p>Form submitted and Artist List successfully updated!</p>
          <button onClick={modalClose}>Close</button>
        </SuccessMsg>
      ) : (
        <AddArtistForm ref={form} onSubmit={handleSubmit}>
          <CloseModal onClick={modalClose}>
            <FontAwesomeIcon icon={faXmark} />
          </CloseModal>
          <h1 id="add-artist-form__heading">Add Artist Form</h1>
          <InputContainer>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              placeholder="Enter Name"
              type="text"
              required
              value={formVals.name}
              onChange={handleChange}
            />
            <ErrorMsg>{formErrs.name && formErrs.name}</ErrorMsg>
          </InputContainer>
          <InputContainer>
            <label htmlFor="nationality">Nationality:</label>
            <input
              id="nationality"
              name="nationality"
              placeholder="Enter Nationality"
              type="text"
              required
              value={formVals.nationality}
              onChange={handleChange}
            />
            <ErrorMsg>{formErrs.nationality && formErrs.nationality}</ErrorMsg>
          </InputContainer>
          <InputContainer>
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              name="age"
              placeholder="Enter Age"
              type="text"
              required
              value={formVals.age}
              onChange={handleChange}
            />
            <ErrorMsg>{formErrs.age && formErrs.age}</ErrorMsg>
          </InputContainer>
          <ButtonContainer>
            <button type="submit" value="submit">
              Add
            </button>
            <button onClick={modalClose}>Cancel</button>
          </ButtonContainer>
        </AddArtistForm>
      )}
    </FormContainer>
  );
};
export default Form;
