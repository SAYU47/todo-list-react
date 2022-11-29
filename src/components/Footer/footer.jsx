import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../TasksFilter/task-filter'
import './footer.css'
export default class Footer extends React.Component {
  static defaultProps = { filter: 'all', filterSwich: () => {}, clearTodo: () => {}, activeCount: () => {} }
  static propTypes = {
    filter: PropTypes.string,
    onToggleDone: PropTypes.func,
    clearTodo: PropTypes.func,
    activeCount: PropTypes.number,
  }
  render() {
    const { filter, onToggleDone, activeCount, filterSwich, clearTodo } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{activeCount} items left</span>
        <TaskFilter onToggleDone={() => onToggleDone(this.task.id)} filter={filter} filterSwich={filterSwich} />
        <button className="clear-completed" onClick={clearTodo}>
          Clear completed
        </button>
      </footer>
    )
  }
}
