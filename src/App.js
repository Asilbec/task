import './App.css';
import { useState } from 'react'
import React from "react"

function App() {
  const [nice, newNice] = useState([{ id: 0, name: 'do Something' }])

  function add() {
    document.getElementById('nameInput').style.animation = "shakze 2s linearne ";


    if (document.getElementById("nameInput").value === '') {
      console.log('nah')
      document.getElementById('nameInput').style.borderColor = 'red'
      document.getElementById('nameInput').style.animation = "shake 1s linear ";
      setTimeout(myFunction, 1000)
      function myFunction() {
        document.getElementById('nameInput').style.animation = "shakze 2s linear ";
      }

    } else {
      newNice(nice => [...nice, { id: nice.length, name: document.getElementById("nameInput").value }]);
      document.getElementById('nameInput').style.borderColor = 'black'

    }
  }

  function crazy(index) {
    var c = document.getElementById("listzz").children;
    c[index].style.animation = "myAnimation 0.2s ease ";
    var t = setTimeout(myFunction, 300)
    function myFunction() {
      clearTimeout(t)

      newNice(nice => nice.filter((img, i) => i !== index));

    }


  }


  return (
    <div className='App'>
      <h1>Tasks</h1>
      <div className='inputs'>
        <input placeholder='Task....' id='nameInput'></input>
        <button id='buttonClick' onClick={() => add()}>Add</button>
      </div>
      <div id='listzz' className='list'>
        {nice.map((nice, index) => (
          <button onClick={() => crazy(index)} key={index}>{nice.name}</button>
        ))}
      </div>


    </div>
  );
}
export default App;
