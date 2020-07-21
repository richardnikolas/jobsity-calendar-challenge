import React, { useState } from 'react';
import { MdControlPoint } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import calendarManager from '../calendarManager';
import { GithubPicker } from 'react-color';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import reactCSS from 'reactcss';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { subDays, addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import './styles/Sidebar.css';

const Sidebar = function({daysOfTheMonth, updateDaysOfTheMonth}) {
  const [open, setOpen] = useState(false);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [newReminder, setNewReminder] = useState({
    id: '',
    date: null,
    day: '',
    text: '',
    color: '#052a79',
    city: ''
  });

  const dateObject = moment();
  const toEndThisMonth = moment(dateObject).daysInMonth() - moment().date();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInputError(false);
  };

  const handleOpenColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleColorPickerClose = () => {
    setDisplayColorPicker(false);
  };

  const handleColorChange = (newColor) => {
    setNewReminder({...newReminder, color: newColor});
  };

  const handleInputChange = inputValue => {
    if(inputValue.length > 30)
      setInputError(true);
    else 
      setInputError(false);
  };

  const addNewReminder = () => {
    if (newReminder.text.length === 0)
      setInputError(true);
    else if (newReminder.text.length <= 30) {
      let updatedDays = calendarManager.addNewReminder({ daysOfTheMonth, chosedDay: newReminder.day, newReminder: newReminder });
      updateDaysOfTheMonth(updatedDays);

      handleClose();
    }
  };

  const reactStyles = reactCSS({
    'default': {
      color: {
        width: '90%',
        height: '80%',
        borderRadius: '5px',
        margin: '3px',
        backgroundColor: `${newReminder.color}`
      }
    }    
  });

  return (
    <section className="sidebar-section">
      <div className="sidebar">
        <button className="btn-new-reminder" onClick={handleClickOpen}>
          <div className="btn-info">
            <i className="btn-icon"><MdControlPoint /></i>
            <p>New Reminder</p>
          </div>
        </button>

        {/* Yeah, this could be a Component */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Reminder</DialogTitle>
          <DialogContent className="dialog-test">
            
            <div className="div-date-picker">        
              <p>Select a date: </p>
              <DatePicker 
                selected={newReminder.date}
                onSelect={date => setNewReminder({ ...newReminder, date: date, day: moment(date).date(), id: `thisMonth${moment(date).date()}` })} 
                calendarClassName="custom-date-picker"
                minDate={subDays(new Date(), moment(new Date).date()-1)}
                maxDate={addDays(new Date(), toEndThisMonth)}
              /> 
            </div>

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

            <div className="div-color-picker"> 
              <button onClick={handleOpenColorPicker} className="btn-color-picker">
                Pick Color
              </button>
              <div className="color-picker-swatch">
                <div style={reactStyles.color} />
              </div>
              {displayColorPicker ? 
                <ClickAwayListener onClickAway={handleColorPickerClose}>
                  <div className="color-picker-popover">
                    <div className="color-picker-cover" onClick={handleColorPickerClose} />
                    <GithubPicker color={newReminder.color} onChangeComplete={e => handleColorChange(e.hex)} />
                  </div>
                </ClickAwayListener> : null
              }
            </div>
            
            <TextField
              id="reminder-city"
              label="City"
              margin="dense"
              onChange={input => setNewReminder({...newReminder, city: input.target.value })}
              onBlur={input => {
                if (input.target.value.length > 2)
                  calendarManager.getWeatherForCity(input.target.value)
              }}
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