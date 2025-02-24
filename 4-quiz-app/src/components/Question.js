import React from 'react'
import Option from './Option'
import { useQuiz } from '../contexts/QuizContext'

export default function Question() {
  const {questions,index} = useQuiz();
  return (
    <div>
        <h4>{questions[index].question}</h4>
        <Option/>
    </div>
  )
}
