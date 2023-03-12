import React, { useState } from 'react'
import QuestionItem from './QuestionItem'

const Question = ({ data, state }) => {

  const [completed, setCompleted] = useState(false)

  if (completed) data.completed = true;

  // const allCompleted = data.filter((question) => question.completed = true)

  return (
    <div className={ completed ? 'content__inbox completed' : 'content__inbox'}>
      <h2 className='content__title'>
        { data.question }
      </h2>
      <div className='content__img'>
        <img src={ data.image } alt='michael' />
      </div>
      <ul className='content__options'>
        {
          data.options.map((option, id) => {
            return (
              <QuestionItem 
                key={id}
                option={option} 
                completed={{setCompleted}}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

export default Question