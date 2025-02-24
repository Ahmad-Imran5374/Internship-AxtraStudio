import React from 'react'
import { useQuiz } from '../contexts/QuizContext'

export default function Progress() {
  const {index,numQuestion,points,maxPoints,answer} = useQuiz()
  return (
    <header className='progress'>
      <progress max={numQuestion} value={index + Number(answer!==null)}></progress>
      <p>Question <strong>{index+1}</strong>/{numQuestion}</p>
    <p><strong>{points}</strong>/{maxPoints}</p>
    </header>
  )
}
