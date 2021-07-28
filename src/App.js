import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import NotesList from './components/NotesList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: uuid(),
      text: 'Sample text for first note',
      date: '27/7/2021',
    },
    {
      id: uuid(),
      text: 'Sample text for second note',
      date: '27/7/2021',
    },
    {
      id: uuid(),
      text: 'Sample text for third note',
      date: '27/7/2021',
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
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <div className='container'>
      <h1>Notes</h1>
      <SearchBar handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
