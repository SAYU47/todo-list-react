import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/task'
import './task-list.css'
export default class TaskList extends React.Component {
  static defaultProps = {
    onDeleted: () => {},
    onToggleDone: () => {},
  }
  static propTypes = {
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
  }
  render() {
    const { todos, onDeleted, onToggleDone } = this.props
    const elements = todos.map((task) => {
      return (
        <Task {...task} key={task.id} onDeleted={() => onDeleted(task.id)} onToggleDone={() => onToggleDone(task.id)} />
      )
    })
    return <ul className="todo-list">{elements}</ul>
  }
}
