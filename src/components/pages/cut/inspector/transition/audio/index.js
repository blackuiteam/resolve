
import React, { useState } from 'react';
import classNames from 'classnames';

import { ToggleTools } from '../../_toggle-tools';

// IMAGES
import AudioTransition from '../../img/transition/audio-transition.png';
import AudioCrossFade from '../../img/transition/audio-cross-fade.png';

function TransitionAudio() {

	const [ solid, setSolid ] = useState(false);
	const [ toggleComposite, setToggleComposite ] = useState(false);
	const [ composite, setComposite ] = useState(false);

	return (
		<>
			<div className="Row">
				<div className="LabelToggle" style={{"margin":"8px 0 0 0px"}}>Audio Transition</div>
				<ToggleTools className={classNames('ic-controls', solid ? "active" : "")} onClick={()=> setSolid(!solid)}/>
			</div>
			<img src={AudioTransition} alt="" width="294" style={{"margin":"5px 0 10px 15px"}} className={solid ? "none" : ""}/>

			{/* COMPOSITE */}
			<div className="Row header">
				<div onClick={()=> setToggleComposite(!toggleComposite)} className={classNames('Toggle', toggleComposite ? "active" : "")}/>
				<div className="LabelToggle">Cross Fade</div>
				<ToggleTools className={classNames('ic-controls', composite ? "active" : "")} onClick={()=> setComposite(!composite)}/>
			</div>
			<img src={AudioCrossFade} alt="" width="294" style={{"margin":"0px 0px 20px 15px"}} className={composite ? "none" : ""}/>
		</>
	)
}

export default TransitionAudio;
