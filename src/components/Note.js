import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import Edit from './Edit';

const Note = ({
  id,
  text,
  date,
  handleDeleteNote,
  handleEditNote,
  isEditing,
  onClick,
}) => {
  if (isEditing) {
    return <Edit id={id} text={text} handleEditNote={handleEditNote} />;
  }
  return (
    <div className="note">
      <span onClick={onClick}>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
