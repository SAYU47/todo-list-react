import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'
const NewTaskForm = ({ onItemAdd }) => {
  const [label, setLabel] = useState('')
  const [sec, setSec] = useState('')
  const [min, setMin] = useState('')

  const onLabelChange = (event) => {
    if (event.target.value.charAt(0) === ' ') {
      label
    } else setLabel(event.target.value)
  }
  const secondsCount = (event) => {
    event.target.value.includes('+') ? sec : setSec(event.target.value)
  }

  const minutesCount = (event) => {
    setMin(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (label.length !== 0) {
      onItemAdd(label, min, sec)
      setLabel('')
      setMin('')
      setSec('')
    }
  }

  return (
    <form onSubmit={onSubmit} className="new-todo-form">
      <label>
        <input
          type="text"
          className="new-todo"
          onChange={onLabelChange}
          placeholder="Task"
          value={label}
          autoFocus
        ></input>
      </label>
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        type="number"
        min="0"
        onChange={minutesCount}
        value={min}
      ></input>
      <input
        placeholder="Sec"
        className="new-todo-form__timer"
        type="number"
        onChange={secondsCount}
        value={sec}
        min="0"
      ></input>
      <input type="submit" style={{ display: 'none' }}></input>
    </form>
  )
}
NewTaskForm.defaultProps = {
  onLabelChange: () => {},
  onSubmit: () => {},
}
NewTaskForm.propTypes = {
  onLabelChange: PropTypes.func,
  onSubmit: PropTypes.func,
}
export default NewTaskForm
