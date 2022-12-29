import {useEffect, useState} from 'react'
import { Input } from '../Input/Input'
import { Todos } from '../Todos/Todos'
import style from './Wrapper.module.css'
import TodoFooter from "../TodoFooter/TodoFooter";



//Достаем массив todo из localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'))


export function Wrapper() {

  //Значение из инпута
  const [inputValue, setInputValue] = useState('')
  //Состояние с массивом todo
  const [todos, setTodos] = useState(savedTodos)
  //Состояние с выбранными todo
  const [selectedTodos, setSelectedTodos] = useState([])

  console.log(selectedTodos)

  //Функция добавления todo в localStorage
  const setLocal = () => localStorage.setItem('todos', JSON.stringify(todos))
  //Функция удаления всех todo
  const deleteAllTodos = () => setTodos([])


  // const selectTodo = (name) => setSelectedTodos([...selectedTodos, name])
  // const delSelectedTodo = (name) => {
  //   setSelectedTodos(selectedTodos.filter((el) => el !== name))
  // }


  //Перезаписывание localStorage при каждом изменении массива todo
  useEffect(setLocal, [todos])


  //Функция добавления значения из инпута в массив todo, с проверкой но пустой инпут
  const addButtonHandler = () => {
    if(!inputValue) {
      return null
    } else {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }



  return (
    <div className={style.wrapper}>
      <Input
        addButtonHandler={addButtonHandler}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {todos.map((todo, ind) => (
        <Todos delSelectedTodo={delSelectedTodo} selectTodo={selectTodo} key={ind} todo={todo} />
      ))}
      <TodoFooter deleteAllTodos={deleteAllTodos}/>

    </div>
  )
}
