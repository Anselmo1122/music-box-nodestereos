import React from "react";

import BoxLevelOne from './levels/BoxLevelOne';
import BoxLevelTwo from './levels/BoxLevelTwo';
import BoxLevelThree from './levels/BoxLevelThree';

import "../styles/boxLevels.css"

const BoxLevels = () => {

	return (
		<section id="boxlevels">
			<BoxLevelOne />
      <BoxLevelTwo />
      <BoxLevelThree />
		</section>
	);
};

export default BoxLevels;
