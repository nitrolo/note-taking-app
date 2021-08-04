import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
  onNoteClick,
}) => {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          onClick={() => onNoteClick(note.id)}
          isEditing={note.isEditing}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
