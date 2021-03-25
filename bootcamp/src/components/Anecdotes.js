import React, { useState } from 'react'

export const Anecdotes = () => {
    
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
      ]

      const [selected, setSelected] = useState(0)
      const [voteAnec, setvoteAnec] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0})
    //   const points = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0}
    
    const find = () => {
        const r =  Math.round(Math.random() * Math.floor(anecdotes.length - 1))
        setSelected(r)
    }
    
    const vote = (sel) => {
        const copy = {...voteAnec}
        copy[sel] += 1
        // console.log(copy)
        setvoteAnec(copy)
        
    }
    console.log(voteAnec)
    console.log(`You voted ${selected} ${voteAnec[selected]} times`)

    let arrayVotes = (Object.values(voteAnec))
    let big = 0;
    let mayorVote = anecdotes[0]
    for (let i = 0; i < arrayVotes.length; i++) {
        if(arrayVotes[i] > big)
        {
            big = arrayVotes[i]
            mayorVote = anecdotes[i]
        }
    }
    console.log(mayorVote)
    return (
        <>
            <p>{anecdotes[selected]}</p>
            <p>has {voteAnec[selected]} votes</p>
            <button onClick={() => {vote(selected)}} >Vote</button>
            <button onClick={find}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>{mayorVote}</p>
        </>
    )
}
