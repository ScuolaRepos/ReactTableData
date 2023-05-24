import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { stringify } from 'querystring';

const data = [
  { name: "Anom", age: "19", gender: "Male" },
  { name: "Megha", age: "19", gender: "Female" },
  { name: "Subham", age: "25", gender: "Male"},
]

function App() {
  const [studenti, SetStudents] = useState(data);
  var [name, SetName] = useState("");
  var [age, SetAge] = useState("");
  var [gender, SetGender] = useState("");

  function elimina(tname: String) {
    SetStudents(studenti.filter(obj => obj.name !== tname));
  }

  function tname(t: string) {
    SetName(name = t)
  }
  function tage(t: string) {
    SetAge(age = t)
  }
  function tgender(t: string) {
    SetGender(gender = t)
  }
  
  function aggiungi() {
    data.push({name: name, age: age, gender: gender});
  }

  return (
    <center className="App">
      <h1>Static Data Table</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
        {studenti.map((data, k) => {
          return(
            <tr key={k}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
              <td>
                <button onClick={() => elimina(data.name)}>
                  elimina
                </button>
              </td>
            </tr>
          )
        })}
      </table>
      <br /><br />
      <h2>Input Form</h2>
      <form>
        <input onChange={(e) => tname(e.target.value)} placeholder="name" type="text" name="name" /><br /><br />
        <input onChange={(e) => tage(e.target.value)} placeholder="age"type="text" name="age" /><br /><br />
        <input onChange={(e) => tgender(e.target.value)} placeholder="gender"type="text" name="gender" /><br /><br />
        <input onClick={() => aggiungi()} type="submit" />
      </form>
      <br />
      <br />
      <p>{name}</p>
    </center>
  );
}

export default App;
