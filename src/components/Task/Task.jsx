import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TimerGone from '../TimerGone/TimerGone'
import Timer from '../Timer/Timer'
import './Task.css'
const Task = ({ label, done, onToggleDone, onDeleted, date, onEditTask, edit, min, sec, addEditingItem }) => {
  const [editLabel, setEditLabel] = useState('')

  const onLabelEditTask = (e) => {
    setEditLabel(e.target.value.trim())
  }
  const onSubmitTask = (e) => {
    e.preventDefault()
    addEditingItem(editLabel)
    setEditLabel('')
  }

  const classEdit = edit ? 'editing' : done ? 'completed' : 'acitive'
  const editInput = (
    <form onSubmit={onSubmitTask}>
      <label>
        Edit:
        <input type="text" className="edit" defaultValue={label} onChange={onLabelEditTask} autoFocus />
      </label>
    </form>
  )

  return (
    <li className={classEdit}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done}></input>

        <label>
          <span className="title" onClick={onToggleDone}>
            {label}
          </span>
          <div className="task-wrapper">
            <Timer min={min} sec={sec} />
            <TimerGone date={date} />
          </div>
        </label>
        <button
          className="icon icon-edit"
          aria-label="Редактировать элемент"
          title="Редактировать элемент"
          onClick={onEditTask}
        ></button>
        <button
          className="icon icon-destroy"
          aria-label="Удалить элемент"
          title="Удалить элемент"
          onClick={onDeleted}
        ></button>
      </div>
      {edit && editInput}
    </li>
  )
}

Task.defaultProps = {
  label: 'label не передан',
  done: false,
  id: Math.random(),
  date: Date.now(),
}
Task.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  id: PropTypes.number,
  date: PropTypes.instanceOf(Date),
}
export default Task
