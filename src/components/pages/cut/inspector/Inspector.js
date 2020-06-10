
import React, { useState } 	from 'react';
import classNames 			from 'classnames';

// CLIP COMPONENTS
import Video  			from './clip/video/Video'
import Sizing 			from './clip/sizing/Sizing';
import Audio 			from './clip/audio/Audio';
import Color 			from './clip/color/Color';
import Effects 			from './clip/effects/Effects';
import File 			from './clip/file/File';

// TEXT COMPONENTS
import TextText 		from './text/text';
import TextFrame 		from './text/frame';
import TextStyle 		from './text/style';
import TextSettings 	from './text/settings';
import TextVideo 		from './text/video';

// GENERATOR COMPONENTS
import GeneratorSizing 	from './generator/sizing';
import GeneratorVideo 	from './generator/video';

// TRANSITION COMPONENTS
import TransitionVideo 	from './transition/video';
import TransitionAudio 	from './transition/audio';

function Inspector(props) {
	const clipsNav = [
		{ id: 0, },
		{ id: 1, },
		{ id: 2, },
		{ id: 3, },
	]

	const InspectorNavigation = [
		{ id: 0, label: 'Video', 	component: <Video/> },
		{ id: 1, label: 'Sizing', 	component: <Sizing/> },
		{ id: 2, label: 'Audio', 	component: <Audio/> },
		{ id: 3, label: 'Color', 	component: <Color/> },
		{ id: 4, label: 'Effects', 	component: <Effects/> },
		{ id: 5, label: 'File', 	component: <File/> },
	]

	const textNavigation = [
		{ id: 0, label: 'Text', 	component: <TextText/> },
		{ id: 0, label: 'Frame', 	component: <TextFrame/> },
		{ id: 0, label: 'Style', 	component: <TextStyle/> },
		{ id: 0, label: 'Settings', component: <TextSettings/> },
		{ id: 0, label: 'Video', 	component: <TextVideo/> },
	]

	const generatorNavigation = [
		{ id: 0, label: 'Video', 	component: <GeneratorVideo/> },
		{ id: 1, label: 'Sizing', 	component: <GeneratorSizing/> },
	]

	const transitionNavigation = [
		{ id: 0, label: 'Video', 	component: <TransitionVideo/> },
		{ id: 0, label: 'Audio', 	component: <TransitionAudio/> },
	]

	const [ activeClip, setActiveClip ] = useState(0);
	const [ activeIndex, setActiveIndex ] = useState(0);
	const [ activeTextIndex, setTextActiveIndex ] = useState(0);
	const [ activeGenIndex, setGenActiveIndex ] = useState(0);
	const [ activeTransIndex, setTransActiveIndex ] = useState(0);

	return (
		<>
			<div className="InspectorContainer">

				{/* NAVIGATIONS */}
				<div className="NavWrapper">
					{/* CLIP */}
					<div className={classNames('', props.comps !== 0 ? "none" : "")}>
						<div className="InspectorHeader">D004_07081656_C011.braw</div>
						<div className="InspectorNav-Wrapper">
							{InspectorNavigation.map((nav, i)=>(
								<div key={i}onClick={()=> setActiveIndex(i)} className={classNames('InspectorNav navClip', i === activeIndex ? 'active' : '')}>
									<span>{nav.label}</span>
								</div>
							))}
						</div>
					</div>

					{/* TEXT TEMPLATE */}
					<div className={classNames('', props.comps !== 1 ? "none" : "")}>
					<div className="InspectorHeader">Fusion Title - Text+</div>
						<div className="InspectorNav-Wrapper">
							{textNavigation.map((navText, i) => (
								<div key={i} onClick={()=> setTextActiveIndex(i)} className={classNames('InspectorNav navText', i === activeTextIndex ? 'active' : '')}>
									<span>{navText.label}</span>
								</div>
							))}
						</div>
					</div>

					{/* GENERATOR */}
					<div className={classNames('', props.comps !== 2 ? "none" : "")}>
						<div className="InspectorHeader">Generator</div>
						<div className="InspectorNav-Wrapper">
							{generatorNavigation.map((navGen, i)=>(
								<div key={i} onClick={()=> setGenActiveIndex(i)} className={classNames('InspectorNav navGen', i === activeGenIndex ? 'active' : '')}>
									<span>{navGen.label}</span>
								</div>
							))}
						</div>
					</div>

					{/* TRANSITIONS */}
					<div className={classNames('', props.comps !== 3 ? "none" : "")}>
						<div className="InspectorHeader">Transition</div>
						<div className="InspectorNav-Wrapper">
							{transitionNavigation.map((navTrans, i)=>(
								<div key={i} onClick={()=> setTransActiveIndex(i)} className={classNames('InspectorNav navTrans', i === activeTransIndex ? 'active' : '')}>
									<span>{navTrans.label}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* CONTENTS */}
				<div className="InspectorWrapper">
					{/* CLIP */}
					<div style={props.comps !== 0 ? {'display':'none'} : {'display':'contents'}}>
						{InspectorNavigation.map((comp, i) => (
							<div key={i} className={classNames('', i !== activeIndex ? "none": "")} style={{'overflow':'scroll', 'height':'100%'}}>{comp.component}</div>
						))}
					</div>

					{/* TEXT TEMPLATE */}
					<div style={props.comps !== 1 ? {'display':'none'} : {'display':'contents'}}>
						{textNavigation.map((compText, i) => (
							<div key={i} className={classNames('', i !== activeTextIndex ? "none": "")} style={{'overflow':'scroll', 'height':'100%'}}>{compText.component}</div>
						))}
					</div>

					{/* GENERATOR */}
					<div style={props.comps !== 2 ? {'display':'none'} : {'display':'contents'}}>
						{generatorNavigation.map((compGen, i) => (
							<div key={i} className={classNames('', i !== activeGenIndex ? "none": "")} style={{'overflow':'scroll', 'height':'100%'}}>{compGen.component}</div>
						))}
					</div>

					{/* TRANSITIONS */}
					<div style={props.comps !== 3 ? {'display':'none'} : {'display':'contents'}}>
						{transitionNavigation.map((compText, i) => (
							<div key={i} className={classNames('', i !== activeTransIndex ? "none": "")} style={{'overflow':'scroll', 'height':'100%'}}>{compText.component}</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Inspector;
