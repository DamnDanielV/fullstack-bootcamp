import React from 'react';
import ReactDOM from 'react-dom';
import { Anecdotes } from './components/Anecdotes';
import { Content } from './components/Content';
import { Counter } from './components/Counter';
import { Counters } from './components/Counters';
import { Header } from './components/Header';
import { Total } from './components/Total';
import { Unicafe } from './components/Unicafe';




const App = () => {
  const course = 'Half Stack application development'
  const content = {

    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14

  }

  return (
    <div>
      {/* <Header course={course} />
      <Content content={content}/>
      <Total data={content}/>
      <Counter /> */}
      {/* <Counters /> */}
      {/* <Unicafe /> */}
      < Anecdotes />
 
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
