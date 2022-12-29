import style from './button.module.css'
import classNames from 'classnames'

export function Button({ color, children, addButtonHandler }) {
  return (
    <button
      className={classNames(style.btn, style[color])}
      onClick={addButtonHandler}
    >
      {children}
    </button>
  )
}
