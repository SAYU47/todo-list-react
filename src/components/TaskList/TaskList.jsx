import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'
import './TaskList.css'
const TaskList = ({ todos, onDeleted, onToggleDone, onEditTask, addEditingItem }) => {
  const elements = todos.map((task) => {
    return (
      <Task
        {...task}
        key={task.id}
        onDeleted={() => onDeleted(task.id)}
        onToggleDone={() => onToggleDone(task.id)}
        onEditTask={() => {
          onEditTask(task.label)
        }}
        addEditingItem={(text) => addEditingItem(text, task.id)}
      />
    )
  })
  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
}
TaskList.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
}
export default TaskList
