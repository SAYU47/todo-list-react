import React from 'react'
import PropTypes from 'prop-types'
import './TaskFilter.css'
const TaskFilter = ({ filter, filterSwich }) => {
  const buttonsInfo = [
    { name: 'all', label: 'All', id: 1, ariaLabel: 'Показать Всё' },
    { name: 'active', label: 'Active', id: 2, ariaLabel: 'Показать активные дела' },
    { name: 'done', label: 'Done', id: 3, ariaLabel: 'Показать завершённые дела' },
  ]

  const buttons = buttonsInfo.map((button) => {
    const activeButton = button.name === filter
    const classisActive = activeButton ? 'active' : 'complited'
    return (
      <li key={button.id}>
        <button
          className={classisActive}
          type="button"
          aria-label={button.ariaLabel}
          onClick={() => {
            filterSwich(button.name)
          }}
        >
          {button.label}
        </button>
      </li>
    )
  })
  return <div className="filters">{buttons}</div>
}

TaskFilter.defaultProps = {
  filter: 'all',
  filterSwich: () => {},
}
TaskFilter.propTypes = {
  filter: PropTypes.string,
  filterSwich: PropTypes.func,
}
export default TaskFilter
