import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';
import { useEffect, useState } from 'react';
import Textfield from './Components/Textfield.js';

function App() {
  let [unit, setUnit] = useState(0)
  let [words, setWords] = useState('')
  let [name, setName] = useState('')


  const onFirstButtonClick = () => {
    console.log("First button has been clicked.");
    setUnit(0)
  }

  const onSecondButtonClick = () => {
    console.log("Second button has been clicked.");
    setUnit(unit+1)
  }

  useEffect(() => {
    if (unit === 5) {
      setWords('yay number 5')
    } else {
      setWords('')
    }
  }, [unit])

  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    alert('hello my name is ' + name)
  }

  const onNameChange = (event) => {
    setName(event.target.value)
    console.log(event.target.value)
  }



  return (
    <div className="App">
      <Button disabled={false} label="reset" onButtonClick={onFirstButtonClick}></Button>
      <Button disabled={false} label="increment" onButtonClick={onSecondButtonClick}></Button>
      <div>
        {unit}
        {words}
      </div>

      <div>
        <form onSubmit={onFormSubmit}>
        <input title="name" placeholder='enter name' label="name" id="name" name="name" type="text" value={name} onChange={onNameChange} />
        <button type="submit">submit</button>
        </form>
      </div>

      <div>
        <Textfield title="test" onCChange/>
      </div>

      <div>
        <Textfield title="test" onCChange placeholder="TF2"/>
      </div>
    </div>
  ); 
}

export default App;
