import React, {useState} from 'react'



export default function Textfield({content, placeholder}) { 

  let [name2, setName2] = useState('')

  const onNameChange2 = (event) => {
    setName2(event.target.value)
    console.log(event.target.value)
  }

  return (
    <form>
      <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" placeholder={placeholder} onChange={onNameChange2} value={name2}/>
    </form>
  )
}