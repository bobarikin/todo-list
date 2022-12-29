import { Button } from '../Button/Button'
import style from './Input.module.css'

export function Input({ addButtonHandler, inputValue, setInputValue }) {

  return (
    <div className={style.div}>
      <input
        className={style.input}
        placeholder='Сделать удаление завершенных и всех'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button color='black' onClick={addButtonHandler}>Добавить</Button>
    </div>
  )
}
