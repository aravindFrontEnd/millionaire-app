import { useEffect, useState, useLayoutEffect } from 'react'
import useSound from 'use-sound'
import play from '../sounds/play.mp3'
import correct from '../sounds/correct.mp3'
import wrong from '../sounds/wrong.mp3'
import wait from '../sounds/wait.mp3'

function Trivia({ data, setStopWatch, setQuestionNumber, questionNumber }) {
  const [question, setQuestion] = useState(null)
  // choosing the selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  // adding active ClassName
  const [activeClass, setActiveClass] = useState('answer')

  // adding n new song at start
  const [letsPlay] = useSound(play, { volume: 0.35 })
  const [correctAnswer] = useSound(correct, { volume: 0.5 })
  const [wrongAnswer] = useSound(wrong, { volume: 0.5 })
  const [waitAnswer] = useSound(wait, { volume: 0.5 })

  useLayoutEffect(() => {
    letsPlay()
  }, [letsPlay])

  useEffect(() => {

    setQuestion(data[questionNumber - 1])
    waitAnswer()
  }, [data, questionNumber, waitAnswer])


  // reusing the setTimeout
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  const handleClick = (a) => {
    setSelectedAnswer(a)
    setActiveClass('answer active')

    // check the correct answe or not after 3 seconds
    //   setTimeout(() => {
    //     setActiveClass(a.correct ? 'answer correct' : 'answer wrong')
    //   }, 3000)
    // }

    delay(3000, () =>
      setActiveClass(a.correct ? 'answer correct' : 'answer wrong')
    )
    //  navigating to the next question / wrong answer handling function
    delay(5000, () => {
      if (a.correct) {
        correctAnswer()
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1)
          setSelectedAnswer(null)
        })
      } else {
        wrongAnswer()
        delay(1000, () => {
          setStopWatch(true)
        })
      }
    })
  }

  return (
    <div className='trivia'>
      <div className='qusetion'> {question?.question}</div>
      <div className='answers'>
        {question?.answers.map((a, index) => (
          <div
            className={selectedAnswer === a ? activeClass : 'answer'}
            onClick={() => handleClick(a)}
            key={index}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trivia
