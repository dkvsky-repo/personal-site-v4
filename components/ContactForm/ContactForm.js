import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledContactForm = styled.section`
  button {
    width: 280px;
  }
`;

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const FORMSPREE_URL = process.env.FORMSPREE_URL;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: `${FORMSPREE_URL}`,
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <StyledContactForm>
      <p>
        So many ways to contact me! 😀
        <br />
        Send me a quick message here, or use any of the social links below.
      </p>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          name='_replyto'
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type='submit' disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className='error'>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </StyledContactForm>
  );
};

export default ContactForm;
