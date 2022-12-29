import { useState } from 'react'
import { Input } from '../input/Input'
import { Todos } from '../todos/Todos'
import style from './wrapper.module.css'

export function Wrapper() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  function addButtonHandler() {
    setTodos([...todos, inputValue])
    setInputValue('')
  }

  return (
    <div className={style.wrapper}>
      <Input
        addButtonHandler={addButtonHandler}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {todos.map((todo, ind) => (
        <Todos key={ind} todo={todo} />
      ))}
    </div>
  )
}
