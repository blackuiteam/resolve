
import React, { useState } from 'react';
import classNames from 'classnames';

import { ToggleTools } from '../../_toggle-tools';

// IMAGES
import Transform1 	from '../../img/generator/sizing/transform-01.png';
import Transform2 	from '../../img/generator/sizing/transform-02.png';
import Cropping1 	from '../../img/generator/sizing/cropping-01.png';
import Cropping2 	from '../../img/generator/sizing/cropping-02.png';


function GeneratorSizing() {

	const [ toggleTransform, setToggleTransform ] = useState(false);
	const [ toggleCropping, setToggleCropping ] = useState(false);
	const [ toggleDyn, setToggleDyn ] = useState(true);

	const [ transformContent, setTransformContent ] = useState(false);
	const [ transformSliders, setTransformSlider ] = useState(false);

	const [ croppingContent, setCroppingContent ] = useState(false);
	const [ croppingSliders, setCroppingSliders ] = useState(false);

	const [ slider, setSlider ] =  useState(20);
	function sliderFunc(value) { setSlider(value); }

	const [ slider2, setSlider2 ] =  useState(80);
	function sliderFunc2(value) { setSlider2(value); }

	const [ slider3, setSlider3 ] =  useState(20);
	function sliderFunc3(value) { setSlider3(value); }

	return (
		<>
			{/* TRANSFORM */}
			<div className="Row">
				<div onClick={()=> setToggleTransform(!toggleTransform)} className={classNames('Toggle', toggleTransform ? "active" : "")}/>
				<div className="LabelToggle">Transform</div>
				<ToggleTools className={classNames('ic-controls', transformSliders ? "active" : "")} onClick={()=> setTransformSlider(!transformSliders)}/>
				<ToggleTools className={classNames('ic-transform', transformContent ? "active" : "")} onClick={()=> setTransformContent(!transformContent)}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img src={Transform1} width="296" alt="" style={{"margin":"-1px 0px 11px 15px"}} className={transformContent ? "none" : ""}/>
			<img src={Transform2} width="294" alt="" style={{"margin":"0px 0px 9px 15px"}} className={transformSliders ? "none" : ""}/>

			{/* CROPPING */}
			<div className="Row header">
				<div onClick={()=> setToggleCropping(!toggleCropping)} className={classNames('Toggle', toggleCropping ? "active" : "")}/>
				<div className="LabelToggle">Cropping</div>
				<ToggleTools className={classNames('ic-controls', croppingSliders ? "active" : "")} onClick={()=> setCroppingSliders(!croppingSliders)}/>
				<ToggleTools className={classNames('ic-crop', croppingContent ? "active" : "")} onClick={()=> setCroppingContent(!croppingContent)}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img src={Cropping1} width="296" alt="" style={{"margin":"0px 0px 14px 14px"}} className={croppingContent ? "none" : ""}/>
			<img src={Cropping2} width="294" alt="" style={{"margin":"1px 0px 8px 15px"}} className={croppingSliders ? "none" : ""}/>

			{/* DYNAMIC ZOOM */}
			<div className="Row header">
				<div onClick={()=> setToggleDyn(!toggleDyn)} className={classNames('Toggle', toggleDyn ? "active" : "")}/>
				<div className="LabelToggle">Dynamic Zoom</div>
				<ToggleTools className={classNames('ic-controls', croppingSliders ? "active" : "")} onClick={()=> setCroppingSliders(!croppingSliders)}/>
				<ToggleTools className={classNames('ic-dynamic', croppingContent ? "active" : "")} onClick={()=> setCroppingContent(!croppingContent)}/>
			</div>
		</>
	)
}

export default GeneratorSizing;
