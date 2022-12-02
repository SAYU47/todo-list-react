import React from 'react'
import PropTypes from 'prop-types'
import './TaskFilter.css'
export default class TaskFilter extends React.Component {
  static defaultProps = {
    filter: 'all',
    filterSwich: () => {},
  }
  static propTypes = {
    filter: PropTypes.string,
    filterSwich: PropTypes.func,
  }
  buttons = [
    { name: 'all', label: 'All', id: 1, ariaLabel: 'Показать Всё' },
    { name: 'active', label: 'Active', id: 2, ariaLabel: 'Показать активные дела' },
    { name: 'done', label: 'Done', id: 3, ariaLabel: 'Показать завершённые дела' },
  ]
  render() {
    const { filter, filterSwich } = this.props
    const buttons = this.buttons.map((button) => {
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
}
