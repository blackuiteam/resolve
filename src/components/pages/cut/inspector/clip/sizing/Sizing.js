
import React, { useState } from 'react';
import Slider from 'rc-slider';
import classNames from 'classnames';

// STYLES
import { ToggleTools } 	from '../../_toggle-tools';
import { RcSlider, Input } 	from '../../_slider';

// IMAGES
import Transform1 		from '../../img/sizing/transform-01.png';
import Transform2 		from '../../img/sizing/transform-02.png';
import CroppingContent 	from '../../img/sizing/cropping-content.png';
import CroppingContent2 from '../../img/sizing/cropping-content-02.png';
import CroppingContent3 from '../../img/sizing/cropping-content-03.png';
import Scalling 		from '../../img/sizing/scalling.png';
import kf1img 			from '../../img/sizing/kf-01.png';
import kf2img 			from '../../img/sizing/kf-02.png';

function Sizing() {

	const scallingTabs1 = [
		{ id: 0, label: 'Project' },
		{ id: 1, label: 'Crop' },
		{ id: 2, label: 'Fit' },
		{ id: 3, label: 'Fill' },
		{ id: 4, label: 'Stretch' },
	]

	const scallingTabs2 = [
		{ id: 0, label: 'None' },
		{ id: 1, label: '2x' },
		{ id: 2, label: '3x' },
		{ id: 3, label: '4x' }
	]

	const [ activeTab1, setTab1 ] = useState(0);
	const [ activeTab2, setTab2 ] = useState(0);

	const [ toggleTransform, setToggleTransform ] = useState(false);
	const [ toggleCropping, setToggleCropping ] = useState(false);
	const [ toggleScalling, setToggleScalling ] = useState(false);

	const [ transformContent, setTransformContent ] = useState(false);
	const [ transformSliders, setTransformSlider ] = useState(false);

	const [ croppingContent, setCroppingContent ] = useState(false);
	const [ croppingSliders, setCroppingSliders ] = useState(false);

	const [ scallingContent, setScallingContent ] = useState(false);

	const [ toggleKf1, setToggleKf1 ] = useState(false);
	const [ toggleKf2, setToggleKf2 ] = useState(false);

	const [ slider3, setSlider3 ] =  useState(50);
	const [ handleSlider3, setHandleSlider3 ] = useState(false);
	const [sld3, setSld3 ] = useState(false);
	function sliderFunc3(value) { setHandleSlider3(true); setSlider3(value); }
	function resetSlider3(value) { setHandleSlider3(false); setSlider3(50); }

	function resetCropping() {
		resetSlider3();
	}

	const [ slider4, setSlider4 ] =  useState(50);
	const [ handleSlider4, setHandleSlider4 ] = useState(false);
	const [sld4, setSld4 ] = useState(false);
	function sliderFunc4(value) { setHandleSlider4(true); setSlider4(value); }
	function resetSlider4(value) { setHandleSlider4(false); setSlider4(50); }

	const [ slider5, setSlider5 ] =  useState(50);
	const [ handleSlider5, setHandleSlider5 ] = useState(false);
	const [sld5, setSld5 ] = useState(false);
	function sliderFunc5(value) { setHandleSlider5(true); setSlider5(value); }
	function resetSlider5(value) { setHandleSlider5(false); setSlider5(50); }

	function resetScalling() {
		resetSlider4();
		resetSlider5();
		setTab1(0);
		setTab2(0);
	}

	return (
		<>
			{/* TRANSFORM */}
			<div className="Row">
				<div onClick={()=> setToggleTransform(!toggleTransform)} className={classNames('Toggle', toggleTransform ? "active" : "")}/>
				<div className="LabelToggle">Transform</div>
				<ToggleTools className="ic-reset"/>
				<ToggleTools className={classNames('ic-controls', transformSliders ? "active" : "")} onClick={()=> setTransformSlider(!transformSliders)}/>
				<ToggleTools className={classNames('ic-transform', transformContent ? "active" : "")} onClick={()=> setTransformContent(!transformContent)}/>
				<ToggleTools className={classNames('ic-kf', toggleKf1 ? "active" : "")} onClick={()=> setToggleKf1(!toggleKf1)}/>
			</div>
			<img src={kf1img} width="296" style={{"margin":"-1px 0px 9px 15px"}} className={toggleKf1 ? "" : "none"}/>
			<img src={Transform1} width="296" alt="" style={{"margin":"-1px 0px 11px 14px"}} className={transformContent ? "none" : ""}/>
			<img src={Transform2} width="294" alt="" style={{"margin":"0px 0px 9px 15px"}} className={transformSliders ? "none" : ""}/>


			{/* CROPPING */}
			<div className="Row header">
				<div onClick={()=> setToggleCropping(!toggleCropping)} className={classNames('Toggle', toggleCropping ? "active" : "")}/>
				<div className="LabelToggle">Cropping</div>
				<ToggleTools className="ic-reset" onClick={()=> resetCropping()}/>
				<ToggleTools className={classNames('ic-controls', croppingSliders ? "active" : "")} onClick={()=> setCroppingSliders(!croppingSliders)}/>
				<ToggleTools className={classNames('ic-crop', croppingContent ? "active" : "")} onClick={()=> setCroppingContent(!croppingContent)}/>
				<ToggleTools className={classNames('ic-kf', toggleKf2 ? "active" : "")} onClick={()=> setToggleKf2(!toggleKf2)}/>
			</div>
			<img src={kf2img} width="296" style={{"margin":"0px 0px 9px 14px"}} className={toggleKf2 ? "" : "none"}/>
			<img src={CroppingContent} width="296" alt="" style={{"margin":"0px 0px 14px 14px"}} className={croppingContent ? "none" : ""}/>

			<img src={CroppingContent2} width="294" alt="" style={{"margin":"0px 0px 0px 15px"}} className={croppingSliders ? "none" : ""}/>

			<div className={classNames("Row row-slider", croppingSliders ? "none" : "")} style={{"margin":"3px 0px 6px 0px"}}>
				<div className={classNames('InputLabel', sld3 ? "active" : "")} onDoubleClick={()=>resetSlider3()}>Softness</div>
				<RcSlider>
					<Input className="input" type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
					<Slider
						className={classNames('default', handleSlider3 === true ? 'active': '')}
						onChange={sliderFunc3}
						onBeforeChange={()=>setSld3(!sld3)}
						onAfterChange={()=>setSld3(!sld3)}
						startPoint={50}
						value={slider3}/>
				</RcSlider>
			</div>

			<img src={CroppingContent3} width="294" alt="" style={{"margin":"0px 0px 9px 15px"}} className={croppingSliders ? "none" : ""}/>

			{/* SCALING */}
			<div className="Row header">
				<div onClick={()=> setToggleScalling(!toggleScalling)} className={classNames('Toggle', toggleScalling ? "active" : "")}/>
				<div className="LabelToggle">Scaling</div>
				<ToggleTools className="ic-reset" onClick={()=> resetScalling()}/>
				<ToggleTools className={classNames('ic-controls', scallingContent ? "active" : "")} onClick={()=> setScallingContent(!scallingContent)}/>
			</div>

			<div className={scallingContent ? "none" : ""}>
				<div className="InspectorTabs" style={{"marginTop":"1px"}}>
					{scallingTabs1.map((item, i) => (
						<div key={i} className={classNames('btn-tab five', i === activeTab1 ? "active" : "")} onClick={()=> setTab1(i)}>{item.label}</div>
					))}
				</div>

				<img src={Scalling} width="294" style={{"margin":"9px 0px 4px 15px"}} alt=""/>

				<div className="InspectorTabs">
					{scallingTabs2.map((item, i) => (
						<div key={i} className={classNames('btn-tab four', i === activeTab2 ? "active" : "")} onClick={()=> setTab2(i)}>{item.label}</div>
					))}
				</div>

				<div className={classNames("Row row-slider")} style={{"margin":"3px 0px 3px 0px"}}>
					<div className={classNames('InputLabel', sld4 ? "active" : "")} onDoubleClick={()=> resetSlider4()}>Sharpness</div>
					<RcSlider className={classNames("", activeTab2 === 0 ? "opacity" : "", scallingContent ? "none" : "")}>
						<Input className="input" type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
						<Slider
						className={classNames('white', handleSlider4 === true ? 'active': '')}
						onChange={sliderFunc4}
						onBeforeChange={()=>setSld4(!sld4)}
						onAfterChange={()=>setSld4(!sld4)}
						startPoint={50}
						value={slider4}/>
					</RcSlider>
				</div>

				<div className={classNames("Row row-slider")} style={{"margin":"3px 0px 18px 0px"}}>
					<div className={classNames('InputLabel', sld5 ? "active" : "")} onDoubleClick={()=> resetSlider5()}>Noise Reduction</div>
					<RcSlider className={classNames("", activeTab2 === 0 ? "opacity" : "", scallingContent ? "none" : "")}>
						<Input className="input" type="text" value={slider5} min="0" max="100" onChange={(event) => setSlider5(event.target.value)}/>
						<Slider
						className={classNames('white', handleSlider5 === true ? 'active': '')}
						onChange={sliderFunc5}
						onBeforeChange={()=>setSld4(!sld5)}
						onAfterChange={()=>setSld4(!sld5)}
						startPoint={50}
						value={slider5}/>
					</RcSlider>
				</div>
			</div>
		</>
	)
}

export default Sizing;
