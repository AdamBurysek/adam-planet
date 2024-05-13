import React from 'react';

import styles from './Contact.module.css';
import type { FormFieldProps } from './Types';

const FormField = ({
  value,
  isFocused,
  formValues,
  errors,
  handleFocus,
  setIsFocused,
  handleChange,
}: FormFieldProps) => {
  if (value === 'message') {
    return (
      <p
        className={`${isFocused === value || formValues[value] ? styles.focused : ''}`}
      >
        <label htmlFor={value}>{value}</label>
        <textarea
          id={value}
          maxLength={1000}
          name={value}
          onBlur={() => setIsFocused('')}
          onChange={handleChange}
          onFocus={handleFocus}
          rows={7}
          value={formValues[value]}
        />
      </p>
    );
  }
  return (
    <p
      className={`${isFocused === value || formValues[value] ? styles.focused : ''}`}
    >
      <label className={`${errors[value] ? styles.error : ''}`} htmlFor={value}>
        {value}
      </label>
      <input
        autoComplete={value}
        id={value}
        maxLength={50}
        name={value}
        onBlur={() => setIsFocused('')}
        onChange={handleChange}
        onFocus={handleFocus}
        type="text"
        value={formValues[value]}
      />
    </p>
  );
};

export default FormField;
