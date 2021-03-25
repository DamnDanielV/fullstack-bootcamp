import React, { useState } from 'react'
import { Course } from './Course'

export const App = ({ courses }) => {

    const [notes, setNotes] = useState(courses)

    const func = (accumulator, currentValue) => accumulator + currentValue

    const total = notes.map((note) => {
        return note.parts.map((el) => el.exercises).reduce(func) 
    }).reduce(func)
   
    const addNote = (event) => {
        event.preventDefault();
        console.log('butoon clicked ', event.target )
    }

    const [newNote, setNewNote] = useState('new note here...')

    const handleChange = (event) => {
        event.preventDefault();
        setNewNote(event.target.value)
        // setNewNote(e.target.)
    }
    return (
        <>
            <h1>Web development curriculum</h1>
            {
                notes.map((note) => {
                    return <div key={note.id}><Course course={ note }/></div>    
                })
            }
            <strong>total of { total } courses</strong>

            <form onSubmit={addNote}>
                <input defaultValue={newNote} onChange={handleChange}></input>
                <button type="submit">add note</button>
            </form>
        </>
    )
}
