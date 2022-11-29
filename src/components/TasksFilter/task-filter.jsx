import React from 'react'
import PropTypes from 'prop-types'
import './task-filter.css'
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
    { name: 'all', label: 'All', id: 1 },
    { name: 'active', label: 'Active', id: 2 },
    { name: 'done', label: 'Done', id: 3 },
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
