import React, { useState } from "react";

import BoxLevelOne from './levels/BoxLevelOne';
import BoxLevelTwo from './levels/BoxLevelTwo';
import BoxLevelThree from './levels/BoxLevelThree';

import "../styles/boxLevels.css"
import InBox from "./inboxes/InBox";

const BoxLevels = () => {

	const [enterLevel1, setEnterLevel1] = useState(false)
	const [allCompleted, setAllCompleted] = useState(false)

	const handleClick = () => {
		setEnterLevel1(!enterLevel1);
	}

	return (
		<section id="levels">
			{ !enterLevel1 
				? (
					<div id="boxlevels">
						<BoxLevelOne click={ { handleClick, enterLevel1 } } />
						<BoxLevelTwo />
						<BoxLevelThree />
					</div>
				)
				: <InBox state={{ setAllCompleted }} /> }
		</section>
	);
};

export default BoxLevels;
