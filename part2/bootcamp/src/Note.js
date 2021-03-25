import React from 'react'

export const Note = ({ note }) => {
    return (
        <div>
            <li >{note.content}</li>
        </div>
    )
}
