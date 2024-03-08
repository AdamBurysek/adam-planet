'use client';

import React, { useState } from 'react';

import styles from './Contact.module.css';
import FormField from './FormField';
import type { Errors, FormValues } from './Types';

const initialFormValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialErrorsValues: Errors = {
  name: false,
  email: false,
  subject: false,
};

const Contact = () => {
  const [isFocused, setIsFocused] = useState<string>('');
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<Errors>(initialErrorsValues);
  const [pending, setPending] = useState<boolean>(false);

  const formspreeApi = process.env.NEXT_PUBLIC_FORMSPREE_API;

  const handleFocus = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setIsFocused(e.target.id);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const updatedFormValues = { ...formValues, [name]: value };
    setFormValues(updatedFormValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: formValues.name.trim().length < 2,
      email: !/^\S+@\S+\.\S{2,}$/.test(formValues.email),
      subject: formValues.subject.trim().length === 0,
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(Boolean);

    if (!hasErrors && formspreeApi) {
      setPending(true);
      fetch(formspreeApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formValues,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Something Failed');
          }
          setFormValues(initialFormValues);
          setPending(false);
        })
        .catch((error) => {
          console.error('There is a problem with fetch operation:', error); // eslint-disable-line no-console
        });
    }
    if (!formspreeApi) {
      console.error('Missing information about form endpoint'); // eslint-disable-line no-console
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className={styles.topContainer}>
        <p className={styles.text}>
          If there&apos;s anything on your mind, whether it&apos;s a question,
          collaboration idea, or just a friendly chat, feel free to contact me.
        </p>
        <a className={styles.mail} href="mailto:adam.planet@gmail.com">
          adam.planet@gmail.com
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <h3>Contact Form</h3>
          <div className={styles.inputsContainer}>
            {Object.keys(formValues).map((value) => (
              <FormField
                key={value}
                errors={errors}
                formValues={formValues}
                handleChange={handleChange}
                handleFocus={handleFocus}
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                value={value as keyof FormValues}
              />
            ))}
          </div>
          <button className={styles.button} disabled={pending} type="submit">
            {pending ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
