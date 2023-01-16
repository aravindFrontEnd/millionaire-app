import { useEffect, useState } from 'react'

const Timer = ({ setStopWatch, questionNumber }) => {
  const [timer, setTimer] = useState(30)

  useEffect(() => {
    if (timer === 0) return setStopWatch(true)

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)


    return ()=>{
      clearInterval(interval)
    }
  }, [setStopWatch, timer])

  // if navigated to next question number
  useEffect(() => {
    setTimer(3000)
  }, [questionNumber])

  return timer
}

export default Timer
