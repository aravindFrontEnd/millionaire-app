import { useRef } from 'react'
import image from'../assets/kbc-logo.png';

export default function Start({ setUserName }) {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value)
  }

  return (
    <div className='start'>
      <img src={image} alt='logo' className='introLogo' />
      <input
        className='startInput'
        placeholder='enter your name'
        ref={inputRef}
      />
      <button className='startButton' onClick={handleClick}>
        Start
      </button>
    </div>
  )
}
