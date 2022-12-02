import React from 'react'
import PropTypes from 'prop-types'

import TimerGone from '../TimerGone/TimerGone'
import './Task.css'
export default class Task extends React.Component {
  static defaultProps = {
    label: 'label не передан',
    done: false,
    id: Math.random(),
    date: Date.now(),
  }
  static propTypes = {
    label: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.number,
    date: PropTypes.instanceOf(Date),
  }
  state = {
    label: '',
  }
  onLabelEditTask = (e) => {
    this.setState({
      label: e.target.value.trim(),
    })
  }
  onSubmitTask = (e) => {
    e.preventDefault()
    this.props.addEditingItem(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    const { label, done, onToggleDone, onDeleted, date, onEditTask, edit } = this.props
    const classEdit = edit ? 'editing' : done ? 'completed' : 'acitive'
    const editInput = (
      <form onSubmit={this.onSubmitTask}>
        <label>
          Edit:
          <input type="text" className="edit" defaultValue={label} onChange={this.onLabelEditTask} autoFocus />
        </label>
      </form>
    )

    return (
      <li className={classEdit}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done}></input>
          <label>
            <span className="description">{label}</span>
            <TimerGone date={date} />
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
}
