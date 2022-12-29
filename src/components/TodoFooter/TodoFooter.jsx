import React from 'react';
import {Button} from "../Button/Button";
import classNames from "classnames";
import style from './TodoFooter.module.css'

function TodoFooter({deleteAllTodos}) {
  return (
    <div className={classNames(style.TodoFooter)}>
      <Button color={'gray'}>
        Удалить завершенные
      </Button>
      <Button onClick={deleteAllTodos} color={'red'}>
        Удалить все
      </Button>
    </div>
  );
}

export default TodoFooter;
