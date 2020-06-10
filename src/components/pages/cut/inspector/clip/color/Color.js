
import React, { useState } from 'react';
import Slider from 'rc-slider';

// STYLES
import classNames from 'classnames';
import { ToggleTools } 	from '../../_toggle-tools';
import { RcSlider, Input } 	from '../../_slider';

// IMAGES
import LutsDropdown 	from '../../img/color/luts-dropdown.png';
import ColorWheelsImg 	from '../../img/color/color-wheels.png';
import ColorAdjImg 		from '../../img/color/color-curves.png'

function Color() {
	// LUTS
	const [ toggleLuts, setLuts ] = useState(false);
	const [ lutsSlider, setLutsSlider ] = useState(false);

	const [ slider1, setSlider1 ] =  useState(50);
	const [ handleSlider1, setHandleSlider1 ] = useState(false);
	const [sld1, setSld1 ] = useState(false);
	function sliderFunc1(value) { setHandleSlider1(true); setSlider1(value); }
	function resetSlider1(value) { setHandleSlider1(false); setSlider1(50); }

	function resetLuts() {
		resetSlider1();
	}

	// COLOR WHEELS
	const [ toggleWheels, setWheels ] = useState(false);
	const [ wheelsImg, setWheelsImg ] = useState(false);
	const [ wheelsSliders, serWheelsSliders ] = useState(false);

	const tabsColorWheel = [
		{ id: 0, label: 'Lift' },
		{ id: 1, label: 'Gamma' },
		{ id: 2, label: 'Gain' },
		{ id: 3, label: 'Offset' },
	]

	const [ activeTab1, setTab1 ] = useState(0);
	const [ toggleKf1, setToggleKf1 ] = useState(false);
	const [ toggleKf2, setToggleKf2 ] = useState(false);
	const [ toggleKf3, setToggleKf3 ] = useState(false);

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

	const [ slider6, setSlider6 ] =  useState(50);
	const [ handleSlider6, setHandleSlider6 ] = useState(false);
	const [sld6, setSld6 ] = useState(false);
	function sliderFunc6(value) { setHandleSlider6(true); setSlider6(value); }
	function resetSlider6(value) { setHandleSlider6(false); setSlider6(50); }

	function resetColorWheels() {
		setTab1(0);
		resetSlider2();
		resetSlider3();
		resetSlider4();
		resetSlider5();
		resetSlider6();
	}

	// COLOR ADJUSTMENTS
	const [ toggleAdj, setToggleAdj ] = useState(false);
	const [ adjCurves, setAdjCurves ] = useState(false);
	const [ adjSliders, setAdjSliders ] = useState(false);

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

	const [ slider9, setSlider9 ] =  useState(50);
	const [ handleSlider9, setHandleSlider9 ] = useState(false);
	const [sld9, setSld9 ] = useState(false);
	function sliderFunc9(value) { setHandleSlider9(true); setSlider9(value); }
	function resetSlider9(value) { setHandleSlider9(false); setSlider9(50); }

	const [ slider10, setSlider10 ] =  useState(50);
	const [ handleSlider10, setHandleSlider10 ] = useState(false);
	const [sld10, setSld10 ] = useState(false);
	function sliderFunc10(value) { setHandleSlider10(true); setSlider10(value); }
	function resetSlider10(value) { setHandleSlider10(false); setSlider10(50); }

	const [ slider11, setSlider11 ] =  useState(50);
	const [ handleSlider11, setHandleSlider11 ] = useState(false);
	const [sld11, setSld11 ] = useState(false);
	function sliderFunc11(value) { setHandleSlider11(true); setSlider11(value); }
	function resetSlider11(value) { setHandleSlider11(false); setSlider11(50); }

	const [ slider12, setSlider12 ] =  useState(50);
	const [ handleSlider12, setHandleSlider12 ] = useState(false);
	const [sld12, setSld12 ] = useState(false);
	function sliderFunc12(value) { setHandleSlider12(true); setSlider12(value); }
	function resetSlider12(value) { setHandleSlider12(false); setSlider12(50); }

	const [ slider13, setSlider13 ] =  useState(50);
	const [ handleSlider13, setHandleSlider13 ] = useState(false);
	const [sld13, setSld13 ] = useState(false);
	function sliderFunc13(value) { setHandleSlider13(true); setSlider13(value); }
	function resetSlider13(value) { setHandleSlider13(false); setSlider13(50); }

	const [ slider14, setSlider14 ] =  useState(50);
	const [ handleSlider14, setHandleSlider14 ] = useState(false);
	const [sld14, setSld14 ] = useState(false);
	function sliderFunc14(value) { setHandleSlider14(true); setSlider14(value); }
	function resetSlider14(value) { setHandleSlider14(false); setSlider14(50); }

	const [ slider15, setSlider15 ] =  useState(50);
	const [ handleSlider15, setHandleSlider15 ] = useState(false);
	const [sld15, setSld15 ] = useState(false);
	function sliderFunc15(value) { setHandleSlider15(true); setSlider15(value); }
	function resetSlider15(value) { setHandleSlider15(false); setSlider15(50); }

	const [ slider16, setSlider16 ] =  useState(50);
	const [ handleSlider16, setHandleSlider16 ] = useState(false);
	const [sld16, setSld16 ] = useState(false);
	function sliderFunc16(value) { setHandleSlider16(true); setSlider16(value); }
	function resetSlider16(value) { setHandleSlider16(false); setSlider16(50); }

	const [ slider17, setSlider17 ] =  useState(50);
	const [ handleSlider17, setHandleSlider17 ] = useState(false);
	const [sld17, setSld17 ] = useState(false);
	function sliderFunc17(value) { setHandleSlider17(true); setSlider17(value); }
	function resetSlider17(value) { setHandleSlider17(false); setSlider17(50); }

	function resetColorAdjustments() {
		resetSlider7();
		resetSlider8();
		resetSlider9();
		resetSlider10();
		resetSlider11();
		resetSlider12();
		resetSlider13();
		resetSlider14();
		resetSlider15();
		resetSlider16();
		resetSlider17();
	}

	return (
		<>
			{/* LUTS */}
			<div className="Row">
				<div onClick={()=> setLuts(!toggleLuts)} className={classNames('Toggle', toggleLuts ? "active" : "")}/>
				<div className="LabelToggle">LUTs</div>
				<ToggleTools className="ic-reset" onClick={()=> resetLuts()}/>
				<ToggleTools className={classNames('ic-controls', lutsSlider ? "active" : "")} onClick={()=> setLutsSlider(!lutsSlider)}/>
				{/* <ToggleTools className={classNames('ic-kf', toggleKf1 ? "active" : "")} onClick={()=> setToggleKf1(!toggleKf1)}/> */}
			</div>

			<div className={lutsSlider ? "none" : ""}>
				<img src={LutsDropdown} width="294" style={{"margin":"0px 0px 3px 15px"}}/>

				<div className={classNames("Row row-slider")} style={{"marginBottom": "9px"}}>
					<div className={classNames('InputLabel', sld1 ? "active" : "")} onDoubleClick={()=>resetSlider1()}>Intensity</div>
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
			</div>

			{/* COLOR WHEELS */}
			<div className="Row header">
				<div onClick={()=> setWheels(!toggleWheels)} className={classNames('Toggle', toggleWheels ? "active" : "")}/>
				<div className="LabelToggle">Color Wheels</div>
				<ToggleTools className="ic-reset" onClick={()=> resetColorWheels()}/>
				<ToggleTools className={classNames('ic-controls', wheelsSliders ? "active" : "")} onClick={()=> serWheelsSliders(!wheelsSliders)}/>
				<ToggleTools className={classNames('ic-colorwheel', wheelsImg ? "active" : "")} onClick={()=> setWheelsImg(!wheelsImg)}/>
				<ToggleTools className={classNames('ic-auto')}/>
				{/* <ToggleTools className={classNames('ic-kf', toggleKf2 ? "active" : "")} onClick={()=> setToggleKf2(!toggleKf2)}/> */}
			</div>

			<img src={ColorWheelsImg} width="289" style={{"margin":"4px 0px 3px 17px"}} className={wheelsImg ? "none" : ""}/>

			<div className={classNames('Row', wheelsImg ? "none" : "")}>
				<div className="RoundedButton offset">Offset</div>
			</div>

			<div className={wheelsSliders ? "none" : ""}>
				<div className="InspectorTabs" style={{"margin":"2px 24px 6px 15px"}}>
					{tabsColorWheel.map((tab, i)=> (
						<div key={i} className={classNames('btn-tab four', i === activeTab1 ? "active" : "")} onClick={()=> setTab1(i)}>{tab.label}</div>
					))}
				</div>

				<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
					<div className={classNames('InputLabel', sld2 ? "active" : "")} onDoubleClick={()=>resetSlider2()}>Luminance</div>
					<RcSlider>
						<Input className="input" type="text" value={slider2} min="0" max="100" onChange={(event) => setSlider2(event.target.value)}/>
						<Slider
							className={classNames('lum', handleSlider2 === true ? 'active': '')}
							onChange={sliderFunc2}
							onBeforeChange={()=>setSld2(!sld2)}
							onAfterChange={()=>setSld2(!sld2)}
							value={slider2}/>
					</RcSlider>
				</div>

				<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
					<div className={classNames('InputLabel', sld3 ? "active" : "")} onDoubleClick={()=>resetSlider3()}>Red</div>
					<RcSlider >
						<Input className="input" type="text" value={slider3} min="0" max="100" onChange={(event) => setSlider3(event.target.value)}/>
						<Slider
							className={classNames('red', handleSlider3 === true ? 'active': '')}
							onChange={sliderFunc3}
							onBeforeChange={()=>setSld3(!sld3)}
							onAfterChange={()=>setSld3(!sld3)}
							value={slider3}/>
					</RcSlider>
				</div>

				<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
					<div className={classNames('InputLabel', sld4 ? "active" : "")} onDoubleClick={()=>resetSlider4()}>Green</div>
					<RcSlider>
						<Input className="input" type="text" value={slider4} min="0" max="100" onChange={(event) => setSlider4(event.target.value)}/>
						<Slider
							className={classNames('green', handleSlider4 === true ? 'active': '')}
							onChange={sliderFunc4}
							onBeforeChange={()=>setSld4(!sld4)}
							onAfterChange={()=>setSld4(!sld4)}
							value={slider4}/>
					</RcSlider>
				</div>

				<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
					<div className={classNames('InputLabel', sld5 ? "active" : "")} onDoubleClick={()=>resetSlider5()}>Blue</div>
					<RcSlider>
						<Input className="input" type="text" value={slider5} min="0" max="100" onChange={(event) => setSlider5(event.target.value)}/>
						<Slider
							className={classNames('blue', handleSlider5 === true ? 'active': '')}
							onChange={sliderFunc5}
							onBeforeChange={()=>setSld5(!sld5)}
							onAfterChange={()=>setSld5(!sld5)}
							value={slider5}/>
					</RcSlider>
				</div>

				<div className={classNames("Row row-slider")} style={{"marginBottom": "9px"}}>
					<div className={classNames('InputLabel', sld6 ? "active" : "")} onDoubleClick={()=>resetSlider6()}>All</div>
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
			</div>

			{/* COLOR ADJUSTMENTS */}
			<div className="Row header">
				<div onClick={()=> setToggleAdj(!toggleAdj)} className={classNames('Toggle', toggleAdj ? "active" : "")}/>
				<div className="LabelToggle">Color Adjustments</div>
				<ToggleTools className="ic-reset" onClick={()=> resetColorAdjustments()}/>
				<ToggleTools className={classNames('ic-controls', adjSliders ? "active" : "")} onClick={()=> setAdjSliders(!adjSliders)}/>
				<ToggleTools className={classNames('ic-curves', adjCurves ? "active" : "")} onClick={()=> setAdjCurves(!adjCurves)}/>
				{/* <ToggleTools className={classNames('ic-kf', toggleKf3 ? "active" : "")} onClick={()=> setToggleKf3(!toggleKf3)}/> */}
			</div>

			<img src={ColorAdjImg} width="294" style={{"margin":"11px 0px 15px 15px"}} className={adjCurves ? "none" : ""}/>

			<div className={adjSliders ? "none" : ""}>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld7 ? "active" : "")} onDoubleClick={()=>resetSlider7()}>Temperature</div>
				<RcSlider>
					<Input className="input" type="text" value={slider7} min="0" max="100" onChange={(event) => setSlider7(event.target.value)}/>
					<Slider
							className={classNames('temperature', handleSlider7 === true ? 'active': '')}
							onChange={sliderFunc7}
							onBeforeChange={()=>setSld7(!sld7)}
							onAfterChange={()=>setSld7(!sld7)}
							value={slider7}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld8 ? "active" : "")} onDoubleClick={()=>resetSlider8()}>Tint</div>
				<RcSlider>
					<Input className="input" type="text" value={slider8} min="0" max="100" onChange={(event) => setSlider8(event.target.value)}/>
					<Slider
							className={classNames('tint', handleSlider8 === true ? 'active': '')}
							onChange={sliderFunc8}
							onBeforeChange={()=>setSld8(!sld8)}
							onAfterChange={()=>setSld8(!sld8)}
							value={slider8}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld9 ? "active" : "")} onDoubleClick={()=>resetSlider9()}>Contrast</div>
				<RcSlider>
					<Input className="input" type="text" value={slider9} min="0" max="100" onChange={(event) => setSlider9(event.target.value)}/>
					<Slider
							className={classNames('bw', handleSlider9 === true ? 'active': '')}
							onChange={sliderFunc9}
							onBeforeChange={()=>setSld9(!sld9)}
							onAfterChange={()=>setSld9(!sld9)}
							value={slider9}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld10 ? "active" : "")} onDoubleClick={()=>resetSlider10()}>Pivot</div>
				<RcSlider>
					<Input className="input" type="text" value={slider10} min="0" max="100" onChange={(event) => setSlider10(event.target.value)}/>
					<Slider
							className={classNames('pivot', handleSlider10 === true ? 'active': '')}
							onChange={sliderFunc10}
							onBeforeChange={()=>setSld10(!sld10)}
							onAfterChange={()=>setSld10(!sld10)}
							value={slider10}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld11 ? "active" : "")} onDoubleClick={()=>resetSlider11()}>Midtone Detail</div>
				<RcSlider>
					<Input className="input" type="text" value={slider11} min="0" max="100" onChange={(event) => setSlider11(event.target.value)}/>
					<Slider
							className={classNames('detail', handleSlider11 === true ? 'active': '')}
							onChange={sliderFunc11}
							onBeforeChange={()=>setSld7(!sld11)}
							onAfterChange={()=>setSld7(!sld11)}
							value={slider11}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld12 ? "active" : "")} onDoubleClick={()=>resetSlider12()}>Color Boost</div>
				<RcSlider>
					<Input className="input" type="text" value={slider12} min="0" max="100" onChange={(event) => setSlider12(event.target.value)}/>
					<Slider
							className={classNames('boost', handleSlider12 === true ? 'active': '')}
							onChange={sliderFunc12}
							onBeforeChange={()=>setSld12(!sld12)}
							onAfterChange={()=>setSld12(!sld12)}
							value={slider12}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld13 ? "active" : "")} onDoubleClick={()=>resetSlider13()}>Shadows</div>
				<RcSlider>
					<Input className="input" type="text" value={slider13} min="0" max="100" onChange={(event) => setSlider13(event.target.value)}/>
					<Slider
							className={classNames('shadow', handleSlider13 === true ? 'active': '')}
							onChange={sliderFunc13}
							onBeforeChange={()=>setSld13(!sld13)}
							onAfterChange={()=>setSld13(!sld13)}
							value={slider13}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld14 ? "active" : "")} onDoubleClick={()=>resetSlider14()}>Highlights</div>
				<RcSlider>
					<Input className="input" type="text" value={slider14} min="0" max="100" onChange={(event) => setSlider14(event.target.value)}/>
					<Slider
							className={classNames('highlight', handleSlider14 === true ? 'active': '')}
							onChange={sliderFunc14}
							onBeforeChange={()=>setSld14(!sld14)}
							onAfterChange={()=>setSld14(!sld14)}
							value={slider14}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld15 ? "active" : "")} onDoubleClick={()=>resetSlider15()}>Saturation</div>
				<RcSlider>
					<Input className="input" type="text" value={slider15} min="0" max="100" onChange={(event) => setSlider15(event.target.value)}/>
					<Slider
							className={classNames('saturation', handleSlider15 === true ? 'active': '')}
							onChange={sliderFunc15}
							onBeforeChange={()=>setSld15(!sld15)}
							onAfterChange={()=>setSld15(!sld15)}
							value={slider15}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "3px"}}>
				<div className={classNames('InputLabel', sld16 ? "active" : "")} onDoubleClick={()=>resetSlider16()}>Hue</div>
				<RcSlider>
					<Input className="input" type="text" value={slider16} min="0" max="100" onChange={(event) => setSlider16(event.target.value)}/>
					<Slider
							className={classNames('hue-global', handleSlider16 === true ? 'active': '')}
							onChange={sliderFunc16}
							onBeforeChange={()=>setSld16(!sld16)}
							onAfterChange={()=>setSld16(!sld16)}
							value={slider16}/>
				</RcSlider>
			</div>

			<div className={classNames("Row row-slider")} style={{"marginBottom": "19px"}}>
				<div className={classNames('InputLabel', sld17 ? "active" : "")} onDoubleClick={()=>resetSlider17()}>Lum Mix</div>
				<RcSlider>
					<Input className="input" type="text" value={slider17} min="0" max="100" onChange={(event) => setSlider17(event.target.value)}/>
					<Slider
							className={classNames('mix', handleSlider17 === true ? 'active': '')}
							onChange={sliderFunc17}
							onBeforeChange={()=>setSld17(!sld17)}
							onAfterChange={()=>setSld17(!sld17)}
							value={slider17}/>
				</RcSlider>
			</div>
			</div>
		</>
	)
}

export default Color;
