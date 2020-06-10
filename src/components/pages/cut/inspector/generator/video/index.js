
import React, { useState } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

import { ToggleTools } 	from '../../_toggle-tools';
import { RcSlider, Input } 	from '../../_slider';

// IMAGES
import DropdownNormal 	from '../../img/dropdown/dropdown-normal.png';
import Attributes 		from '../../img/generator/video/video-solid-color.png';

function GeneratorVideo() {

	const [ solid, setSolid ] = useState(false);
	const [ toggleComposite, setToggleComposite ] = useState(false);
	const [ composite, setComposite ] = useState(false);

	const [ slider, setSlider ] =  useState(50);
	const [ handleSlider, setHandleSlider ] = useState(false);
	function sliderFunc(value) {
		setHandleSlider(true);
		setSlider(value);
	}

	return (
		<>
			<div className="Row">
				<div className="LabelToggle" style={{"margin":"8px 0 0 0px"}}>Solid Color</div>
				<ToggleTools className={classNames('ic-controls', solid ? "active" : "")} onClick={()=> setSolid(!solid)}/>
			</div>
			<img src={Attributes} alt="" width="294" style={{"margin":"5px 0 8px 15px"}} className={solid ? "none" : ""}/>

			{/* COMPOSITE */}
			<div className="Row header">
				<div onClick={()=> setToggleComposite(!toggleComposite)} className={classNames('Toggle', toggleComposite ? "active" : "")}/>
				<div className="LabelToggle">Composite</div>
				<ToggleTools className={classNames('ic-controls', composite ? "active" : "")} onClick={()=> setComposite(!composite)}/>
			</div>
			<img src={DropdownNormal} alt="" width="294" style={{"margin":"0px 0px 3px 15px"}} className={composite ? "none" : ""}/>

			<RcSlider style={{"margin":"0px 0px 15px 0px"}} className={composite ? "none" : ""}>
				<div className="InputLabel">Opacity</div>
				<Input className="input" type="text" value={slider} min="0" max="100" onChange={(event) => setSlider(event.target.value)}/>
				<Slider onChange={sliderFunc} startPoint={100} value={slider} />
			</RcSlider>
		</>
	)
}

export default GeneratorVideo;
