import style from './todos.module.css'

export function Todos({ todo }) {
  return (
    <div className={style.div}>
      <input type='checkbox' />
      <p>{todo}</p>
      <button>❌</button>
    </div>
  )
}
