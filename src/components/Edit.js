import React from 'react';
import AddNote from './AddNote';

const Edit = ({ id, handleEditNote, text }) => {
  const finishedEdit = (e) => {
    const text = e.target.value;
    if (handleEditNote) {
      handleEditNote(id, text);
    }
  };

  return (
    <div>
      <AddNote type="text" defaultValue={text} onBlur={finishedEdit} />
    </div>
  );
};

export default Edit;
