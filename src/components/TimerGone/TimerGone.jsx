import React, { useState, useEffect } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import PropTypes from 'prop-types'
const TimerGone = ({ date }) => {
  const [dateTime, setDate] = useState(formatDistanceToNowStrict(date, { addSuffix: true }))

  useEffect(() => {
    const updateInterval = 10000
    const timerID = setInterval(() => tick(), updateInterval)
    return () => clearInterval(timerID)
  })

  const tick = () => {
    setDate(formatDistanceToNowStrict(date, { addSuffix: true }))
  }

  return <span className="description">{dateTime}</span>
}

TimerGone.propTypes = {
  date: PropTypes.instanceOf(Date),
}
export default TimerGone
