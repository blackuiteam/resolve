
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

function Transitions() {

	const tabs = [
		{ id: 0, label: 'Video' },
		{ id: 1, label: 'Audio' },
	];

	const transitionsTitle = [
		{ id: 0, label: 'Additive Dissolve'},
		{ id: 1, label: 'Bluer Dissolve'},
		{ id: 2, label: 'Cross Dissolve'},
		{ id: 3, label: 'Dip To Color Dissolve'},
		{ id: 4, label: 'Non-Additive Dissolve'},
		{ id: 5, label: 'Smooth Cut'},
		{ id: 6, label: 'Arrow Iris'},
		{ id: 7, label: 'Cross Iris'},
		{ id: 8, label: 'Diamond Iris'},
		{ id: 9, label: 'Eye Iris'},
		{ id: 10, label: 'Hexagon Iris'},
		{ id: 11, label: 'Oval Iris'},
		{ id: 12, label: 'Pentagon Iris'},
		{ id: 13, label: 'Triangle Iris'},
		{ id: 14, label: 'Push'},
		{ id: 15, label: 'Slide'},
		{ id: 16, label: 'Barn Door'},
		{ id: 17, label: 'Box'},
		{ id: 18, label: 'Heart'},
		{ id: 19, label: 'Star'},
		{ id: 20, label: 'Triangle Left'},
		{ id: 21, label: 'Triangle Right'},
		{ id: 22, label: 'Band Wipe'},
		{ id: 23, label: 'Center Wipe'},
		{ id: 24, label: 'Clock Wipe'},
		{ id: 25, label: 'Edge Wipe'},
		{ id: 26, label: 'Radial Wipe'},
		{ id: 27, label: 'Spiral Wipe'},
		{ id: 28, label: 'Split'},
		{ id: 29, label: 'Venetian Blind Wipe'},
		{ id: 30, label: 'X Wipe'},
		{ id: 31, label: 'Cross Dissolve'},
		{ id: 32, label: 'Noise Dissolve'},
		{ id: 33, label: 'Slice Push'},
		{ id: 34, label: 'Cross Fade +3 dB'},
		{ id: 35, label: 'Cross Fade -3 dB'},
		{ id: 36, label: 'Cross Fade 0 dB'},
	];

	const [ videoAudio, setVideoAudio ] = useState(0);

	const [ dissolve, setDissolve ] = useState(-1);
	const [ iris, setIris ] = useState(-1);
	const [ motion, setMotion ] = useState(-1);
	const [ shape, setShape ] = useState(-1);
	const [ wipe, setWipe ] = useState(-1);
	const [ transitions, setTransitions ] = useState(-1);
	const [ crossFade, setCrossFade ] = useState(-1);

	function handleDissolve(i) {
		setDissolve(i);
		setIris(-1);
		setMotion(-1);
		setShape(-1);
		setWipe(-1);
		setTransitions(-1);
	}

	function handleIris(i) {
		setDissolve(-1);
		setIris(i);
		setMotion(-1);
		setShape(-1);
		setWipe(-1);
		setTransitions(-1);
	}

	function handleMotion(i) {
		setDissolve(-1);
		setIris(-1);
		setMotion(i);
		setShape(-1);
		setWipe(-1);
		setTransitions(-1);
	}

	function handleShape(i) {
		setDissolve(-1);
		setIris(-1);
		setMotion(-1);
		setShape(i);
		setWipe(-1);
		setTransitions(-1);
	}

	function handleWipe(i) {
		setDissolve(-1);
		setIris(-1);
		setMotion(-1);
		setShape(-1);
		setWipe(i);
		setTransitions(-1);
	}

	function handleTransitions(i) {
		setDissolve(-1);
		setIris(-1);
		setMotion(-1);
		setShape(-1);
		setWipe(-1);
		setTransitions(i);
	}

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
			<div className="TransitionsContent" style={videoAudio === 0 ? {'display':'block'} : {'display':'none'}}>
				<div className="title">Dissolve</div>
				<div className="content">
					{transitionsTitle.filter(item => item.id < 6).map((item, i)=> (
						<div className={classNames(`row`, dissolve === i ? 'active':'')} onClick={()=> handleDissolve(i)}>
							<div className="row-type transition"></div>
							<span>{item.label}</span>
							<div className="favorite-title"></div>
						</div>
					))}
				</div>

				<div className="title">Iris</div>
				<div className="content">
					{transitionsTitle.filter(item => item.id > 6 && item.id < 14).map((item, i)=> (
						<div className={classNames(`row`, iris === i ? 'active':'')} onClick={()=> handleIris(i)}>
							<div className="row-type transition"></div>
							<span>{item.label}</span>
							<div className="favorite-title"></div>
						</div>
					))}
				</div>

				<div className="title">Motion</div>
				<div className="content">
					{transitionsTitle.filter(item => item.id > 13 && item.id < 16).map((item, i)=> (
						<div className={classNames(`row`, motion === i ? 'active':'')} onClick={()=> handleMotion(i)}>
							<div className="row-type transition"></div>
							<span>{item.label}</span>
							<div className="favorite-title"></div>
						</div>
					))}
				</div>

				<div className="title">Shape</div>
				<div className="content">
					{transitionsTitle.filter(item => item.id > 15 && item.id < 22).map((item, i)=> (
						<div className={classNames(`row`, shape === i ? 'active':'')} onClick={()=> handleShape(i)}>
							<div className="row-type transition"></div>
							<span>{item.label}</span>
							<div className="favorite-title"></div>
						</div>
					))}
				</div>

				<div className="title">Wipe</div>
				<div className="content">
					{transitionsTitle.filter(item => item.id > 21 && item.id < 31).map((item, i)=> (
						<div className={classNames(`row`, wipe === i ? 'active':'')} onClick={()=> handleWipe(i)}>
							<div className="row-type transition"></div>
							<span>{item.label}</span>
							<div className="favorite-title"></div>
						</div>
					))}
				</div>

				<div className="title">Fusion Transitions</div>
				<div className="content">
					{transitionsTitle.filter(item => item.id > 30 && item.id < 34).map((item, i)=> (
						<div className={classNames(`row`, transitions === i ? 'active':'')} onClick={()=> handleTransitions(i)}>
							<div className="row-type transition"></div>
							<span>{item.label}</span>
							<div className="favorite-title"></div>
						</div>
					))}
				</div>
			</div>

			<div className="TransitionsContent" style={videoAudio === 1 ? {'display':'block'} : {'display':'none'}}>
				<div className="title">Cross Fade</div>
				<div className="content">
					{transitionsTitle.filter(item => item.id > 33).map((item, i)=> (
						<div className={classNames(`row`, crossFade === i ? 'active':'')} onClick={()=> setCrossFade(i)}>
							<div className="row-type transition"></div>
							<span>{item.label}</span>
							<div className="favorite-title"></div>
						</div>
					))}
				</div>
			</div>

			{/* Viewer ToolBar */}
			<div className="editTools">
				<div>
					<div className="boring"></div>
					<div className="split"></div>
				</div>

				<div>
					<div className="out"></div>
					<div className="center"></div>
					<div className="in"></div>
				</div>

				<div></div>
			</div>
		</>
	)
}

export default Transitions;
