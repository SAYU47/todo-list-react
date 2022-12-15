import React from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import PropTypes from 'prop-types'
export default class TimerGone extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
  }
  state = {
    date: formatDistanceToNowStrict(this.props.date, {
      addSuffix: true,
    }),
  }

  componentDidMount() {
    const updateInterval = 10000
    this.timerID = setInterval(() => this.tick(), updateInterval)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    const date = this.props.date
    this.setState({
      date: formatDistanceToNowStrict(date, {
        addSuffix: true,
      }),
    })
  }

  render() {
    const { date } = this.state
    return <span className="description">{date}</span>
  }
}
