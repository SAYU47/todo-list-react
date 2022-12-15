import React from 'react'
import PropTypes from 'prop-types'
import '../Timer/Timer.css'
export default class Timer extends React.Component {
  static defaultProps = {
    update: () => {},
    startTimer: () => {},
    stopTimer: () => {},
  }
  static propTypes = {
    min: PropTypes.number,
    sec: PropTypes.number,
    active: PropTypes.bool,
    update: PropTypes.func,
    startTimer: PropTypes.func,
    stopTimer: PropTypes.func,
  }
  state = {
    min: this.props.min,
    sec: this.props.sec,
    active: false,
  }
  update = () => {
    const { min, sec } = this.state
    this.setState({ min, sec: sec - 1 })
    sec === 0 && this.setState({ min: min - 1, sec: 59 })
    if (min === 0 && sec === 0) {
      this.setState({ min: 0, sec: 0 })
      clearInterval(this.interval)
    }
  }

  startTimer = () => {
    this.setState({ active: true })
    this.interval = setInterval(() => this.update(), 1000)
  }

  stopTimer = () => {
    this.setState({ active: false })
    clearInterval(this.interval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { min, sec } = this.state
    return (
      <span className="description">
        <button
          type="button"
          aria-label="Запустить таймер"
          title="запустить таймер"
          className="icon icon-play"
          onClick={this.startTimer}
          disabled={this.state.active}
        ></button>
        <button
          type="button"
          title="Пауза"
          aria-label="Пауза"
          className="icon icon-pause"
          onClick={this.stopTimer}
        ></button>
        {min} мин : {sec} сек
      </span>
    )
  }
}
