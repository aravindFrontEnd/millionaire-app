import React, { useEffect, useMemo } from 'react'
import './App.css'
import Trivia from './components/Trivia'
import { useState } from 'react'
import useWindowSize from './components/useWindowSize'
import Confetti from 'react-confetti'
import Timer from './components/Timer'
import Start from './components/Start'


function App() {


  const [userName,setUserName] = useState(null);

  const [questionNumber, setQuestionNumber] = useState(1)

  const [stopWatch, setStopWatch] = useState(false)

  // decide earned money
  const [earned, setEarned] = useState('₹ 0')

  const data = [
    {
      id: 1,
      question: 'Which crop is sown on the largest area in India?',
      answers: [
        {
          text: ' Rice',
          correct: true,
        },
        {
          text: 'Wheat',
          correct: false,
        },
        {
          text: 'Sugarcane',
          correct: false,
        },
        {
          text: 'Maize',
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: 'When did the website `Facebook` launch?',
      answers: [
        {
          text: '2004',
          correct: true,
        },
        {
          text: '2005',
          correct: false,
        },
        {
          text: '2006',
          correct: false,
        },
        {
          text: '2007',
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: 'Entomology is the science that studies?',
      answers: [
        {
          text: ' Behaviour of human beings',
          correct: false,
        },
        {
          text: ' Insects',
          correct: true,
        },
        {
          text: 'The origin and history of technical and scientific terms',
          correct: false,
        },
        {
          text: 'The formation of rocks',
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: 'Grand Central Terminal, Park Avenue, New York is the world?',
      answers: [
        {
          text: 'highest railway station',
          correct: false,
        },
        {
          text: 'longest railway station',
          correct: true,
        },
        {
          text: 'largest railway station',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: 'Galileo was an astronomer who?',
      answers: [
        {
          text: 'developed the telescope',
          correct: false,
        },
        {
          text: 'discovered four satellites of Jupiter',
          correct: true,
        },
        {
          text: ' discovered that the movement of pendulum produces a regular time measurement',
          correct: false,
        },
        {
          text: 'All the above.',
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question:
        'Corey Anderson who has hit the fastest ODI century in 36 balls is from?',
      answers: [
        {
          text: 'England',
          correct: false,
        },
        {
          text: ' Australia',
          correct: false,
        },
        {
          text: ' West Indies',
          correct: false,
        },
        {
          text: 'New Zealand',
          correct: true,
        },
      ],
    },

    {
      id: 8,
      question: 'Who among the following were contemporaries of Kanishka?',
      answers: [
        {
          text: 'Kamban, Banabhatta, Asvagosha',
          correct: false,
        },
        {
          text: 'Nagarjuna, Asvagosha, Vasumitra',
          correct: true,
        },
        {
          text: 'Asvagosha, Kalidasa, Banabhatta',
          correct: false,
        },
        {
          text: 'Kalidasa, Kamban, Vasumitra',
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: 'The world smallest country is?',
      answers: [
        {
          text: 'Canada',
          correct: false,
        },
        {
          text: 'Russia',
          correct: false,
        },
        {
          text: 'Maldives',
          correct: false,
        },
        {
          text: 'Vatican City',
          correct: true,
        },
      ],
    },

    {
      id: 10,
      question:
        'Novak Djokovic is a famous player associated with the game of?',
      answers: [
        {
          text: ' Hockey',
          correct: false,
        },
        {
          text: 'Football',
          correct: false,
        },
        {
          text: 'Chess',
          correct: false,
        },
        {
          text: 'Lawn Tennis',
          correct: true,
        },
      ],
    },

    {
      id: 11,
      question:
        'Which one of the following was the first fort constructed by the British in India?',
      answers: [
        {
          text: 'Fort William',
          correct: false,
        },
        {
          text: 'Fort St. George',
          correct: true,
        },
        {
          text: 'Fort St. David',
          correct: false,
        },
        {
          text: 'Fort St. Angelo',
          correct: false,
        },
      ],
    },

    {
      id: 2,
      question: 'Ball pen function on which one of the following principal?',
      answers: [
        {
          text: 'Boyle’s law',
          correct: false,
        },
        {
          text: 'Gravitational force',
          correct: false,
        },
        {
          text: ' Surface tension',
          correct: true,
        },
        {
          text: ' Viscosity',
          correct: false,
        },
      ],
    },

    {
      id: 3,
      question:
        'Global 500 awards are given for the outstanding achievement in which of the following fields?',
      answers: [
        {
          text: 'Elimination of illiteracy',
          correct: false,
        },
        {
          text: 'Protection of environment',
          correct: true,
        },
        {
          text: 'campaign against drugs',
          correct: false,
        },
        {
          text: 'Population Control',
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: ' UNIVAC is',
      answers: [
        {
          text: ' Universal Automatic Computer',
          correct: true,
        },
        {
          text: 'Universal Array Computer',
          correct: false,
        },
        {
          text: 'Unique Automatic Computer',
          correct: false,
        },
        {
          text: 'Unvalued Automatic Computer',
          correct: false,
        },
      ],
    },

    {
      id: 15,
      question:
        'The International Day for the Elimination of Racial Discrimination is observed on which date?',
      answers: [
        {
          text: 'June 8',
          correct: false,
        },
        {
          text: 'March 21',
          correct: true,
        },
        {
          text: 'May 11',
          correct: false,
        },
        {
          text: 'April 23',
          correct: true,
        },
      ],
    },
  ]

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: '₹ 1,000' },
        { id: 2, amount: '₹ 2,000' },
        { id: 3, amount: '₹ 3,000' },
        { id: 4, amount: '₹ 5,000' },
        { id: 5, amount: '₹ 10,000' },
        { id: 6, amount: '₹ 20,000' },
        { id: 7, amount: '₹ 40,000' },
        { id: 8, amount: '₹ 80,000' },
        { id: 9, amount: '₹ 1,60,000' },
        { id: 10, amount: '₹ 3,20,000' },
        { id: 11, amount: '₹ 6,40,000' },
        { id: 12, amount: '₹ 12,50,000' },
        { id: 13, amount: '₹ 25,00,000' },
        { id: 14, amount: '₹ 50,00,000' },
        { id: 15, amount: '₹ 1 Crore' },
      ].reverse(),
    []
  )


const { width, height } = useWindowSize();





  // change amount based on qusetion number except the first one
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [questionNumber, moneyPyramid])

  return (
    <div className='app'>
      {/* left side */}
      {!userName ? (
        <Start setUserName={setUserName} />
      ) : (
        <>
          <div className='main'>
            {stopWatch ? (
              <>
                <h1 className='messageText'>
                  You earned : {earned} {userName.toUpperCase()}
                </h1>
                <Confetti width={width} height={height} />
                </>
            ) : (
              <>
                <div className='top'>
                  <div className='timer'>
                    <Timer
                      setStopWatch={setStopWatch}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className='bottom'>
                  <Trivia
                    data={data}
                    setStopWatch={setStopWatch}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>

          {/* right side pyramid */}
          <div className='pyramid'>
            <ul className='moneyList'>
              {/* looping over the list */}
              {moneyPyramid.map((m, index) => (
                <li
                  className={
                    questionNumber === m.id
                      ? 'moneyListItem  active'
                      : 'moneyListItem'
                  }
                  key={index}
                >
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default App
