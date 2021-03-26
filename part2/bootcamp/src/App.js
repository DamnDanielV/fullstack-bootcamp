import React, { useState } from 'react'
import { Note } from './Note';


function App( props ) {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNoteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5 // true or false
    }

    setNotes([...notes, newNoteObject]) //change de state of notes and re-render it
    //The method does not mutate the original notes array, but rather creates a new copy of the array with the new item added to the end. This is important since we must never mutate state directly in React!
    setNewNote('') // clean the value of newNote and re-render it
  }

  const allNotes = showAll ? notes : notes.filter(note => note.important === true)


  const handleChange = (e) => {
    setNewNote(e.target.value)
  }

  return (
   <div>
     <h1>Notes</h1>
    <div>
      <button onClick={() => setShowAll(!showAll)}>{showAll ? 'important' : 'all'}</button>
    </div>
     <ul>
       {allNotes.map((note) => <Note key={ note.id } note={ note }/>)}
     </ul>
     <form onSubmit={handleSubmit}>
       <input value={ newNote } onChange={handleChange}></input>
       <button>Add new note</button>
       
     </form>
   </div>
  );
}

export default App;
