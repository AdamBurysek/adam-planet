export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type Errors = {
  name: boolean;
  email: boolean;
  subject: boolean;
  message?: string;
};

export type FormFieldProps = {
  value: keyof FormValues;
  isFocused: string;
  formValues: FormValues;
  errors: Errors;
  handleFocus: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  setIsFocused: (value: keyof FormValues | '') => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};
