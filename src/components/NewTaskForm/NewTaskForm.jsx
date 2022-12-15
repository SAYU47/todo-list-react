import React from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'
export default class NewTaskForm extends React.Component {
  static defaultProps = {
    onLabelChange: () => {},
    onSubmit: () => {},
  }
  static propTypes = {
    onLabelChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }
  state = {
    label: '',
    sec: '',
    min: '',
  }
  onLabelChange = (event) => {
    if (event.target.value.charAt(0) === ' ') {
      this.setState({
        label: '',
      })
    } else
      this.setState({
        label: event.target.value,
      })
  }
  secondsCount = (event) => {
    if (event.target.value.includes('+')) {
      this.setState({
        sec: '',
      })
    } else {
      this.setState({
        sec: event.target.value,
      })
    }
  }
  minutesCount = (event) => {
    this.setState({
      min: event.target.value,
    })
  }
  onSubmit = (event) => {
    event.preventDefault()
    const { label, min, sec } = this.state
    if (label.length !== 0) {
      this.props.onItemAdd(label, min, sec)
      this.setState({
        label: '',
        min: '',
        sec: '',
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="new-todo-form">
        <label>
          <input
            type="text"
            className="new-todo"
            onChange={this.onLabelChange}
            placeholder="Task"
            value={this.state.label}
            autoFocus
          ></input>
        </label>
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          min="0"
          onChange={this.minutesCount}
          value={this.state.min}
          autoFocus
        ></input>
        <input
          placeholder="Sec"
          className="new-todo-form__timer"
          type="number"
          onChange={this.secondsCount}
          value={this.state.sec}
          min="0"
          autoFocus
        ></input>
        <input type="submit" style={{ display: 'none' }}></input>
      </form>
    )
  }
}
