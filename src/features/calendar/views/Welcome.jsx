import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import './styles/Welcome.css';

const Welcome = ({ userIdentified, setUserIdentified, setUserName }) => {
  const [name, setName] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (input) => {
    if (input.length > 0)
      setInputError(false);
  };

  const handleProceed = () => {
    if (name === '' || name.length === 0)
      setInputError(true);
    else {
      window.sessionStorage.setItem('user', name);
      setUserIdentified(true);
      setUserName(name);
    }
  };

  return (
    <>
      {!userIdentified ?
        <Dialog open={!userIdentified} maxWidth='lg'>
          <div className="welcome-container">
            <div className="welcome-form">
              <h1>Welcome!</h1>
              <h2>Who are you?</h2>

              <TextField
                required
                autoFocus
                error={inputError}
                label="Insert your name here"
                multiline={false}
                type="text"
                margin="dense"
                className="welcome-name-input"
                onChange={input => {
                  handleInputChange(input.target.value);
                  setName(input.target.value);
                }}
              />

              <button className="welcome-btn-proceed" onClick={handleProceed}>
                Proceed
              </button>
            </div>
            <div className="welcome-img" />
          </div>
        </Dialog> : null
      }
    </>
  );
};

export default Welcome;