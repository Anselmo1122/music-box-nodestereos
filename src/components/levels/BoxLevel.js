import React from 'react'
import { motion } from 'framer-motion';

const BoxLevel = ({ state }) => {

  const animateEnter = {
    transform: "rotateX(-70deg) rotateY(330deg)",
    transition: {
      duration: 1,
    }
  }

  return (
    <motion.div
			id="boxlevel"
			animate={ state.enterLevel1.state ? animateEnter : {} }
			onClick={ state.handleClick1 }
		>
			<div className="top"></div>
			<div className={ state.enterLevel1.locked ? "box__locked" : ""}>
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

export default BoxLevel