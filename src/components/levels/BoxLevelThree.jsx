import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';

const BoxLevelThree = () => {

  const [enterLevel3, setEnterLevel3] = useState(false)

  const animateEnter = {
    transform: "rotateX(-70deg) rotateY(330deg)",
    transition: {
      duration: 1,
    }
  }

  return (
    <motion.div
			id="boxlevel"
			animate={enterLevel3 ? animateEnter : {}}
			onClick={() => {
				setEnterLevel3(!enterLevel3);
			}}
		>
			<div className="top"></div>
			<div>
				<span>
          <h2 className="leveltitle">2000</h2>
        </span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="bottom"></div>
		</motion.div>
  )
}

export default BoxLevelThree