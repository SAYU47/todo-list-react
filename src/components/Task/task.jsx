import React from 'react'
import PropTypes from 'prop-types'

import TimerGone from '../TimerGone/timer-gone'
import './task.css'
export default class Task extends React.Component {
  ids = 100
  static defaultProps = {
    label: 'label не передан',
    done: false,
    id: this.ids++,
    date: Date.now(),
  }
  static propTypes = {
    label: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.number,
    date: PropTypes.instanceOf(Date),
  }
  render() {
    const { label, done, onToggleDone, onDeleted, date } = this.props
    let classNames = 'acitive'
    if (done) {
      classNames = 'completed'
    }
    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone}></input>
          <label>
            <span className="description">{label}</span>
            <TimerGone date={date} />
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    )
  }
}
