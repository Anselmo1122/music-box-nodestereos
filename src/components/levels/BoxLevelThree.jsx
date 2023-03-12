import React from 'react'
import { motion } from 'framer-motion';

const BoxLevelThree = ({ state }) => {

  const animateEnter = {
    transform: "rotateX(-70deg) rotateY(330deg)",
    transition: {
      duration: 1,
    }
  }

  return (
    <motion.div
			id="boxlevel"
			animate={ state.enterLevel3.state ? animateEnter : {}}
			onClick={ state.handleClick3 }
		>
			<div className="top"></div>
			<div className={ state.enterLevel3.locked ? "box__locked" : ""}>
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