import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png"

import React from "react";

import '../styles/boxEnter.css';

const BoxEnter = ({ open }) => {
	const [enter, setEnter] = useState(false);

	const animateEnter = {
		transform: "rotateX(-80deg) rotateY(340deg)",
		transition: {
			duration: 1,
		},
	};

  const handleClick = () => {
    setEnter(!enter);
    setTimeout(() => {
      open();
    }, 4000);
  }

	return (
		<motion.div
			id="box"
			animate={ enter ? animateEnter : {} }
      transition={{ duration: 1 }}
			onClick={ () => handleClick() }
		>
			<div className="top">
				<div className={ enter ? "top-1 open" : "top-1"  }></div>
				<div className={ enter ? "top-2 open" : "top-2"  }></div>
			</div>
			<div>
				<span><h1 className="box__title">Music Box</h1></span>
				<span className="box__logo">
					<img 
						src={logo} 
						alt="logo"
						className="logo"
						style={{
							filter: "drop-shadow(-10px -5px 5px rgba(0, 0, 0, 0.427))"
						}}
					/>
				</span>
				<span></span>
				<span></span>
			</div>
			<div className="bottom"></div>
		</motion.div>
	);
};

export default BoxEnter;

// ------ Jump Box
// animate={{
//   transform: [
//     "rotateX(-30deg) rotateY(330deg) translateY(0px)",
//     "rotateX(-35deg) rotateY(330deg) translateY(20px)",
//     "rotateX(-40deg) rotateY(330deg) translateY(-40px)",
//     "rotateX(-35deg) rotateY(330deg) translateY(-80px)",
//     "rotateX(-30deg) rotateY(330deg) translateY(0px)",
//   ],
// }}

// ------ Transition for Jump Box
// transition={{
  // duration: 1,
  // ease: "easeInOut",
  // times: [0.2, 0.3, 0.5, 0.5, 1],
  // repeat: Infinity,
// }}