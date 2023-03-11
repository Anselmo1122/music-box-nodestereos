import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';

const BoxLevelTwo = () => {

  const [enterLevel2, setEnterLevel2] = useState(false)

  const animateEnter = {
    transform: "rotateX(-70deg) rotateY(330deg)",
    transition: {
      duration: 1,
    }
  }

  return (
    <motion.div
			id="boxlevel"
			animate={enterLevel2 ? animateEnter : {}}
			onClick={() => {
				setEnterLevel2(!enterLevel2);
			}}
		>
			<div className="top"></div>
			<div>
				<span>
          <h2 className="leveltitle">1990</h2>
        </span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="bottom"></div>
		</motion.div>
  )
}

export default BoxLevelTwo