import React from 'react'

export const Course = ( {course} ) => {
    
    const redFun = (accumulator, currentValue) => accumulator + currentValue
    const total = course.parts.map((part) => part.exercises).reduce(redFun)

    return (
        <>
            <h2> {course.name} </h2>
            { course.parts.map((part) => {
                return (<div key={part.id}>{part.name} {part.exercises}</div>)
                })
            }
            <p>Total of courses: { total }</p>
        </>
    )
}
