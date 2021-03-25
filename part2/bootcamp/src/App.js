import React from 'react'
import { Note } from './Note';


function App({ notes }) {
  return (
   <div>
     <h1>Notes</h1>
     {/* <ul>
       {notes.map((note)=>{return <li key={note.id}>{note.content}</li>})}
     </ul> */}
     <ul>
       {notes.map((note) => <Note key={ note.id } note={ note }/>)}
     </ul>
   </div>
  );
}

export default App;
