import style from './Button.module.css'
import classNames from 'classnames'

export function Button({ color, children, onClick}) {
  return (
    <button
      className={classNames(style.btn, style[color])}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
