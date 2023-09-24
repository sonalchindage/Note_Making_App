/*import logo from './logo.svg';


import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';

function App() {
  return (
    <div className="App">
      <NoteContainer/>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useEffect, useState } from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [notes,setNotes]=useState (
    JSON.parse(localStorage.getItem('notes-app')) ||[]
    );

const addNote=(colour)=>{
const tempNotes=[...notes];

tempNotes.push({
  id:Date.now() +""+Math.floor(Math.random()*78),
  text:"",
  time: Date.now(),
  colour,
});
setNotes(tempNotes);
};

const deleteNote=(id)=>{
  const tempNotes=[...notes];

  const index=tempNotes.findIndex((item)=>item.id===id);
  if(index<0) return;
  
  tempNotes.splice(index,1);
  setNotes(tempNotes);
};

const updateText=( text,id)=>{
  const tempNotes=[...notes];

const index=tempNotes.findIndex((item)=>item.id===id);
  if(index<0) return;
  
tempNotes[index].text=text;
setNotes(tempNotes);
};

useEffect(()=>{
localStorage.setItem('notes-app',JSON.stringify(notes))
},[notes])


  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote}
      updateText={updateText}
      />
    </div>
  );
}

export default App;
