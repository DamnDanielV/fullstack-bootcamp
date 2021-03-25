import React, { useState } from 'react'
import { Statistics } from './Statistics'

export const Unicafe = () => {

    const [feed, setFeed] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })

    const handleGod = () => {
        setFeed({
            ...feed,
            good: feed.good + 1
        })
    }
    const handleNeutral = () => {
        setFeed({
            ...feed,
            neutral: feed.neutral + 1
        })
    }

    const handleBad = () => {
        setFeed({
            ...feed,
            bad: feed.bad + 1
        })
    }   

    return (
        <>
            <h1>Give feedback</h1>
            <button onClick={handleGod}>God</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
            <Statistics feed={feed}/>

        </>
    )
}
