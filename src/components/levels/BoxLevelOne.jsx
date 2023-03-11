import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';

const BoxLevelOne = () => {

  const [enterLevel1, setEnterLevel1] = useState(false)

  const animateEnter = {
    transform: "rotateX(-70deg) rotateY(330deg)",
    transition: {
      duration: 1,
    }
  }

  return (
    <motion.div
			id="boxlevel"
			animate={enterLevel1 ? animateEnter : {}}
			onClick={() => {
				setEnterLevel1(!enterLevel1);
			}}
		>
			<div className="top"></div>
			<div>
				<span>
          <h2 className="leveltitle">1980</h2>
        </span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className="bottom"></div>
		</motion.div>
  )
}

export default BoxLevelOne