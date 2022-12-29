import style from './Todos.module.css'
import {useState} from "react";

export function Todos({ todo, selectTodo, delSelectedTodo }) {
  const [checked, setChecked] = useState(false)

  const chengeCheck = () => checked ? delSelectedTodo(todo) : selectTodo(todo)

  chengeCheck()

  return (
    <div className={style.div}>
      <input checked={checked} onChange={() => setChecked(!checked)} type='checkbox' />
      <p>{todo}</p>
      <button>❌</button>
    </div>
  )
}
