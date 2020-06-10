
import React, { useState } 	from 'react';
import Split 				from 'react-split';

// STYLES
import classNames from 'classnames';
import { Header } 	from '../../../styles/_header';
import { Content } 	from '../../../styles/_content';
import {
	MiniTimelineCut,
	MiniTimelineSideBar,
	MiniTimelineClips,
	TimelineCut,
	TimelineSideBar,
	TimelineClips } from '../../../styles/_timeline-cut';

// COMPONENTS
import ViewerContent  from './ViewerContent';
import TimelineContent from './TimelineContent';
import Inspector from './inspector/Inspector';


function Cut() {

	const [ inspector, setInspector ] = useState(true);
	const [ viewerToolsIndex, setViewerTools ] = useState(0);

	const ViewerTools = [
		{ id: 0, class: 'media', label: 'Media Pool' },
		{ id: 1, class: 'syncbin', label: 'Sync Bin' },
		{ id: 2, class: 'transitions', label: 'Transitions' },
		{ id: 3, class: 'titles', label: 'Titles' },
		{ id: 4, class: 'effects no-border', label: 'Effects' },
	]

	const tracks = [
		{
			id: 1,
			icons: [
				{ id: 0, label: 'icons TL_lock' },
				{ id: 1, label: 'icons mute' },
				{ id: 2, label: 'icons TL_video_on_active' },
			]
		},
		{ id: 2,
			icons: [
				{ label: 'icons TL_lock' },
				{ label: 'icons mute' },
				{ label: 'icons TL_video_on_active' },
			]
		},
		{ id: 3,
			icons: [
				{ label: 'icons TL_lock' },
				{ label: 'icons mute' },
				{ label: 'icons TL_video_on_active' },
			]
		},
	];

	const ctiFreeLock = [
		{ id: 0, classe: 'icons cti_lock' },
		{ id: 1, classe: 'icons cti_free' },
	];

	const VideoAudioOnly = [
		{ id: 0, classe: 'icons video_only' },
		{ id: 1, classe: 'icons audio_only' },
	]

	const [ trackIndex, setActiveTrack ] = useState(0);
	const [ newTracks, setNewTracks ] = useState(tracks);


	// MINI TIMELINE SIDEBAR
	const [ ctiFLIndex, setctiFLIndex ] = useState(0);
	const [ videoAudioIndex, setvideoAudio ] = useState(false);

	function addTrack() {
		setNewTracks([...newTracks, {
			id: newTracks.length + 1,
			icons: [
				{ label: 'icons TL_lock' },
				{ label: 'icons mute' },
				{ label: 'icons TL_video_on_active' },
			]
		}]);
	}

	// CLIPS INSPECTOR TRIGGER

	const clipsTimeline = [
		{ id: 0, label: 'Clip 01' },
		{ id: 1, label: 'Clip 02' },
		{ id: 2, label: 'Clip 03' },
		{ id: 3, label: 'Clip 04' },
	];

	const [ inspectorIndex, activeInspector ] = useState(0);

	return (
		<>
			<Header>
				{ViewerTools.map((item, i) => (
					<div key={i} className={classNames(item.class, viewerToolsIndex === i ? "active" : "")} onClick={()=> setViewerTools(i)}>{item.label}</div>
				))}

				<div className="export right no-border">Quick Export</div>
				<div className={inspector ? "inspector right active" : "inspector right"} onClick={()=> setInspector(!inspector)}>Inspector</div>
			</Header>

			<Content>
				<Split
					style={inspector ? {'width':'calc(100% - 336px)', 'height':'100%', 'borderRight':'1px solid #000', 'float':'left'} : {'width':'100%', 'height':'100%'}}
					sizes={[45, 55]}
					minSize={[250, 350]}
					expandToMin={true}
					gutterSize={2}
					gutterAlign="start"
					dragInterval={1}
					direction="vertical"
					cursor="row-resize">

						{/* VIEWER CONTENT */}
						<><ViewerContent nav={viewerToolsIndex}/></>

						{/* TIMELINE CONTENT */}
						<div style={{'height': '100%', 'display': 'block','backgroundColor': ""}}>
							{/* MINI TIMELINE */}
							<MiniTimelineCut>
								<MiniTimelineSideBar>
									<div className="icons-sidebar">
										{ctiFreeLock.map((ctifl, i) => (
											<div key={i} className={classNames(ctifl.classe, ctiFLIndex === i ? 'active':'')} onClick={()=> setctiFLIndex(i)}></div>
										))}

										{VideoAudioOnly.map((vidAud, i) => (
											<div key={i} className={classNames(vidAud.classe, videoAudioIndex === i ? 'active':'')} onClick={()=> setvideoAudio(i)}></div>
										))}
									</div>

									<div className="track-numbers">
										<div className="number-container">
											{newTracks.map((item, i)=> (
												<div key={i} className={trackIndex === i ? 'active': ''} onClick={()=> setActiveTrack(i)}>{item.id}</div>
											))}
										</div>
									</div>
								</MiniTimelineSideBar>

								<MiniTimelineClips></MiniTimelineClips>
							</MiniTimelineCut>

							{/* TIMELINE */}
							<TimelineCut>
								<TimelineSideBar>
									<div className="sidebar-tools">
										<div className="icons TL_sidebar_snapping"></div>
										<div className="icons TL_sidebar_marker"></div>
										<div className="icons TL_sidebar_add_track" onClick={()=> addTrack()} style={newTracks.length === 5 ? {'pointer-events':'none'} : {'':''}}></div>
									</div>

									<div className="sidebar-tracks">
										{newTracks.map((track, i) => (
											<div key={i} className={classNames('tracks', trackIndex === i ? 'active': '')} onClick={()=> setActiveTrack(i)}>
												<div>
													{track.icons.map((icon, i) => (
														<div key={i} className={classNames(icon.label)}></div>
													))}
													{/* <div className={classNames('icons TL_lock', trackIndex === i && timelineLock ? 'active': '')} onClick={()=> setTimelineLock(!timelineLock)}></div>
													<div className="icons mute"></div>
													<div className="icons TL_video_on_active"></div> */}
												</div>
												<div>{track.id}</div>
											</div>
										))}
									</div>
								</TimelineSideBar>

								<div style={{'width':'calc(100% - 130px)','height':'100%','display':'block','float':'left','overflow':'scroll'}}>
									<TimelineClips>
										{clipsTimeline.map((clip, i)=> (
											<button key={i} onClick={()=> activeInspector(i)}>{clip.label}</button>
										))}
									</TimelineClips>
								</div>
							</TimelineCut>
						</div>
				</Split>

				<div className={inspector ? '': 'none'} style={{'width':'336px', 'height':'100%', 'float':'left'}}>
					<Inspector menu={inspectorIndex}/>
				</div>
			</Content>
		</>
	)
}

export default Cut;
