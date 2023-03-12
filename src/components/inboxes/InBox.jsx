import { motion } from 'framer-motion'
import Question from '../../components/inboxes/Question';

import React from 'react'

import '../../styles/inboxes.css'

import { questionsData1 } from '../../models/questionsData1.js';

const InBox = ({ state }) => {

  return(
    <section id='inbox-container'>
      <div id='inbox'>
        {
          questionsData1.map((data, id) => {
            return (
              <Question 
                data={data} 
                key={id}
                state={state}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default InBox