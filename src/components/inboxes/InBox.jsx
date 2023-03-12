import React from 'react'
import '../../styles/quiz.css'
import Quiz from './Quiz'

const InBox = ({ state }) => {
  return(
    <section id='inbox-container'>
      <div id='inbox'>
        <Quiz state={ state } />
      </div>
    </section>
  )
}

export default InBox