import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../TasksFilter/TaskFilter'
import './Footer.css'
const Footer = ({ filter, activeCount, filterSwich, clearTodo }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>
      <TaskFilter filter={filter} filterSwich={filterSwich} />
      <button className="clear-completed" onClick={clearTodo} aria-label="Очистить список дел">
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = { filter: 'all', filterSwich: () => {}, clearTodo: () => {}, activeCount: () => {} }
Footer.propTypes = {
  filter: PropTypes.string,
  onToggleDone: PropTypes.func,
  clearTodo: PropTypes.func,
  activeCount: PropTypes.number,
}
export default Footer
