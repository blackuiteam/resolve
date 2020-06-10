
import React, { useState } from 'react';
import classNames from 'classnames';

import { ToggleTools } from '../../_toggle-tools';

// IMAGES
import VideoTransition from '../../img/transition/video-transition.png';
import VideoComposite from '../../img/transition/video-composite.png';

function TransitionVideo() {

	const [ solid, setSolid ] = useState(false);
	const [ toggleComposite, setToggleComposite ] = useState(false);
	const [ composite, setComposite ] = useState(false);

	return (
		<>
			<div className="Row">
				<div className="LabelToggle" style={{"margin":"8px 0 0 0px"}}>Video Transition</div>
				<ToggleTools className={classNames('ic-controls', solid ? "active" : "")} onClick={()=> setSolid(!solid)}/>
			</div>
			<img src={VideoTransition} alt="" width="294" style={{"margin":"5px 0 10px 15px"}} className={solid ? "none" : ""}/>

			{/* COMPOSITE */}
			<div className="Row header">
				<div onClick={()=> setToggleComposite(!toggleComposite)} className={classNames('Toggle', toggleComposite ? "active" : "")}/>
				<div className="LabelToggle">Composite</div>
				<ToggleTools className={classNames('ic-controls', composite ? "active" : "")} onClick={()=> setComposite(!composite)}/>
			</div>
			<img src={VideoComposite} alt="" width="296" style={{"margin":"0px 0px 20px 15px"}} className={composite ? "none" : ""}/>
		</>
	)
}

export default TransitionVideo;
