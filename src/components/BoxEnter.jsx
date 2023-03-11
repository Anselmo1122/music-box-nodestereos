import { motion } from 'framer-motion'
import { useState } from 'react'

import React from 'react'

const BoxEnter = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [enter, setEnter] = useState(false)

  const animateEnter = {
    transform: "rotateX(-70deg) rotateY(330deg)",
    transition: {
      duration: 1,
    }
  }

  return(
    <>
      {
        !isOpen ? (
          <motion.div 
            id="box"
            animate={ enter ? animateEnter : {} }
            onClick={() => { 
              setEnter(!enter) 
              setTimeout(() => {
                setIsOpen(!isOpen);
              }, 3000)
            }}
          >
            <div className='top'></div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className='bottom'></div>
          </motion.div>
        ) : ""
      }
    </>
  )
}

export default BoxEnter