import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';


const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text:"First Note", 
      date:"1/21/23",
    },
    {
      id: nanoid(),
      text:"Second Note", 
      date:"1/21/23",
    },
    {
      id: nanoid(),
      text:"Third Note", 
      date:"1/21/23",
    },
    {
      id: nanoid(),
      text:"New Note", 
      date:"1/21/23",
    },
]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]);

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return <div className="container">
    <Header />
    <Search handleSearchNote={setSearchText}/>
    <NotesList 
      notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
      handleAddNote={AddNote}
      handleDeleteNote={DeleteNote}
    />
  </div>;
};

export default App;