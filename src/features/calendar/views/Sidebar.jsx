import React, { useState } from 'react';
import { MdControlPoint } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import calendarManager from '../calendarManager';
import './styles/Sidebar.css';

const Sidebar = function({daysOfTheMonth, updateDaysOfTheMonth}) {
  const [open, setOpen] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [newReminder, setNewReminder] = useState({
    text: '',
    color: '#052a79',
    city: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = inputValue => {
    if(inputValue.length > 30)
      setInputError(true);
    else 
      setInputError(false);
  };

  const addNewReminder = () => {
    if (newReminder.text.length < 30) {
      let updatedDays = calendarManager.addNewReminder({ daysOfTheMonth, chosedDay: '1', newReminder: newReminder });
      updateDaysOfTheMonth(updatedDays);

      handleClose();
    }   
  };

  return (
    <section className="sidebar-section">
      <div className="sidebar">
        <button className="btn-new-reminder" onClick={handleClickOpen}>
          <div className="btn-info">
            <i className="btn-icon"><MdControlPoint /></i>
            <p>New Reminder</p>
          </div>
        </button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Reminder</DialogTitle>
          <DialogContent className="dialog-test">
            <TextField
              error={inputError}
              required
              autoFocus
              id="reminder-text"
              label="Max of 30 chars"
              placeholder="Type your reminder here"
              fullWidth={true}
              multiline={true}   
              type="text"
              margin="dense"
              onBlur={input => setNewReminder({...newReminder, text: input.target.value})}
              onChange={input => handleInputChange(input.target.value)}
            />
            
            <div className="div-color">
              <TextField 
                id="reminder-color"
                label="Color"
                margin="dense"
                type="text"
                defaultValue="#052a79"
                onChange={input => setNewReminder({...newReminder, color: input.target.value})}
              />
            </div>
            
            <TextField
              id="reminder-city"
              label="City"
              margin="dense"
              onChange={input => setNewReminder({...newReminder, city: input.target.value, })}
            />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="btn-cancel-create-reminder">
              Cancel
            </button>
            <button onClick={addNewReminder} className="btn-create-reminder">
              Create
            </button>
          </DialogActions>
        </Dialog>

      </div>
    </section>
  );
};

export default Sidebar;