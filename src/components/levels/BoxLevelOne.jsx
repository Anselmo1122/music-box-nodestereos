import React from 'react'
import { motion } from 'framer-motion';

const BoxLevelOne = ({ click }) => {

  const animateEnter = {
    transform: "rotateX(-70deg) rotateY(330deg)",
    transition: {
      duration: 1,
    }
  }

  return (
    <motion.div
			id="boxlevel"
			animate={ click.enterLevel1 ? animateEnter : {} }
			onClick={ click.handleClick }
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