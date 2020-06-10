
import React, { useState } from 'react';
import classNames from 'classnames';

function Effects() {

	const tabs = [
		{ id: 0, label: 'Video' },
		{ id: 1, label: 'Audio' },
	];

	const effectsList = [
		{ id: 0, label: 'Box Blur' },
		{ id: 1, label: 'Directional Blur' },
		{ id: 2, label: 'Gaussian Blur' },
		{ id: 3, label: 'Lens Blur' },
		{ id: 4, label: 'Mosaic Blur' },
		{ id: 5, label: 'Radial Blur' },
		{ id: 6, label: 'Zoom Blur' },
		{ id: 7, label: 'ACES Transform' },
		{ id: 8, label: 'Chromatic Adaption' },
		{ id: 9, label: 'Color Compressor' },
		{ id: 10, label: 'Color Space Transform' },
		{ id: 11, label: 'Color Stabilizer' },
		{ id: 12, label: 'Contrast Pop' },
		{ id: 13, label: 'DCTL' },
		{ id: 14, label: 'Dehaze' },
		{ id: 15, label: 'Gamut Limiter' },
		{ id: 16, label: 'Gamut Mapping' },
		{ id: 17, label: 'Invert Color' },
		{ id: 18, label: 'Color Generator' },
		{ id: 19, label: 'Color Palette' },
		{ id: 20, label: 'Grid' },
		{ id: 21, label: 'Apperture Diffraction' },
		{ id: 22, label: 'Glow' },
		{ id: 23, label: 'Lens Flare' },
		{ id: 24, label: 'Lens Reflection' },
		{ id: 25, label: 'Light Rays' },
		{ id: 26, label: 'Alpha Matte Shrink and Grow' },
		{ id: 27, label: 'Beauty' },
		{ id: 28, label: 'Automatic Dirty Removal' },
		{ id: 29, label: 'Chromatic Aberration' },
		{ id: 30, label: 'Dead Pixel Fixer' },
		{ id: 31, label: 'Deband' },
		{ id: 32, label: 'Deflicker' },
		{ id: 33, label: 'Patch Replacer' },
		{ id: 34, label: 'Sharpen' },
		{ id: 35, label: 'Sharpen Edges' },
		{ id: 36, label: 'Soften & Sharpen' },
		{ id: 37, label: 'Abstraction' },
		{ id: 38, label: 'Blanking Fill' },
		{ id: 39, label: 'Drop Shadow' },
		{ id: 40, label: 'EdgeDetect' },
		{ id: 41, label: 'Emboss' },
		{ id: 42, label: 'JPEG Damage' },
		{ id: 43, label: 'Mirrors' },
		{ id: 44, label: 'Pencil Sketch' },
		{ id: 45, label: 'Prism Blur' },
		{ id: 46, label: 'Scanlines' },
		{ id: 47, label: 'Stop Motion' },
		{ id: 48, label: 'Stylize' },
		{ id: 49, label: 'Tilt-Shift Blur' },
		{ id: 50, label: 'Vignette' },
		{ id: 51, label: 'Watercolor' },
		{ id: 52, label: 'Analog Damage' },
		{ id: 53, label: 'Film Damage' },
		{ id: 54, label: 'Film Grain' },
		{ id: 55, label: 'Camera Shake' },
		{ id: 56, label: 'Flicker Addition' },
		{ id: 57, label: 'Dent' },
		{ id: 58, label: 'Lens Distortion' },
		{ id: 59, label: 'Ripples' },
		{ id: 60, label: 'Vortex' },
		{ id: 61, label: 'Warper' },
		{ id: 62, label: 'Waviness' },
		{ id: 63, label: 'Chorus' },
		{ id: 64, label: 'De-Esser' },
		{ id: 65, label: 'De-Hummer' },
		{ id: 66, label: 'Delay' },
		{ id: 67, label: 'Dialogue Processor' },
		{ id: 68, label: 'Distortion' },
		{ id: 69, label: 'Echo' },
		{ id: 70, label: 'Flanger' },
		{ id: 71, label: 'Foley Sampler' },
		{ id: 72, label: 'Frequency Analyzer' },
		{ id: 73, label: 'LFE Filter' },
		{ id: 74, label: 'Limiter' },
		{ id: 75, label: 'Meter' },
		{ id: 76, label: 'Modulation' },
		{ id: 77, label: 'Multiband Compressor' },
		{ id: 78, label: 'Noise Reduction' },
		{ id: 79, label: 'Phase Meter' },
		{ id: 80, label: 'Pitch' },
		{ id: 81, label: 'Reverb' },
		{ id: 82, label: 'Soft Clipper' },
		{ id: 83, label: 'Stereo Fixer' },
		{ id: 84, label: 'Stereo Width' },
		{ id: 85, label: 'Vocal Channel' },
		{ id: 86, label: 'AUBandpass' },
		{ id: 87, label: 'AUDelay' },
		{ id: 88, label: 'AUDistortion' },
		{ id: 89, label: 'AUDynamicProcessor' },
		{ id: 90, label: 'AUFilter' },
		{ id: 91, label: 'AUGraphicEQ' },
		{ id: 92, label: 'AUHighShelfFilter' },
		{ id: 93, label: 'AUHipass' },
		{ id: 94, label: 'AULowpass' },
		{ id: 95, label: 'AULowShelfFilter' },
		{ id: 96, label: 'AUMatrixReverb' },
		{ id: 97, label: 'AUMultibandCompressor' },
		{ id: 98, label: 'AUNBandEQ' },
		{ id: 99, label: 'AUNetSend' },
		{ id: 100, label: 'AUParametricEQ' },
		{ id: 101, label: 'AUPeakLimiter' },
		{ id: 102, label: 'AUReverb2' },
		{ id: 103, label: 'AURogerBeep' },
		{ id: 104, label: 'AURoundTripAAC' },
		{ id: 105, label: 'AUSampleDelay' },
	];

	const [ videoAudio, setVideoAudio ] = useState(0);
	const [ toggle1, setToggle1 ] = useState(true);
	const [ toggle2, setToggle2 ] = useState(true);
	const [ toggle3, setToggle3 ] = useState(true);
	const [ toggle4, setToggle4 ] = useState(true);
	const [ toggle5, setToggle5 ] = useState(true);
	const [ toggle6, setToggle6 ] = useState(true);
	const [ toggle7, setToggle7 ] = useState(true);
	const [ toggle8, setToggle8 ] = useState(true);
	const [ toggle9, setToggle9 ] = useState(true);
	const [ toggle10, setToggle10 ] = useState(true);
	const [ toggle11, setToggle11 ] = useState(true);

	return (
		<>
			{/* Mini Header */}
			<div className="MiniHeader">
				<div>
					{tabs.map((tab, i) => (
						<div key={i} className={classNames('tabs', videoAudio === i ? 'active' : '')} onClick={()=> setVideoAudio(i)}>{tab.label}</div>
					))}
				</div>

				<div></div>

				<div>
					<input type="text" placeholder="Search" style={{'width':'128px', 'margin': '0 10px 0 0'}}/>
					<div className="icon contextmenu borderL" style={{'width':'38px'}}></div>
				</div>
			</div>

			{/* Content */}
			<div className="EffectsContent">
				<div className="title" style={videoAudio === 0 ? {'display':'block'}:{'display':'none'}}>Filters</div>

				<div className="content" style={videoAudio === 0 ? {'display':'block'}:{'display':'none'}}>
					{/* VIDEO CONTENT */}
					<div className="accordion">
						<div className="title-effects">Resolve FX Blur</div>
						<div className={classNames('toggle-effects', toggle1 ? 'active':'')} onClick={()=> setToggle1(!toggle1)}></div>
					</div>

					<div style={toggle1 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id < 7).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Color</div>
						<div className={classNames('toggle-effects', toggle2 ? 'active':'')} onClick={()=> setToggle2(!toggle2)}></div>
					</div>

					<div style={toggle2 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 6 && item.id < 18).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Generate</div>
						<div className={classNames('toggle-effects', toggle3 ? 'active':'')} onClick={()=> setToggle3(!toggle3)}></div>
					</div>

					<div style={toggle3 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 17 && item.id < 21).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Light</div>
						<div className={classNames('toggle-effects', toggle4 ? 'active':'')} onClick={()=> setToggle4(!toggle4)}></div>
					</div>

					<div style={toggle4 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 20 && item.id < 26).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Refine</div>
						<div className={classNames('toggle-effects', toggle5 ? 'active':'')} onClick={()=> setToggle5(!toggle5)}></div>
					</div>

					<div style={toggle5 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 25 && item.id < 28).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Revival</div>
						<div className={classNames('toggle-effects', toggle6 ? 'active':'')} onClick={()=> setToggle6(!toggle6)}></div>
					</div>

					<div style={toggle6 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 27 && item.id < 34).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Sharpen</div>
						<div className={classNames('toggle-effects', toggle7 ? 'active':'')} onClick={()=> setToggle7(!toggle7)}></div>
					</div>

					<div style={toggle7 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 33 && item.id < 37).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Stylize</div>
						<div className={classNames('toggle-effects', toggle8 ? 'active':'')} onClick={()=> setToggle8(!toggle8)}></div>
					</div>

					<div style={toggle8 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 36 && item.id < 52).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Texture</div>
						<div className={classNames('toggle-effects', toggle9 ? 'active':'')} onClick={()=> setToggle9(!toggle9)}></div>
					</div>

					<div style={toggle9 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 51 && item.id < 55).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Transform</div>
						<div className={classNames('toggle-effects', toggle10 ? 'active':'')} onClick={()=> setToggle10(!toggle10)}></div>
					</div>

					<div style={toggle10 ? {'display':'block','marginBottom':'20px'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 54 && item.id < 57).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="accordion">
						<div className="title-effects">Resolve FX Warp</div>
						<div className={classNames('toggle-effects', toggle11 ? 'active':'')} onClick={()=> setToggle11(!toggle11)}></div>
					</div>

					<div style={toggle11 ? {'display':'block'}:{'display':'none'}}>
						{effectsList.filter(item => item.id > 56 && item.id < 63).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type gpu"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>
				</div>

				{/* AUDIO CONTENT */}
				<div style={videoAudio === 1 ? {'display':'block'}:{'display':'none'}}>
					<div className="title">FairlightFX</div>
					<div className="content">
						{effectsList.filter(item => item.id > 62 && item.id < 86).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type audio"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>

					<div className="title">AU Effects</div>
					<div className="content">
						{effectsList.filter(item => item.id > 85).map((item, i)=> (
							<div className={classNames(`row`)}>
								<div className="row-type audio"></div>
								<span>{item.label}</span>
								<div className="favorite-title"></div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Viewer ToolBar */}
			<div className="editTools">
				<div>
					<div className="boring"></div>
					<div className="split"></div>
				</div>

				<div>
					<div className="apply disabled"></div>
				</div>

				<div></div>
			</div>
		</>
	)
}

export default Effects;
