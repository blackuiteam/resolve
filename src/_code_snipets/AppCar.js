import React, { useState } from 'react';
import MenuCar from './MenuCar';
import ContentCar from './ContentCar';

function App() {
	const menu = [
		{ label: 'Clip', content: 'Clip Content' },
		{ label: 'Generator', content: 'Generator Content' },
		{ label: 'Transitions', content: 'Transitions Content' },
		{ label: 'Text', content: 'Text Content' },
	]

	const [ activeIndex, setActiveIndex ] = useState(0);

	function inspecClip() 	{ setActiveIndex(0); }
	function inspecGen() 	{ setActiveIndex(1); }
	function inspecTrans() 	{ setActiveIndex(2); }
	function inspecText() 	{ setActiveIndex(3); }

	return (
		<div>
			<h4>Menu</h4>
			<MenuCar comps={menu} myFunc={[inspecClip, inspecGen, inspecTrans, inspecText]}/>

			<hr/>

			<h4>Content</h4>
			<ContentCar comps={activeIndex}/>
		</div>
	);
}

export default App;
