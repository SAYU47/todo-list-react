import React from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'
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
  }
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdd(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.label}
        ></input>
      </form>
    )
  }
}
