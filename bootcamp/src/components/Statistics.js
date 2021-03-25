import React from 'react'

export const Statistics = ({feed}) => {
    
    const {good, bad, neutral} = feed
    let flag = true
    let average = 0
    let percent = 0
    let all = 0

    if(good ===0 && bad ===0 && neutral === 0)
    {
        flag = false
    }
    else {
        average = (good + (bad * -1))/(good + bad + neutral)
        percent = (good / (good + bad + neutral)) * 100
        all = bad + good + neutral
    }



    return (
        <>
            {!flag ? <p>No feedback given</p> :
            <div>
                <h1>Statistics</h1>
                <br></br>
                <p>good {feed.good}</p>
                <p>neutral {feed.neutral}</p>
                <p>bad {feed.bad}</p>
                <p>all {all}</p>
                <p>average {isNaN(average) ? '0' : average}</p>
                <p>positive {percent} %</p> 
            </div>
            }
        </>
    )
}
