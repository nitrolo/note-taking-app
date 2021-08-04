import React, { useState } from 'react';

const AddNote = ({ defaultValue = '', onBlur, handleAddNote }) => {
  const [noteText, setNoteText] = useState(defaultValue);
  const charLimit = 400;

  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = (e) => {
    if (noteText.trim().length > 0) {
      if (defaultValue !== '') {
        onBlur(e);
      } else {
        handleAddNote(noteText);
        setNoteText('');
      }
    }
  };

  const moveCursorAtEnd = (e) => {
    const value = e.target.value;
    e.target.value = '';
    e.target.value = value;
  };

  return (
    <div className="note new" onBlur={onBlur}>
      <textarea
        autoFocus={true}
        onFocus={moveCursorAtEnd}
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
