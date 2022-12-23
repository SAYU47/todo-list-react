import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../Timer/Timer.css'
const Timer = ({ min, sec }) => {
  const [pause, setPause] = useState(true)
  const [[minutes, seconds], setTime] = useState([min, sec])

  const update = () => {
    if (pause) return
    if (minutes === 0 && seconds === 0) {
      setPause(false)
    } else if (seconds == 0) {
      setTime([minutes - 1, 59])
    } else {
      setTime([minutes, seconds - 1])
    }
  }
  useEffect(() => {
    const interval = setInterval(() => update(), 1000)
    return () => clearInterval(interval)
  })

  return (
    <span className="description">
      <button
        type="button"
        aria-label="Запустить таймер"
        title="запустить таймер"
        className="icon icon-play"
        onClick={() => setPause(false)}
      ></button>
      <button
        type="button"
        title="Пауза"
        aria-label="Пауза"
        className="icon icon-pause"
        onClick={() => setPause(true)}
      ></button>
      {minutes} мин : {seconds} сек
    </span>
  )
}

Timer.defaultProps = {
  update: () => {},
  startTimer: () => {},
  stopTimer: () => {},
}
Timer.propTypes = {
  min: PropTypes.number,
  sec: PropTypes.number,
  active: PropTypes.bool,
  update: PropTypes.func,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
}
export default Timer
