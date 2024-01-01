type ErrorFormFields = {
  id?: number;
  name?: string;
  nationality?: string;
  age?: string;
};

export const validate = (vals: ErrorFormFields) => {
  const errors: ErrorFormFields = {};

  if (!vals.name) {
    errors.name = "Name is required!";
  } else if (vals.name.length < 2) {
    errors.name = "Enter at least 2 characters!";
  }

  if (!parseInt(vals.age)) {
    errors.age = "Please enter a number";
  }

  return errors;
};
