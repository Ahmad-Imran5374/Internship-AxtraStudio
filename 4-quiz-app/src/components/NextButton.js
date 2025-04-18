import React from 'react'
import { useQuiz } from '../contexts/QuizContext';

export default function NextButton() {
  const {dispatch,answer,index,numQuestion} = useQuiz();
    if(answer===null) return;
  if(index<numQuestion-1) return (
    <button className='btn btn-ui' onClick={()=>dispatch({type:"nextQuestion"})}>
      Next
    </button>
  )
  if(index===numQuestion-1) return (
    <button className='btn btn-ui' onClick={()=>dispatch({type:"finish"})}>
      Finish
    </button>
  )
}
