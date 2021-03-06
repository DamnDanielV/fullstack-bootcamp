import { useState } from "react";

function App() {

  const [ persons, setPersons ] = useState([{
    name: 'Arto Hellas',
    id: 1
  }])
  const [ newName, setNewName ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      id: persons.length + 1
    }
    setPersons([...persons, newPerson ])
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <div key={person.id}>{person.name}</div>)}
      </div>
    </div>
  );
}

export default App;
