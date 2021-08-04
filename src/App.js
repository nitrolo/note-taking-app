import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import NotesList from './components/NotesList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: uuid(),
      text: 'Sample text',
      date: '7/27/2021',
      isEditing: false,
    },
  ]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('note-taking-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('note-taking-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: uuid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };

  const activateNoteEdit = (id) => {
    const solidNotes = notes.map((note) => {
      if (note.id === id) {
        note.isEditing = true;
      }
      return note;
    });
    setNotes(solidNotes);
  };

  const editNote = (id, text) => {
    const solidNotes = notes.map((note) => {
      if (note.id === id) {
        note.isEditing = false;
        note.text = text;
      }
      return note;
    });
    setNotes(solidNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className="container">
      <h1>Notes</h1>
      <SearchBar handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
        )}
        onNoteClick={activateNoteEdit}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handleEditNote={editNote}
      />
    </div>
  );
};

export default App;
