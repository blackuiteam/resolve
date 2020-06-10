
import React, { useState } from 'react';
import classNames from 'classnames';

function AudioMeterComp() {

	const scale = [
		{ label: '0 -' },
		{ label: '-5 -' },
		{ label: '-10 -' },
		{ label: '-15 -' },
		{ label: '-20 -' },
		{ label: '-30 -' },
		{ label: '-40 -' },
		{ label: '-50 -' },
	];

	const [ toggleMute, setMute ] = useState(false);

	return (
		<>
		<div className="AudioMeter">
			<div className={classNames('toggle-mute', toggleMute ? 'active':'')} onClick={()=> setMute(!toggleMute)}></div>
			<div className="scale">
				{scale.map((number, i)=> (<div>{number.label}</div>))}
			</div>
			<div className="meter"></div>
			<div className="resizeHandle"></div>
		</div>
		</>
	)
}

export default AudioMeterComp;
