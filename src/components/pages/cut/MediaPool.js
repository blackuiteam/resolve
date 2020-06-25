
import React, { useState, useEffect, useRef } from 'react';
import Slider 			from 'rc-slider';
import Dialog 			from '@material-ui/core/Dialog';
import Draggable 		from 'react-draggable';
import Paper 			from '@material-ui/core/Paper';
import classNames 		from 'classnames';
import {ContainerQuery} from 'react-container-query';

import myvideo 			from '../../../video/diaz-facecam.mp4';
import myvideo2 		from '../../../video/diaz-gameplay.webm';
import imgSettings 		from '../../../images/popups/media-pool/popup-settings.png';
import ColorSelector 	from '../../../images/popups/media-pool/color-selector.png';
import arrowRight 		from '../../../images/common/arrow_right@2x.png';

import {
	clipsMediaPool,
	cameraSource,
	audioSource,
	colorPickerType,
	solidColorList,
	shapeList,
	sortMenu,
	sortMenuOrder,
	timeCodeList,
	cameraSorting,
	dateTimeSorting,
	clipNameSorting,
	sceneShotSorting,
	colorSorting,
	keyWordsSorting
} from './data/mediapool-data';

import {
	RcSlider,
	Input
} from './inspector/_slider';


function PaperComponent(props) {
	return (
		<Draggable handle="#MiniHeader" cancel={'[class*="MuiDialogContent-root"]'}>
			<Paper {...props} />
		</Draggable>
	);
}

function MediaPool() {

	function useScrollPosition(elementRef) {

		function getScroll() {
			return {
				y: elementRef.current ? elementRef.current.scrollTop : undefined,
				x: elementRef.current ? elementRef.current.scrollLeft : undefined,
			}
		}
		const [scrollPosition, setScrollPosition] = useState(getScroll)

		useEffect(() => {

			if (!elementRef.current) {
				return false
			}

			function handleScroll() {
				setScrollPosition(getScroll())
			}

			elementRef.current.addEventListener('scroll', handleScroll);
			return () => elementRef.current.removeEventListener('scroll', handleScroll);
		}, []);

		return scrollPosition
	}

	const elementRef = useRef();

	const scroll = useScrollPosition(elementRef);
	console.log(scroll.y);

	const [ slider1, setSlider1 ] =  useState(100);
	const [ handleSlider1, setHandleSlider1 ] = useState(false);
	const [sld1, setSld1 ] = useState(false);
	function sliderFunc1(value) { setHandleSlider1(true); setSlider1(value); }
	function resetSlider1(value) { setHandleSlider1(false); setSlider1(100); }

	const drops = useRef();

	const handleClickOutsideSettings = e => {
		if(drops.current.contains(e.target)) { return; }
		setTimeout(()=> { setRecSettings(false); }, 200);
	}

	const handleClickOutside = e => {
		if(drops.current.contains(e.target)) { return; }
		setTimeout(()=> { setCameraSource(false); }, 200);
	}

	const handleClickOutside2 = e => {
		if(drops.current.contains(e.target)) { return; }
		setTimeout(()=> { setAudioSource(false); }, 200);
	}

	const handleClickOutside3 = e => {
		if(drops.current.contains(e.target)) { return; }
		setTimeout(()=> { setFilter(false); }, 200);
	}

	const [ newClips, setNewClips ] = useState(clipsMediaPool);
	const [ clipsIndex, setClipsIndex ] = useState(-1);
	const [ addSound, setAddSound ] = useState(true);

	function addClip() {
		if(cameraIndex !== 0) {
			setNewClips([...newClips, {
				id: newClips.length + 1,
				clipname: recName,
				className: 'gameplay'
			}]);
		} else {
			setNewClips([...newClips, {
				id: newClips.length + 1,
				clipname: recName,
			}]);
		}
	}

	const [ sortIndex, setSort ] = useState(0);
	const [ sortOrder, setOrder ] = useState(0);

	const [ open, setOpen ] = useState(false);
	const [ indexPicker, setPicker ] = useState(-1);
	const [ indexSolid, setSolid ] = useState(0);
	const [ recName, setRecName ] = useState('DV_record_01');
	const [ toggleRecSettings, setRecSettings ] = useState(false);
	const [ toggleVideoIcon, setVideoIcon ] = useState(false);
	const [ toggleAudioIcon, setAudioIcon ] = useState(false);
	const [ toggleAudioBar, setAudioBar ] = useState(false);
	const [ toggleCameraSource, setCameraSource ] = useState(false);
	const [ toggleAudioSource, setAudioSource ] = useState(false);
	const [ toggleFrontLight, setFrontLight ] = useState(true);
	const [ popupSettings, setPopupSettings ] = useState(false);
	const [ toggleLightColor, setLightColor ] = useState(false);
	const [ toggleFilter, setFilter ] = useState(false);

	// SHAPES
	const [ toggleShape, setShape ] = useState(false);
	const [ indexShape, setIndexShape ] = useState(0);
	const [ overlayOn, setOverlayOn ] = useState(false);

	function handleColor() {
		setLightColor(!toggleLightColor);
		setOverlayOn(true);
		setShape(false);
		setPicker(0);
	}

	function handleShapes() {
		setShape(!toggleShape);
		setOverlayOn(true);
		setLightColor(false);
		setPicker(3);
	}
	function videoIcon() {
		setAddSound(!addSound);

		if(!toggleAudioIcon) {
			setVideoIcon(!toggleVideoIcon);
			console.log(addSound);
		}
	}

	function audioIcon() {
		if(!toggleVideoIcon) {
			setAudioIcon(!toggleAudioIcon);
		}
	}

	const handleChangeRecName = e => {
		const newRecName = e.target.value;
		setRecName(newRecName);
	}

	function toggleCamera() {
		setCameraSource(!toggleCameraSource);
		setAudioSource(false);
	}

	function toggleAudio() {
		setAudioSource(!toggleAudioSource);
		setCameraSource(false);
	}

	const [ cameraIndex, setCameraIndex ] = useState(0);
	const [ audioIndex, setAudioIndex ] = useState(0);

	function handleCameraIndex(i) {
		setCameraIndex(i);
		setTimeout(() => { setCameraSource(false)}, 150);
	}

	function handleAudioIndex(i) {
		setAudioIndex(i);
		setTimeout(()=> { setAudioSource(false)}, 150);
	}

	function handleSortIndex(i) {
		setSort(i);
		setTimeout(() => { setFilter(false)}, 150);
	}

	useEffect((target) => {
		if(toggleRecSettings) {
			document.addEventListener('mousedown', handleClickOutsideSettings);
		} else {
			document.removeEventListener('mousedown', handleClickOutsideSettings);
		}

		if(toggleCameraSource) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		if(toggleAudioSource) {
			document.addEventListener('mousedown', handleClickOutside2);
		} else {
			document.removeEventListener('mousedown', handleClickOutside2);
		}

		if(toggleFilter) {
			document.addEventListener('mousedown', handleClickOutside3);
		} else {
			document.removeEventListener('mousedown', handleClickOutside3);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutsideSettings);
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('mousedown', handleClickOutside2);
			document.removeEventListener('mousedown', handleClickOutside3);
		}

	}, [toggleRecSettings, toggleCameraSource, toggleAudioSource, toggleFilter]);

	// BACKLIGHT TOGGLE

	const [ backlight, setBacklight ] = useState(false);

	// STOP WATCH
	let [running, setRunning] = useState(false);
	let [time, setTime] = useState(0);
	let [laps, setLaps] = useState([]);
	let timerId = useRef(null);
	let lapsRef = useRef(null);

	function convert(ms) {
		let milliseconds = Math.floor((ms % 1000) / 10);
		let seconds = Math.floor((ms / 1000) % 60);
		let minutes = Math.floor((ms / (1000 * 60)) % 60);
		let hour = Math.floor((ms / (10000 * 60)) % 60);
		hour = hour < 10 ? "0" + hour : hour;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

		return hour + ":" + minutes + ":" + seconds + ":" + milliseconds;
	}

	useEffect(() => {
		if (running) {
			timerId.current = setTimeout(() => {
			setTime(time + 37);
			}, 37);
		} else {
			clearTimeout(timerId.current);
		}
		if (laps.length > 0) {
			lapsRef.current.scrollTop = lapsRef.current.scrollHeight;
		}
		return () => {
			if (timerId.current) {
			clearTimeout(timerId.current);
			}
		};
	});

	const [ toggleRec, setRec ] = useState(false);

	const inputEl = useRef();
	const onButtonClick = () => {
		setRec(!toggleRec);

		if(!toggleRec) {
			setRunning(!running);
		} else {
			setRunning(false);
			setTime(0);
		}

		if(audioIndex !== 3) {
			setAudioBar(!toggleAudioBar);
		}

		if(toggleRec) {
			addClip();
		}
	};

	const [ lightPopup, setLigthPopup ] = useState(false);

	function toggleLightPopup() {
		setLigthPopup(!lightPopup);
	}

	function handleFrontlight() {
		setFrontLight(!toggleFrontLight);
		setPicker(0);
	}

	function handleBackLight() {
		setBacklight(!backlight);

		if(!backlight) {
			setFrontLight(false);
			setPicker(0);
		} else {
			setFrontLight(true);
		}
	}

	function closeAll() {
		setOpen(false);
		setBacklight(false);
		setFrontLight(true);
		setLightColor(false);
		setShape(false);
		setOverlayOn(false);
		setLigthPopup(false);
	}

	function resetScroll() {
	}

	const [ cameraA, setCameraA ] = useState(false);
	const [ scene1, setScene1 ] = useState(false);

	const [ timeCodeIndex, setTimeCode ] = useState(0);
	const [ cameraSortingIndex, setCameraSorting ] = useState(0);
	const [ dataTimeSortingIndex, setDateTimeSorting ] = useState(0);
	const [ clipNameSortingIndex, setClipNameSorting ] = useState(0);

	const query = {
		'OneColumn': {
			minWidth: 601,
			maxWidth: 1168
		},
		'active-split': {
			minWidth: 1169,
			maxWidth: 1567,
		},
		'active-split-three': {
			minWidth: 1568,
		},
	};

	return (
		<>
			{/* Mini Header */}
			<div className={open ? '':'none'}>
			<div className={toggleFrontLight ? 'none':''} style={!overlayOn ? {} : {'width':'100%', 'height':'100%','backgroundColor':'#000','position':'absolute','top':'0','left':'0','zIndex':'4'}}>
				{/* SOLID OVERLAY */}
				<div style={indexPicker !== 0 ? {'display':'none'}:{'display':'block'}}>
					{solidColorList.map((color, i)=>(
						<div
							key={i}
							className={classNames('overlay-solid-color', indexSolid === i ? '':'none')}
							style={ indexSolid === i ? {'backgroundColor': `${color.color}`, 'opacity': `${slider1/100}`} : {}}
							onClick={()=> setLightColor(!toggleLightColor)}>
						</div>
					))}
				</div>

				{/* GRADIENT OVERLAY */}
				<div style={indexPicker !== 1 ? {'display':'none'}:{'display':'block'}}>
					{solidColorList.map((color, i)=>(
						<div
							key={i}
							className={classNames('overlay-solid-color', indexSolid === i ? '':'none')}
							style={ indexSolid === i ? {'background': `linear-gradient(90deg, ${color.color}, #000`} : {}}
							onClick={()=> setLightColor(!toggleLightColor)}>
						</div>
					))}
				</div>

				{/* RADIAL OVERLAY */}
				<div style={indexPicker !== 2 ? {'display':'none'}:{'display':'block'}}>
					{solidColorList.map((color, i)=>(
						<div
							key={i}
							className={classNames('overlay-solid-color', indexSolid === i ? '':'none')}
							style={ indexSolid === i ? {'background': `radial-gradient(circle, ${color.color}, #000`} : {}}
							onClick={()=> setLightColor(!toggleLightColor)}>
						</div>
					))}
				</div>

				{/* SHAPE */}
				<div style={indexPicker !== 3 ? {'display':'none'}:{'display':'block'}}>
					{shapeList.map((shape, i)=> (
						<div
							key={i}
							className={classNames(`overlay-shape shape-${shape.id}`, indexShape === i ? '':'none')}
							style={ indexSolid === i ? {'backgroundColor': `${shape.color}`} : {}}
							onClick={handleShapes}>
						</div>
					))}
				</div>
			</div>
			</div>

			<div className="MiniHeader two-columns">
				<div>
					<div className="icon sidepanel"></div>
					<div className="arrow arrow borderR"></div>
					<div className="icon import"></div>
					<div className="icon import_folder"></div>
					<div className="icon record_media borderL" style={{'width':'40px'}} onClick={()=> setOpen(!open)}></div>

					{/* POPUP GOES HERE */}
					<Dialog
						open={open}
						onClose={closeAll}
						PaperComponent={PaperComponent}
						aria-labelledby="MiniHeader">

						<div className={classNames('overlay-disable', toggleRec ? 'none' : 'none')}></div>

						<div id="MiniHeader" className="MiniHeader" style={!lightPopup ? {'display':'grid'} :{'display':'none'}}>
							<div>
								<div className="icon close" onClick={closeAll} style={{'zIndex':'1'}}></div>
							</div>
							<div>Live Recording</div>
							<div>
								<div className="icon contextmenu" onClick={()=> setRecSettings(!toggleRecSettings)} style={{'zIndex':'1'}}></div>
							</div>
						</div>

						<div className={classNames('MiniHeader v2')} style={!lightPopup ? {'display':'grid'} :{'display':'none'}}>
							<div>
								<span>File Name</span>
								<input
									className={classNames('recording-flow')}
									type="text"
									value={recName}
									onChange={handleChangeRecName}
									style={toggleRec ? {'display': 'none'} : {'display':'block'}}/>
								<span className={toggleRec ? '' : 'none'}>{recName}</span>
							</div>

							<div></div>

							<div>
								<div className={classNames('icon icon-rec-flow-camera borderL', toggleVideoIcon ? 'active' : '')} style={{'width':'35px'}} onClick={toggleCamera}></div>
								<div className="arrow arrow borderR" onClick={toggleCamera}></div>

								<div className={classNames('icon icon-rec-flow-audio', audioIndex === 3 ? '' : 'active')} style={{'width':'35px'}} onClick={toggleAudio}></div>
								<div className="arrow arrow" onClick={toggleAudio}></div>
							</div>
						</div>

						{/* SUBMENU */}
						<div ref={drops} className="subMenu record-settings" style={toggleRecSettings ? {'display':'block'}:{'display':'none'}}>
							<div onClick={()=> setPopupSettings(!popupSettings)}>Record Settings</div>
						</div>

						<div ref={drops} className="subMenu camera-sub" style={toggleCameraSource ? {'display':'block'}:{'display':'none'}}>
							{cameraSource.map((source, i) => (
								<div key={i} className={cameraIndex === i ? 'active' : ''} onClick={()=> handleCameraIndex(i)}>{source.label}</div>
							))}
						</div>

						<div ref={drops} className="subMenu audio-sub" style={toggleAudioSource ? {'display':'block'}:{'display':'none'}}>
							{audioSource.map((source, i) => (
								<div key={i} className={audioIndex === i ? 'active' : ''} onClick={()=> handleAudioIndex(i)}>{source.label}</div>
							))}
						</div>

						{/* CONTENT */}
						<div className="video-popup-content">

							{/* VIDEO */}
							<div className={classNames('source', toggleVideoIcon ? 'audio-only':'', toggleAudioBar ? 'active':'')}  style={!lightPopup ? {} :{'width':'100%'}}>
								<video
									autoplay="autoplay"
									loop
									muted
									ref={inputEl}
									src={cameraIndex === 0 ? myvideo : `${myvideo2+'#t=13'}`}
									type="video/mp4"/>
							</div>

							{/* AUDIO */}
							<div className={classNames('video-source-audio', !lightPopup ? '':'active')}>
								<div className={classNames('audio-bar', audioIndex !== 3 ? 'active' : '')}>
									<div className="audio-bar-shadow"></div>
									<div className="audio-bar-shadow right"></div>
								</div>
							</div>

							{/* SETTINGS */}
							<div className="record-settings-content" style={popupSettings ? {'display':'block'}:{'display':'none'}}>
								<div className="MiniHeader">
									<div>
										<div className="icon close" onClick={()=> setPopupSettings(false)}></div>
									</div>

									<div>Live Recording</div>

									<div></div>
								</div>

								<img src={imgSettings} width="1040" alt=""/>
							</div>

							{/* VTR RECORDING FLOW */}
							<div className="light-video-recording-bar" style={!lightPopup ? {'display':'none'}:{'display':'block'}}>
								<div className={classNames('rec', toggleRec ? 'active':'')} style={toggleRec ? {'pointerEvents':'none'}:{'pointerEvents':'auto'}} onClick={onButtonClick}></div>
								<div className={classNames('stop', toggleRec ? 'active':'')} style={toggleRec ? {'pointerEvents':'auto'}:{'pointerEvents':'none'}} onClick={onButtonClick}></div>
								<div className={classNames('timer', toggleRec ? 'active':'')}>{convert(time)}</div>
								<div className="toggle-maximize" onClick={toggleLightPopup}></div>
							</div>

							<div className="video-recording-bar" style={!lightPopup ? {'display':'grid'} :{'display':'none'}}>
								<div className={classNames('backlight', !backlight ? '':'active')} style={toggleRec ? {'pointerEvents':'none'}:{'pointerEvents':'auto'}} onClick={handleBackLight}></div>
								<div className={classNames('rec', toggleRec ? 'active':'')} style={toggleRec ? {'pointerEvents':'none'}:{'pointerEvents':'auto'}} onClick={onButtonClick}></div>
								<div className={classNames('stop', toggleRec ? 'active':'')} style={toggleRec ? {'pointerEvents':'auto'}:{'pointerEvents':'none'}} onClick={onButtonClick}></div>
								<div className={classNames('timer', toggleRec ? 'active':'')}>{convert(time)}</div>
								<div className={classNames('minimize', !lightPopup ? '':'active')} onClick={toggleLightPopup}></div>

								{/* BACKLIGHT SETTINGS */}
								<div className="backlight-settings" style={!backlight ? {'display':'none'} : {'display':'flex'}}>

									{/* FRONT LIGHT */}
									<div className="front-light-toggle">
										<div className={classNames('Toggle', toggleFrontLight ? 'active':'')} onClick={handleFrontlight}></div>
										<div className="LabelToggle">Front light</div>
									</div>

									{/* LIGHT COLOR / SHAPE / INTENSITY */}
									<div className="color-shape-container" style={toggleFrontLight ? {'opacity':'0.3','pointerEvents':'none'}:{'opacity':'1'}}>
										<div className="LabelToggle child1">Light Color</div>

										{solidColorList.map((color, i)=>(
											<div
												key={i}
												className={classNames('color-shape child1', indexSolid === i ? '':'none')}
												style={ indexSolid === i ? {'backgroundColor': `${color.color}`} : {}}
												onClick={handleColor}>
											</div>
										))}

										<div className="LabelToggle child2">Shape</div>

										{shapeList.map((shape, i)=> (
											<div
												key={i}
												className={classNames(`color-shape child2 icon-shape-${shape.id}`, indexShape === i ? '':'none')}
												onClick={handleShapes}>
											</div>
										))}

										<div className={classNames("Row row-slider")} style={{'width':'200px', 'position':'absolute', 'top':'10px', 'right':'30px'}}>
											<div className={classNames('InputLabel', sld1 ? "active" : "")} style={{'top':'1px', 'left':'16px'}} onDoubleClick={()=>resetSlider1()}>Brightness</div>
											<RcSlider>
												<Input className="input" type="text" value={slider1} min="0" max="100" onChange={(event) => setSlider1(event.target.value)}/>
												<Slider
													className={classNames('white', handleSlider1 === true ? 'active': '')}
													onChange={sliderFunc1}
													onBeforeChange={()=>setSld1(!sld1)}
													onAfterChange={()=>setSld1(!sld1)}
													startPoint={50} value={slider1} />
											</RcSlider>
										</div>
									</div>

									{/* COLOR PICKER */}
									<div className={classNames('color-picker-container')} style={toggleLightColor ? {'display':'block'}:{'display':'none'}}>
										<div className="menu-picker">
											{colorPickerType.filter(picker => picker.id < 3).map((picker, i) => (
												<div
													key={i}
													className={classNames(picker.classe, indexPicker === i ? 'active':'')}
													onClick={()=> setPicker(i)}>
												</div>
											))}
										</div>

										<div className="slider-container" style={indexPicker !== 0 ? {'display':'block'}:{'display':'none'}}>
											{/* GRADIENT OVERLAY */}
											<div style={indexPicker !== 1 ? {'display':'none'}:{'display':'block'}}>
												{solidColorList.map((color, i)=>(
													<div
														key={i}
														className={classNames('slider-gradient-radial', indexSolid === i ? '':'none')}
														style={ indexSolid === i ? {'background': `linear-gradient(90deg, ${color.color}, #000`} : {}}>
													</div>
												))}
											</div>

											{/* RADIAL OVERLAY */}
											<div style={indexPicker !== 2 ? {'display':'none'}:{'display':'block'}}>
												{solidColorList.map((color, i)=>(
													<div
														key={i}
														className={classNames('slider-gradient-radial', indexSolid === i ? '':'none')}
														style={ indexSolid === i ? {'background': `radial-gradient(circle, ${color.color}, #000`} : {}}>
													</div>
												))}
											</div>
										</div>

										<div className="color-container">
											{solidColorList.map((color, i)=> (
												<div
													key={i}
													className={classNames('color-square', indexSolid === i ? 'active':'')}
													style={{'backgroundColor': `${color.color}`}}
													onClick={()=> setSolid(i)}>
												</div>
											))}
										</div>

										<img src={ColorSelector} width="205" alt=""/>
									</div>

									{/* SHAPE */}
									<div className="shape-container" style={toggleShape ? {'display':'block'}:{'display':'none'}}>
										{shapeList.map((shape, i)=> (
											<div
												key={i}
												className={classNames(`icon icon-shape-${shape.id}`, indexShape === i ? 'active':'')}
												onClick={()=> setIndexShape(i)}>
											</div>
										))}
									</div>

								</div>
							</div>
						</div>
					</Dialog>
					{/* END POPUP */}

					<div className="icon sync_clip borderR borderL" style={{'width':'40px'}}></div>
				</div>

				<div>
					<div className="icon meta_data active"></div>
					<div className="icon thumbs" style={{'margin':'0 0px'}}></div>
					<div className="icon strip"></div>
					<div className="icon list" style={{'margin':'0 0px'}}></div>
					<input type="text" placeholder="Search" style={{'width':'128px'}}/>
					<div className="icon filter" onClick={()=> setFilter(!toggleFilter)}></div>
				</div>

				{/* SORT CLIPS MENU */}
				<div ref={drops} className={classNames('menu-filter-media-pool', toggleFilter ? '':'none')}>
					<h3>Sort by Media</h3>

					{sortMenu.map((item, i)=> (
						<div className={classNames('item', sortIndex === i ? 'active':'')} onClick={()=> handleSortIndex(i)}>
							<div className={`icon ${item.css}`}></div>
							<span>{item.label}</span>
						</div>
					))}

					{sortMenuOrder.map((item, i)=> (
						<div className={classNames('item', sortOrder === i ? 'active':'')} onClick={()=> setOrder(i)}>
							<span className="order">{item.label}</span>
						</div>
					))}
				</div>
			</div>

			{/* Content */}
			<div className="MediaPoolContent">
					<div className="breadcrumb"><span>Master</span> Doc Interview</div>

				{/* DEFAULT CLIPS VIEW */}
				<div className="clipsWrapper" style={sortIndex !== -1 ? {'display':'none'} : {'display':'block'}}>
					{newClips.map((clip, i)=> (
						<div className="clipMediaPool">
							<div key={i} className={classNames(`clip clip-${i} ${clip.className}`, clipsIndex === i ? 'active':'')} onClick={()=> setClipsIndex(i)}></div>
							<div className="clip-title">{clip.clipname}</div>
						</div>
					))}
				</div>

				{/* TIMECODE */}
				<div className={classNames('clipsWrapper')} style={sortIndex !== 0 ? {'display':'none'} : {'display':'block', 'padding':'0 0 20px 0px'}}>
					<ContainerQuery query={query}>
						{(params) => (
							<div className="clipMediaPool-container">
								{timeCodeList.map((clip, i) => (
								<>
									<div className={classNames('non-sticky-diaz', clip.header === false ? 'none':'', clip.header !== false ? 'sticky2':'')}>
										<h3 style={clip.header === false ? {'display':'none'}: {'color':'#fff'}}>{clip.header}</h3>
									</div>
									<div className={classNames('large-clip', params, timeCodeIndex === i ? 'active':'')} onClick={() => setTimeCode(i)}>
										<div className={`clip-thumb ${clip.thumb}`}></div>
										<div className="clip-description">
											<div className="row-description">
												<div className="title">{clip.title}</div>
											</div>
											<div className="row-description">
												<div className="clip-color" style={{'backgroundColor':`${clip.clipcolor}`}}></div>
												<div className="subtitle">{clip.subtitle1}</div>
											</div>
											<div className={classNames('row-description', clip.meta ? 'meta' : '')}>
												<div className="subtitle">{clip.subtitle2}</div>
											</div>
										</div>
									</div>
								</>
								))}
							</div>
						)}
					</ContainerQuery>
				</div>

				{/* CAMERA */}
				<div className="clipsWrapper" style={sortIndex !== 1 ? {'display':'none'} : {'display':'block','padding':'0 0 20px 0'}}>
					<ContainerQuery query={query}>
						{(params) => (
							<div className="clipMediaPool-container">
								{cameraSorting.map((clip, i) => (
								<>
									<div className={classNames('non-sticky-diaz', clip.header === false ? 'none':'', clip.stickyBottom === true ? `stickyCamera ${clip.identifier}`:'')}>
										<h3 style={clip.header === false ? {'display':'none'}: {'color':'#fff'}}>{clip.header}</h3>
									</div>
									<div className={classNames('large-clip', params, cameraSortingIndex === i ? 'active':'')} onClick={() => setCameraSorting(i)}>
										<div className={`clip-thumb ${clip.thumb}`}></div>
										<div className="clip-description">
											<div className="row-description">
												<div className="title">{clip.title}</div>
											</div>
											<div className="row-description">
												<div className="clip-color" style={{'backgroundColor':`${clip.clipcolor}`}}></div>
												<div className="subtitle">
													{clip.subtitle1}
													<span>{clip.span1_1}</span>
													<span>{clip.span1_2}</span>
													<span>{clip.span1_3}</span>
												</div>
											</div>
											<div className={classNames('row-description', clip.meta ? 'meta' : '')}>
												<div className="subtitle">
													{clip.subtitle2}
													<span>{clip.span2_1}</span>
													<span>{clip.span2_2}</span>
													<span>{clip.span2_3}</span>
												</div>
											</div>
										</div>
									</div>
								</>
								))}
							</div>
						)}
					</ContainerQuery>
				</div>

				{/* DATE / TIME */}
				<div className="clipsWrapper" style={sortIndex !== 2 ? {'display':'none'} : {'display':'block','padding':'0 0 20px 0'}}>
					<ContainerQuery query={query}>
						{(params) => (
							<div className="clipMediaPool-container">
								{dateTimeSorting.map((clip, i) => (
								<>
									<div className={classNames('non-sticky-diaz', clip.header === false ? 'none':'', clip.header !== false ? 'sticky2':'')}>
										<h3 style={clip.header === false ? {'display':'none'}: {'color':'#fff'}}>{clip.header}</h3>
									</div>
									<div className={classNames('large-clip', params, dataTimeSortingIndex === i ? 'active':'')} onClick={() => setDateTimeSorting(i)}>
										<div className={`clip-thumb ${clip.thumb}`}></div>
										<div className="clip-description">
											<div className="row-description">
												<div className="title">{clip.title}</div>
											</div>
											<div className="row-description">
												<div className="clip-color" style={{'backgroundColor':`${clip.clipcolor}`}}></div>
												<div className="subtitle">
													{clip.subtitle1}
													<span>{clip.span1_1}</span>
													<span>{clip.span1_2}</span>
													<span>{clip.span1_3}</span>
												</div>
											</div>
											<div className={classNames('row-description', clip.meta ? 'meta' : '')}>
												<div className="subtitle">
													{clip.subtitle2}
													<span>{clip.span2_1}</span>
													<span>{clip.span2_2}</span>
													<span>{clip.span2_3}</span>
												</div>
											</div>
										</div>
									</div>
								</>
								))}
							</div>
						)}
					</ContainerQuery>
				</div>

				{/* CLIP NAME */}
				<div className="clipsWrapper" style={sortIndex !== 3 ? {'display':'none'} : {'display':'block','padding':'0 0 20px 0'}}>
					<ContainerQuery query={query}>
						{(params) => (
							<div className="clipMediaPool-container">
								{clipNameSorting.map((clip, i) => (
								<>
									<div className={classNames('non-sticky-diaz', clip.header === false ? 'none':'', clip.stickyBottom === true ? `stickyClipName ${clip.identifier}`:'')}>
										<h3 style={clip.header === false ? {'display':'none'}: {'color':'#fff'}}>{clip.header}</h3>
									</div>
									<div className={classNames('large-clip', params, clipNameSortingIndex === i ? 'active':'')} onClick={() => setClipNameSorting(i)}>
										<div className={`clip-thumb ${clip.thumb}`}></div>
										<div className="clip-description">
											<div className="row-description">
												<div className="title">{clip.title}</div>
											</div>
											<div className="row-description">
												<div className="clip-color" style={{'backgroundColor':`${clip.clipcolor}`}}></div>
												<div className="subtitle">
													{clip.subtitle1}
													<span>{clip.span1_1}</span>
													<span>{clip.span1_2}</span>
													<span>{clip.span1_3}</span>
												</div>
											</div>
											<div className={classNames('row-description', clip.meta ? 'meta' : '')}>
												<div className="subtitle">
													{clip.subtitle2}
													<span>{clip.span2_1}</span>
													<span>{clip.span2_2}</span>
													<span>{clip.span2_3}</span>
												</div>
											</div>
										</div>
									</div>
								</>
								))}
							</div>
						)}
					</ContainerQuery>
				</div>

				{/* SCENE SHOT */}
				<div className={classNames('clipsWrapper')} style={sortIndex !== 5 ? {'display':'none'} : {'display':'block','padding':'0 0 20px 0'}}>
					<ContainerQuery query={query}>
						{(params) => (
							<div className="clipMediaPool-container">
								{sceneShotSorting.map((clip, i) => (
								<>
									<div className={classNames('non-sticky-diaz', clip.header === false ? 'none':'', clip.stickyBottom === true ? `stickySceneShot ${clip.identifier}`:'')}>
										<h3 style={clip.header === false ? {'display':'none'}: {'color':'#fff'}}>{clip.header}</h3>
									</div>
									<div className={classNames('large-clip', params, clipNameSortingIndex === i ? 'active':'')} onClick={() => setClipNameSorting(i)}>
										<div className={`clip-thumb ${clip.thumb}`}></div>
										<div className="clip-description">
											<div className="row-description">
												<div className="title">{clip.title}</div>
											</div>
											<div className="row-description">
												<div className="clip-color" style={{'backgroundColor':`${clip.clipcolor}`}}></div>
												<div className="subtitle">
													{clip.subtitle1}
													<span>{clip.span1_1}</span>
													<span>{clip.span1_2}</span>
													<span>{clip.span1_3}</span>
												</div>
											</div>
											<div className={classNames('row-description', clip.meta ? 'meta' : '')}>
												<div className="subtitle">
													{clip.subtitle2}
													<span>{clip.span2_1}</span>
													<span>{clip.span2_2}</span>
													<span>{clip.span2_3}</span>
												</div>
											</div>
										</div>
									</div>
								</>
								))}
							</div>
						)}
					</ContainerQuery>
				</div>

				{/* CLIP COLOR */}
				<div className="clipsWrapper" style={sortIndex !== 6 ? {'display':'none'} : {'display':'block','padding':'0 0 20px 0'}}>
					<ContainerQuery query={query}>
						{(params) => (
							<div className="clipMediaPool-container">
								{colorSorting.map((clip, i) => (
								<>
									<div className={classNames('non-sticky-diaz', clip.header === false ? 'none':'', clip.stickyBottom === true ? `stickyClipColor ${clip.identifier}`:'')}>
										<div className="clip-color tiny" style={{'backgroundColor':`${clip.clipcolor}`}}></div>
										<h3 className="with-color" style={clip.header === false ? {'display':'none'}: {'color':'#fff'}}>
											{clip.header}
										</h3>
									</div>
									<div className={classNames('large-clip', params, clipNameSortingIndex === i ? 'active':'')} onClick={() => setClipNameSorting(i)}>
										<div className={`clip-thumb ${clip.thumb}`}></div>
										<div className="clip-description">
											<div className="row-description">
												<div className="clip-color tiny" style={{'backgroundColor':`${clip.clipcolor}`}}></div>
												<div className="title">{clip.title}</div>
											</div>
											<div className="row-description">
												<div className="subtitle">
													{clip.subtitle1}
												</div>
											</div>
											<div className={classNames('row-description', clip.meta ? 'meta' : '')}>
												<div className="subtitle">
													{clip.subtitle2}
												</div>
											</div>
										</div>
									</div>
								</>
								))}
							</div>
						)}
					</ContainerQuery>
				</div>

				{/* DATE USED */}
				<div className="clipsWrapper" style={sortIndex !== 7 ? {'display':'none'} : {'display':'block','padding':'0 0 20px 0'}}><h1>date used</h1></div>

				{/* KEYWORDS */}
				<div className="clipsWrapper" style={sortIndex !== 8 ? {'display':'none'} : {'display':'block','padding':'0 0 20px 0'}}>
					<ContainerQuery query={query}>
						{(params) => (
							<div className="clipMediaPool-container">
								{keyWordsSorting.map((clip, i) => (
								<>
									<div className={classNames('non-sticky-diaz', clip.header === false ? 'none':'', clip.stickyBottom === true ? `stickyKeyWords ${clip.identifier}`:'')}>
										<h3 style={clip.header === false ? {'display':'none'}: {'color':'#fff'}}>
											{clip.header}
										</h3>
									</div>
									<div className={classNames('large-clip', params, clipNameSortingIndex === i ? 'active':'')} onClick={() => setClipNameSorting(i)}>
										<div className={`clip-thumb ${clip.thumb}`}></div>
										<div className="clip-description">
											<div className="row-description">
												<div className="title">{clip.title}</div>
											</div>
											<div className="row-description">
												<div className="clip-color" style={{'backgroundColor':`${clip.clipcolor}`}}></div>
												<div className="subtitle">
													{clip.subtitle1}
												</div>
											</div>
											<div className={classNames('row-description', clip.meta ? 'meta' : '')}>
												<div className="subtitle">
													{clip.subtitle2}
												</div>
											</div>
										</div>
									</div>
								</>
								))}
							</div>
						)}
					</ContainerQuery>
				</div>
			</div>

			{/* Viewer ToolBar */}
			<div className="editTools">
				<div>
					<div className="boring"></div>
					<div className="split"></div>
				</div>

				<div>
					<div className="insert"></div>
					<div className="to_end"></div>
					<div className="ripple_overwrite"></div>
					<div className="closeup"></div>
					<div className="put_on_top"></div>
					<div className="source_write"></div>
				</div>

				<div>
					<div className="transition_cycle"></div>
					<div className="transition_add"></div>
					<div className="transition_match"></div>
				</div>
			</div>
		</>
	)
}

export default MediaPool;
