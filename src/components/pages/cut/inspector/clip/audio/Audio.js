
import React, { useState } from 'react';
import Slider from 'rc-slider';

// STYLES
import classNames from 'classnames';
import { ToggleTools } 	from '../../_toggle-tools';
import { RcSlider, Input } 	from '../../_slider';

// IMAGES
import EmbeddedImg 	from '../../img/audio/embedded-content.png';
import Eq1Img 		from '../../img/audio/eq-content-01.png';
import Eq2Img 		from '../../img/audio/eq-content-02.png';

function Audio() {

	// EMBEDDED
	const [ toggleAudio, setToggleAudio ] = useState(false);
	const [ contentAudio, setContentAudio ] = useState(false);
	const [ slidersAudio, setSlidersAudio] = useState(false);

	const [ slider1, setSlider1 ] =  useState(100);
	const [ handleSlider1, setHandleSlider1 ] = useState(false);
	const [sld1, setSld1 ] = useState(false);
	function sliderFunc1(value) { setHandleSlider1(true); setSlider1(value); }
	function resetSlider1(value) { setHandleSlider1(false); setSlider1(100); }

	const [ slider2, setSlider2 ] =  useState(50);
	const [ handleSlider2, setHandleSlider2 ] = useState(false);
	const [sld2, setSld2 ] = useState(false);
	function sliderFunc2(value) { setHandleSlider2(true); setSlider2(value); }
	function resetSlider2(value) { setHandleSlider2(false); setSlider2(50); }

	const [ slider3, setSlider3 ] =  useState(50);
	const [ handleSlider3, setHandleSlider3 ] = useState(false);
	const [sld3, setSld3 ] = useState(false);
	function sliderFunc3(value) { setHandleSlider3(true); setSlider3(value); }
	function resetSlider3(value) { setHandleSlider3(false); setSlider3(50); }

	function resetEmbedded() {
		resetSlider1();
		resetSlider2();
	}

	// AUDIO DUCK
	const [ toggleAudioDuck, setToggleAudioDuck ] = useState(false);
	const tabsAutoDuck1 = [
		{ id: 0, label: 'Dialogue' },
		{ id: 1, label: 'Music' },
		{ id: 2, label: 'Effect' },
	]

	const tabsAutoDuck2 = [
		{ id: 0, label: 'Fast' },
		{ id: 1, label: 'Medium' },
		{ id: 2, label: 'Slow' },
	]

	const [ activeTab1, setTab1 ] = useState(0);
	const [ activeTab2, setTab2 ] = useState(0);

	const [ toggleKf1, setToggleKf1 ] = useState(false);
	const [ toggleKf2, setToggleKf2 ] = useState(false);

	const [ contentAudioDuck, setContentAudioDuck ] = useState(false);

	const [ slider4, setSlider4 ] =  useState(50);
	const [ handleSlider4, setHandleSlider4 ] = useState(false);
	const [sld4, setSld4 ] = useState(false);
	function sliderFunc4(value) { setHandleSlider4(true); setSlider4(value);}
	function resetSlider4(value) { setHandleSlider4(false); setSlider4(50); }

	const [ slider5, setSlider5 ] =  useState(50);
	const [ handleSlider5, setHandleSlider5 ] = useState(false);
	const [sld5, setSld5 ] = useState(false);
	function sliderFunc5(value) { setHandleSlider5(true); setSlider5(value); }
	function resetSlider5(value) { setHandleSlider5(false); setSlider5(50); }

	function resetAudioDuck() {
		resetSlider4();
		resetSlider5();
	}


	// PITCH
	const [ togglePitch, setTogglePitch ] = useState(false);
	const [ contentPitch, setContentPitch ] = useState(false);

	const [ slider7, setSlider7 ] =  useState(50);
	const [ handleSlider7, setHandleSlider7 ] = useState(false);
	const [sld7, setSld7 ] = useState(false);
	function sliderFunc7(value) { setHandleSlider7(true); setSlider7(value); }
	function resetSlider7(value) { setHandleSlider7(false); setSlider7(50); }

	const [ slider8, setSlider8 ] =  useState(50);
	const [ handleSlider8, setHandleSlider8 ] = useState(false);
	const [sld8, setSld8 ] = useState(false);
	function sliderFunc8(value) { setHandleSlider8(true); setSlider8(value); }
	function resetSlider8(value) { setHandleSlider8(false); setSlider8(50); }

	function resetPitch() {
		resetSlider7();
		resetSlider8();
	}

	// EQUALIZER
	const [ toggleEq, setToggleEq ] = useState(false);
	const [ contentEq, setContentEq ] = useState(false);
	const [ eqSliders, setEqSliders ] = useState(false);

	const [ slider6, setSlider6 ] =  useState(50);
	const [ handleSlider6, setHandleSlider6 ] = useState(false);
	const [sld6, setSld6 ] = useState(false);
	function sliderFunc6(value) { setHandleSlider6(true); setSlider6(value); }
	function resetSlider6(value) { setHandleSlider6(false); setSlider6(50); }

	function resetEq() {
		resetSlider6();
	}

	return (
		<>
			{/* EMBEDDED */}
			<div className="Row">
				<div onClick={()=> setToggleAudio(!toggleAudio)} className={classNames('Toggle', toggleAudio ? "active" : "")}/>
				<div className="LabelToggle">Embedded Audio - Stereo</div>
				<ToggleTools className="ic-reset" onClick={()=> resetEmbedded()}/>
				<ToggleTools className={classNames('ic-controls', slidersAudio ? "active" : "")} onClick={()=> setSlidersAudio(!slidersAudio)}/>
				<ToggleTools className={classNames('ic-audio', contentAudio ? "active" : "")} onClick={()=> setContentAudio(!contentAudio)}/>
				<ToggleTools className={classNames('ic-kf', toggleKf1 ? "active" : "")} onClick={()=> setToggleKf1(!toggleKf1)}/>
			</div>

			<div className={classNames("Row row-slider", slidersAudio ? "none" : "")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld1 ? "active" : "")} onDoubleClick={()=>resetSlider1()}>Gain</div>
				<RcSlider>
					<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
					<Slider
						className={classNames('white', handleSlider1 === true ? 'active': '')}
						onChange={sliderFunc1}
						onBeforeChange={()=>setSld1(!sld1)}
						onAfterChange={()=>setSld1(!sld1)}
						value={slider1}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider", slidersAudio ? "none" : "")} style={{"marginBottom": "10px"}}>
				<div className={classNames('InputLabel', sld2 ? "active" : "")} onDoubleClick={()=>resetSlider2()}>Pan</div>
				<RcSlider>
					<Input className="input" type="text" value={slider2} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
					<Slider
						className={classNames('white', handleSlider2 === true ? 'active': '')}
						onChange={sliderFunc2}
						onBeforeChange={()=>setSld2(!sld2)}
						onAfterChange={()=>setSld2(!sld2)}
						value={slider2}/>
				</RcSlider>
			</div>

			<img src={EmbeddedImg} width="294" alt="" style={{"margin":"0px 0px 9px 12px"}} className={contentAudio ? "none" : ""}/>

			{/* AUTO DUCK */}
			<div className="Row header">
				<div onClick={()=> setToggleAudioDuck(!toggleAudioDuck)} className={classNames('Toggle', toggleAudioDuck ? "active" : "")}/>
				<div className="LabelToggle">Auto Duck</div>
				<ToggleTools className="ic-reset" onClick={()=> resetAudioDuck()}/>
				<ToggleTools className={classNames('ic-controls', contentAudioDuck ? "active" : "")} onClick={()=> setContentAudioDuck(!contentAudioDuck)}/>
			</div>

			<div className={contentAudioDuck ? "none" : ""}>
				<div className="InspectorTabs" style={{"margin":"4px 24px 6px 15px"}}>
					{tabsAutoDuck1.map((tab, i)=> (
						<div key={i} className={classNames('btn-tab three', i === activeTab1 ? "active" : "")} onClick={()=> setTab1(i)}>{tab.label}</div>
					))}
				</div>

				<div className={classNames("Row row-slider", contentAudioDuck ? "none" : "")} style={{"marginBottom": "3px"}}>
					<div className={classNames('InputLabel', sld4 ? "active" : "")} onDoubleClick={()=>resetSlider4()}>Treshold Sensitivity</div>
					<RcSlider>
						<Input className="input" type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
						<Slider
							className={classNames('white', handleSlider4 === true ? 'active': '')}
							onChange={sliderFunc4}
							onBeforeChange={()=>setSld4(!sld4)}
							onAfterChange={()=>setSld4(!sld4)}
							value={slider4}/>
					</RcSlider>
				</div>

				<div className={classNames("Row row-slider", contentAudioDuck ? "none" : "")} style={{"margin": "0px"}}>
					<div className={classNames('InputLabel', sld5 ? "active" : "")} onDoubleClick={()=>resetSlider5()}>Amount</div>
					<RcSlider>
						<Input className="input" type="text" value={slider5} min="0" max="100" onChange={(event) => setSlider5(event.target.value)}/>
						<Slider
							className={classNames('white', handleSlider4 === true ? 'active': '')}
							onChange={sliderFunc5}
							onBeforeChange={()=>setSld5(!sld5)}
							onAfterChange={()=>setSld5(!sld5)}
							value={slider5}/>
					</RcSlider>
				</div>

				<div className="Row mini-title" style={{"margin":"0px 0px 3px 0px"}}>Reaction Time</div>

				<div className="InspectorTabs" style={{"margin":"0px 24px 9px 15px"}}>
					{tabsAutoDuck2.map((tab, i)=> (
						<div key={i} className={classNames('btn-tab three', i === activeTab2 ? "active" : "")} onClick={()=> setTab2(i)}>{tab.label}</div>
					))}
				</div>
			</div>

			{/* PITCH */}
			<div className="Row header">
				<div onClick={()=> setTogglePitch(!togglePitch)} className={classNames('Toggle', togglePitch ? "active" : "")}/>
				<div className="LabelToggle">Pitch</div>
				<ToggleTools className="ic-reset" onClick={()=> resetPitch()}/>
				<ToggleTools className={classNames('ic-controls', contentPitch ? "active" : "")} onClick={()=> setContentPitch(!contentPitch)}/>
				<ToggleTools className={classNames('ic-kf', toggleKf2 ? "active" : "")} onClick={()=> setToggleKf2(!toggleKf2)}/>
			</div>

			<div className={contentPitch ? "none" : ""}>
				<div className={classNames("Row row-slider")} style={{"margin":"1px 0px 3px 0px"}}>
					<div className={classNames('InputLabel', sld7 ? "active" : "")} onDoubleClick={()=>resetSlider7()}>Semi Tones</div>
					<RcSlider>
						<Input className="input" type="text" value={slider7} min="0" max="100" onChange={(event) => setSlider7(event.target.value)}/>
						<Slider
							className={classNames('white', handleSlider7 === true ? 'active': '')}
							onChange={sliderFunc7}
							onBeforeChange={()=>setSld7(!sld7)}
							onAfterChange={()=>setSld7(!sld7)}
							value={slider7}/>
					</RcSlider>
				</div>

				<div className={classNames("Row row-slider")} style={{"margin":"0px 0px 9px 0px"}}>
					<div className={classNames('InputLabel', sld8 ? "active" : "")} onDoubleClick={()=>resetSlider8()}>Cents</div>
					<RcSlider>
						<Input className="input" type="text" value={slider8} min="0" max="100" onChange={(event) => setSlider8(event.target.value)}/>
						<Slider
							className={classNames('white', handleSlider8 === true ? 'active': '')}
							onChange={sliderFunc8}
							onBeforeChange={()=>setSld8(!sld8)}
							onAfterChange={()=>setSld8(!sld8)}
							value={slider8}/>
					</RcSlider>
				</div>
			</div>

			{/* EQUALIZER */}
			<div className="Row header">
				<div onClick={()=> setToggleEq(!toggleEq)} className={classNames('Toggle', toggleEq ? "active" : "")}/>
				<div className="LabelToggle">Equalizer</div>
				<ToggleTools className="ic-reset" onClick={()=> resetEq()}/>
				<ToggleTools className={classNames('ic-controls', eqSliders ? "active" : "")} onClick={()=> setEqSliders(!eqSliders)}/>
				<ToggleTools className={classNames('ic-eq', contentEq ? "active" : "")} onClick={()=> setContentEq(!contentEq)}/>
			</div>

			<img src={Eq1Img} width="294" alt="" style={eqSliders ? {"margin":"1px 0px 20px 15px"} : {"margin":"1px 0px 3px 15px"}} className={contentEq ? "none" : ""}/>
			<div className={classNames("Row row-slider", eqSliders ? "none" : "")} style={{"margin":"0px 0px 6px 0px"}}>
				<div className={classNames('InputLabel', sld6 ? "active" : "")} onDoubleClick={()=>resetSlider6()}>Global Gain</div>
				<RcSlider>
					<Input className="input" type="text" value={slider6} min="0" max="100" onChange={(event) => setSlider6(event.target.value)}/>
					<Slider
							className={classNames('white', handleSlider6 === true ? 'active': '')}
							onChange={sliderFunc6}
							onBeforeChange={()=>setSld6(!sld6)}
							onAfterChange={()=>setSld6(!sld6)}
							value={slider6}/>
				</RcSlider>
			</div>

			<img src={Eq2Img} width="294" alt="" style={{"margin":"0px 0px 20px 15px"}} className={eqSliders ? "none" : ""}/>
		</>
	)
}

export default Audio;
