import { Button } from '../button/Button'
import style from './input.module.css'

export function Input({ addButtonHandler, inputValue, setInputValue }) {
  
  return (
    <div className={style.div}>
      <input
        className={style.input}
        placeholder='Сделать удаление завершенных и всех'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button color='black' addButtonHandler={addButtonHandler}>Добавить</Button>
    </div>
  )
}
