import React from 'react'
import Questions from './Questions'
const QuestionsList = ({questionsList}) => {
  return (
    <>{
        questionsList.map((questions) =>(
            <Questions question={questions} key={questions.id}/>
          ))
    }</>
  )
}

export default QuestionsList
