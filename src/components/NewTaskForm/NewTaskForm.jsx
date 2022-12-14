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
  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.label.length !== 0) {
      this.props.onItemAdd(this.state.label)
      this.setState({
        label: '',
      })
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <input
            type="text"
            className="new-todo"
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
            value={this.state.label}
            autoFocus
          ></input>
        </label>
      </form>
    )
  }
}
