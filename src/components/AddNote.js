import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveClick = (event) => {
    handleAddNote(noteText);
  };
  return (
    <div className='note new'>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        onChange={handleChange}
      ></textarea>
      <div className='note-footer'>
        <small>200 remaining</small>
        <button className='save-button' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;