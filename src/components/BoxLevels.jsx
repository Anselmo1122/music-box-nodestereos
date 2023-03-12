import React, { useState } from "react";

import BoxLevelOne from './levels/BoxLevelOne';
import BoxLevelTwo from './levels/BoxLevelTwo';
import BoxLevelThree from './levels/BoxLevelThree';

import "../styles/boxLevels.css"
import InBox from "./inboxes/InBox";

const BoxLevels = () => {

	const [enterLevel1, setEnterLevel1] = useState({ state: false, id: 1, locked: false });
	const [enterLevel2, setEnterLevel2] = useState({ state: false, id: 2, locked: true });
	const [enterLevel3, setEnterLevel3] = useState({ state: false, id: 3, locked: true });

	const [enterLevel, setEnterLevel] = useState(false);

	const [levelPoints, setLevelPoints] = useState(0);
	const [level1Completed, setLevel1Completed] = useState(false)

	const exitLevel = (boolean) => {
		setEnterLevel1({ state: boolean, id: 1, locked: false });
		setEnterLevel2({ state: boolean, id: 2, locked: true });
		setEnterLevel3({ state: boolean, id: 3, locked: true });
	}

	const handleClick1 = () => {
		setEnterLevel1({ state: !enterLevel1.state, id: 1 });
		setEnterLevel(true);
	}
	const handleClick2 = () => {
		setEnterLevel2({ state: !enterLevel1.state, id: 2 });
		setEnterLevel(true);
	}
	const handleClick3 = () => {
		setEnterLevel3({ state: !enterLevel1.state, id: 3 });
		setEnterLevel(true);
	}

	let isLevel = null;

	if(enterLevel1.state) isLevel = enterLevel1.id;
	else if (enterLevel2.state) isLevel = enterLevel2.id; 
	else if (enterLevel3.state) isLevel = enterLevel3.id;

	return (
		<section id="levels">
			{ !enterLevel
				? (
					<div id="boxlevels">
						<BoxLevelOne state={ { handleClick1, enterLevel1 } } />
						<BoxLevelTwo state={ { handleClick2, enterLevel2 } } />
						<BoxLevelThree state={ { handleClick3, enterLevel3 } } />
						<BoxLevelThree state={ { handleClick3, enterLevel3 } } />
					</div>
				)
				: <InBox state={{ setEnterLevel, setLevelPoints, levelPoints, isLevel, exitLevel }}/> }
		</section>
	);
};

export default BoxLevels;
