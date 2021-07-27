import React, { useState } from 'react';
import uuid from 'react-uuid';
import NotesList from './components/NotesList';

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
  return (
    <div className='container'>
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
