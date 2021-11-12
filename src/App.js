import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Wizards from './Pages/Wizards';


function App() {

  const [students, setStudents] = useState([])

  const [array, setArray] = useState([])

  
   
  useEffect(() => {
    fetch('https://hp-api.herokuapp.com/api/characters/students')
      .then(response => response.json())
      .then(response => setStudents(response))
      .catch(err => console.log(err))
      
  }, [])

  function wizards() {

    let student = [...students]

    let arr = []

    while (arr.length < 3) {
      
      let aluno = student[Math.floor(Math.random() * 78)]
      
      if(aluno === undefined) {
        aluno = aluno[1]
      }
      
      student = student.filter(element => aluno.name !== element.name)
      student = student.filter(element => aluno.house !== element.house)
      
      arr = arr.filter(element => aluno.name !== element.name)
      arr = arr.filter(element => aluno.house !== element.house)
      

      arr.push(aluno)
      student = [...students]
      
    }
    setArray(arr)
  }
  
  


  
  return (
    
    <Switch>
      <Route exact path='/'>
        <Home wizards={wizards}/>
      </Route>

      <Route path='/wizards'>
        <Wizards array={array} wizards={wizards} setArray={setArray}/>
      </Route>
    </Switch>
  
  );
}

export default App;
