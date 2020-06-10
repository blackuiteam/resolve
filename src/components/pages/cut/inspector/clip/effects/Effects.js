
import React, { useState } from 'react';
import Slider from 'rc-slider';

// STYLES
import classNames from 'classnames';
import { ToggleTools } 	from '../../_toggle-tools';
import { RcSlider, Input } 	from '../../_slider';

// IMAGES
import ColorGenerator 	from '../../img/effects/color-generator.png';
import TextureImg 		from '../../img/effects/texture.png';
import ChorusImg 		from '../../img/effects/audio-tab.png';

function Effects() {

	// MAIN TAB
	const mainTabs = [
		{ id: 0, label: "Video" },
		{ id: 1, label: "Audio" }
	]

	const [ activeMain, setMainTab ] = useState(0);
	const [ toggleKf1, setToggleKf1 ] = useState(false);
	const [ toggleKf2, setToggleKf2 ] = useState(false);
	const [ toggleKf3, setToggleKf3 ] = useState(false);

	// FACE REFINEMENT
	const [ faceRefine, setFaceRefine ] = useState(false);

	const [ slider1, setSlider1 ] =  useState(50);
	const [ handleSlider1, setHandleSlider1 ] = useState(false);
	const [sld1, setSld1 ] = useState(false);
	function sliderFunc1(value) { setHandleSlider1(true); setSlider1(value); }
	function resetSlider1(value) { setHandleSlider1(false); setSlider1(50); }


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

	const [ slider4, setSlider4 ] =  useState(50);
	const [ handleSlider4, setHandleSlider4 ] = useState(false);
	const [sld4, setSld4 ] = useState(false);
	function sliderFunc4(value) { setHandleSlider4(true); setSlider4(value); }
	function resetSlider4(value) { setHandleSlider4(false); setSlider4(50); }

	const [ slider5, setSlider5] =  useState(50);
	const [ handleSlider5, setHandleSlider5 ] = useState(false);
	const [sld5, setSld5 ] = useState(false);
	function sliderFunc5(value) { setHandleSlider5(true); setSlider5(value); }
	function resetSlider5(value) { setHandleSlider5(false); setSlider5(50); }

	function resetEffects() {
		resetSlider1();
		resetSlider2();
		resetSlider3();
		resetSlider4();
		resetSlider5();
		setActiveSkin(0);
	}

	const [ check, setCheck ] = useState(false);
	const [ check1, setCheck1 ] = useState(false);
	const [ check2, setCheck2 ] = useState(false);
	const [ check3, setCheck3 ] = useState(false);

	const skinMaskTabs = [
		{ id: 0, label: "None" },
		{ id: 1, label: "Internal Skin" },
		{ id: 2, label: "Input Alpha" }
	]

	const [ activeSkin, setActiveSkin ] = useState(0);

	const [ faceRefineContent,  setFaceRefineContent ] = useState(false);
	const [ chorus, setChorus ] = useState(false);
	const [ skinMask, setSkinMask ] = useState(false);
	const [ texture, setTexture ] = useState(false);
	const [ eyes, setEyes ] = useState(true);
	const [ colorG, setColorG ] = useState(true);
	const [ lips, setLips ] = useState(true);
	const [ brush, setBrush ] = useState(true);
	const [ forehead, setForehead ] = useState(true);
	const [ cheek, setCheek ] = useState(true);
	const [ toggleColorG, setToggleColorG ] = useState(false);
	const [ colorGenerator, setColorGenerator ] = useState(false);

	return (
		<>
			{/* TABS */}
			<div className="InspectorTabs" style={{'margin':'10px 25px 9px 15px'}}>
				{mainTabs.map((tab, i) => (
					<div key={i} className={classNames('btn-tab two', i === activeMain ? "active" : "")} onClick={()=> setMainTab(i)}>{tab.label}</div>
				))}
			</div>


			<div className={activeMain === 0 ? "none" : ""}>
				{/* CHORUS */}
				<div className="Row header">
					<div onClick={()=> setFaceRefine(!faceRefine)} className={classNames('Toggle', faceRefine ? "active" : "")}/>
					<div className="LabelToggle">Chorus</div>
					<ToggleTools className="ic-reset"/>
					<ToggleTools className="ic-delete"/>
					<ToggleTools className={classNames('ic-controls', chorus ? "active" : "")} onClick={()=> setChorus(!chorus)}/>
				</div>
				<img src={ChorusImg} width="294px" style={{'margin':'6px 0 437px 15px'}} className={chorus ? "none" : ""}/>
			</div>

			<div className={activeMain === 1 ? "none" : ""}>
				{/* FACE REFINEMENT */}
				<div className="Row header">
					<div onClick={()=> setFaceRefine(!faceRefine)} className={classNames('Toggle', faceRefine ? "active" : "")}/>
					<div className="LabelToggle">Face Refinement</div>
					<ToggleTools className="ic-reset" onClick={()=> resetEffects()}/>
					<ToggleTools className="ic-delete"/>
					<ToggleTools className={classNames('ic-controls', faceRefineContent ? "active" : "")} onClick={()=> setFaceRefineContent(!faceRefineContent)}/>
					<ToggleTools className={classNames('ic-kf', toggleKf1 ? "active" : "")} onClick={()=> setToggleKf1(!toggleKf1)}/>
				</div>

				<div className={classNames('Row row-slider', faceRefineContent ? "none" : "")} style={{"margin":"1px 0px 9px 0px"}}>
					<div className={classNames('InputLabel', sld1 ? "active" : "")} onDoubleClick={()=>resetSlider1()}>Global blend</div>
					<RcSlider>
						<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
						<RcSlider>
							<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
							<Slider
								className={classNames('white', handleSlider1 === true ? 'active': '')}
								onChange={sliderFunc1}
								onBeforeChange={()=>setSld1(!sld1)}
								onAfterChange={()=>setSld1(!sld1)}
								value={slider1}/>
						</RcSlider>
					</RcSlider>
				</div>

				<div style={{"margin":"5px 20px 7px 0px"}} className={classNames("Row mini-row", faceRefineContent ? "none" : "")}/>

				<div style={{"margin":"0px 0px 2px 0px"}} className={classNames('Row', faceRefineContent ? "none" : "")}>
					<div className="RoundedButton" style={{"margin":"1px 20px 0px 0px"}}>Analyze</div>
					<div className={classNames('CheckBox', check ? "active" : "")} style={{"margin":"4px 0px 0px 0px"}} onClick={()=> setCheck(!check)}>Show Overlay</div>
				</div>

				{/* NEEDS STYLES */}
				<div className={classNames('MiniContainer first', faceRefineContent ? "none" : "")}>
					<div className={classNames('MiniToggle', skinMask ? "active" : "")} onClick={()=> setSkinMask(!skinMask)}>Skin Mask</div>

					<div className={skinMask ? "none" : ""}>
						<div className="Row mini-title" style={{"height":"21px","padding":"3px 0px 0px 2px"}}>Skin Mask Source</div>

						<div className="InspectorTabs" style={{'margin':'0px 5px 7px -1px'}}>
							{skinMaskTabs.map((tab, i) => (
								<div key={i} className={classNames('btn-tab three', i === activeSkin ? "active" : "")} onClick={()=> setActiveSkin(i)}>{tab.label}</div>
							))}
						</div>

						<div className="Row" style={{"padding":"0", "height":"25px"}}>
							<div className={classNames('CheckBox',check1 ? "active" : "")} onClick={()=> setCheck1(!check1)}>Use Face Mask</div>
						</div>

						<div className={classNames('Row row-slider', faceRefineContent ? "none" : "")} style={{"padding":"0", "height":"25px", "marginBottom": "1px"}}>
							<div className={classNames('InputLabel', sld2 ? "active" : "")} style={{"left":"9px"}} onDoubleClick={()=>resetSlider2()}>Face Mask Size</div>
							<RcSlider>
								<Input className="input" style={{"right":"4px"}} type="text" value={slider2} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
								<Slider
									style={{"width":"100%","margin":"0px 0px 0px 0px"}}
									className={classNames('white', handleSlider2 === true ? 'active': '')}
									onChange={sliderFunc2}
									onBeforeChange={()=>setSld2(!sld2)}
									onAfterChange={()=>setSld2(!sld2)}
									value={slider2}/>
							</RcSlider>
						</div>

						<div className={classNames('Row row-slider', faceRefineContent ? "none" : "")} style={{"padding":"0", "height":"25px", "marginBottom": "2px"}}>
							<div className={classNames('InputLabel', sld3 ? "active" : "")} style={{"left":"9px"}} onDoubleClick={()=>resetSlider3()}>Face Mask Softness</div>
							<RcSlider>
								<Input className="input" style={{"right":"4px"}} type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
								<Slider
									style={{"width":"100%","margin":"0px 0px 0px 0px"}}
									className={classNames('white', handleSlider3 === true ? 'active': '')}
									onChange={sliderFunc3}
									onBeforeChange={()=>setSld3(!sld3)}
									onAfterChange={()=>setSld3(!sld3)}
									value={slider3}/>
							</RcSlider>
						</div>

						<div className="Row" style={{"padding":"0", "height":"25px"}}>
							<div className={classNames('CheckBox', check2 ? "active" : "")} onClick={()=> setCheck2(!check2)}>Adjust Mask</div>
						</div>

						<div className={classNames('Row row-slider', faceRefineContent ? "none" : "")} style={{"padding":"0", "height":"25px", "marginBottom": "1px"}}>
							<div className={classNames('InputLabel', sld4 ? "active" : "")} style={{"left":"9px"}} onDoubleClick={()=>resetSlider4()}>Denoise Mask</div>
							<RcSlider className={classNames('', faceRefineContent ? "none" : "")}>
								<Input className="input" style={{"right":"4px"}} type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
								<Slider
									style={{"width":"100%","margin":"0px 0px 0px 0px"}}
									className={classNames('white', handleSlider4 === true ? 'active': '')}
									onChange={sliderFunc4}
									onBeforeChange={()=>setSld4(!sld4)}
									onAfterChange={()=>setSld4(!sld4)}
									value={slider4}/>
							</RcSlider>
						</div>

						<div className={classNames('Row row-slider', faceRefineContent ? "none" : "")} style={{"padding":"0", "height":"25px", "marginBottom": "2px"}}>
							<div className={classNames('InputLabel', sld5 ? "active" : "")} style={{"left":"9px"}} onDoubleClick={()=>resetSlider5()}>Refine Mask</div>
							<RcSlider>
								<Input className="input" style={{"right":"4px"}} type="text" value={slider5} min="0" max="100" onChange={(event) => setSlider5(event.target.value)}/>
								<Slider
									style={{"width":"100%","margin":"0px 0px 0px 0px"}}
									className={classNames('white', handleSlider5 === true ? 'active': '')}
									onChange={sliderFunc5}
									onBeforeChange={()=>setSld5(!sld5)}
									onAfterChange={()=>setSld5(!sld5)}
									value={slider5}/>
							</RcSlider>
						</div>

						<div className="Row" style={{"padding":"0", "height":"25px", "marginBottom": "6px"}}>
							<div className={classNames('CheckBox', check3 ? "active" : "")} onClick={()=> setCheck3(!check3)}>Show Mask</div>
						</div>
					</div>
				</div>

				<div className={classNames('MiniContainer', faceRefineContent ? "none" : "")}>
					<div className={classNames('MiniToggle', texture ? "active" : "")} onClick={()=> setTexture(!texture)}>Texture</div>
					<img src={TextureImg} width="294px" style={{'margin':'6px 0px 9px 0px'}} className={classNames('', texture ? "none" : "")}/>
				</div>

				<div className={classNames('MiniContainer', faceRefineContent ? "none" : "")}>
					<div className={classNames('MiniToggle', eyes ? "active" : "")} onClick={()=> setEyes(!eyes)}>Eyes</div>
				</div>

				<div  className={classNames('MiniContainer', faceRefineContent ? "none" : "")}>
					<div className={classNames('MiniToggle', colorG ? "active" : "")} onClick={()=> setColorG(!colorG)}>Color grading</div>
				</div>

				<div  className={classNames('MiniContainer', faceRefineContent ? "none" : "")}>
					<div className={classNames('MiniToggle', lips ? "active" : "")} onClick={()=> setLips(!lips)}>Lips</div>
				</div>

				<div  className={classNames('MiniContainer', faceRefineContent ? "none" : "")}>
					<div className={classNames('MiniToggle', brush ? "active" : "")} onClick={()=> setBrush(!brush)}>Blush</div>
				</div>

				<div  className={classNames('MiniContainer', faceRefineContent ? "none" : "")}>
					<div className={classNames('MiniToggle', forehead ? "active" : "")} onClick={()=> setForehead(!forehead)}>Forehead</div>
				</div>

				<div  className={classNames('MiniContainer no-border', faceRefineContent ? "none" : "")} style={{'marginBottom':'10px'}}>
					<div className={classNames('MiniToggle', cheek ? "active" : "")} onClick={()=> setCheek(!cheek)}>Cheek</div>
				</div>

				{/* COLOR GENERATOR */}
				<div className="Row header">
					<div onClick={()=> setToggleColorG(!toggleColorG)} className={classNames('Toggle', toggleColorG ? "active" : "")}/>
					<div className="LabelToggle">Color Generator</div>
					<ToggleTools className="ic-reset"/>
					<ToggleTools className="ic-delete"/>
					<ToggleTools className={classNames('ic-controls', colorGenerator ? "active" : "")} onClick={()=> setColorGenerator(!colorGenerator)}/>
				</div>
				<img src={ColorGenerator} width="294px" className={classNames('', colorGenerator ? "none" : "")} style={{'margin':'6px 0 19px 15px'}}/>
			</div>
		</>
	)
}

export default Effects;
