import React from 'react'

export const Content = (props) => {
    const { content } = props
    const { part1, part2, part3, exercises1, exercises2, exercises3 } = content
    return (
        <>
            <p>
                {part1} {exercises1}
            </p>
            <p>
                {part2} {exercises2}
            </p>
            <p>
                {part3} {exercises3}
            </p> 
        </>
    )
}
