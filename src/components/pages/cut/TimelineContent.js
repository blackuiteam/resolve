
import React, { useState} from 'react';
import { Rnd } from "react-rnd";

// STYLES
import classNames from 'classnames';

function TimelineContent(props) {

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

	const [ posX ] = useState(0);


	return (
		<div style={{'height': '100%', 'display': 'block','backgroundColor': ""}}>
			{/* MINI TIMELINE */}
			<div className="MiniTimelineCut">
				<div className="MiniTimelineSideBar">
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
				</div>

				<div className="MiniTimelineClips">
					<div className="tracks-container">
						<Rnd
							style={{'zIndex':'3'}}
							bounds='parent'
							dragAxis='x'
							default={{ x: posX, y: 0, width: 17, height: 140}}>
								<div className="mini-cti"></div>
						</Rnd>

						<div className="track">
							<div className="clip generator" style={{'width':'20%','marginLeft':'0px'}}></div>
							<div className="clip transition" style={{'width':'82px','marginLeft':'-41px'}}></div>
							<div className="clip video" style={{'width':'20%','marginLeft':'-41px'}}></div>
							<div className="clip video" style={{'width':'60%','marginLeft':'0px'}} ></div>
						</div>
						<div className="track">
							<div className="clip text" style={{'width':'520px','marginLeft':'100px'}}></div>
						</div>
					</div>
				</div>
			</div>

			{/* TIMELINE */}
			<div className="TimelineCut">
				<div className="TimelineSideBar">
					<div className="sidebar-tools">
						<div className="icons TL_sidebar_snapping"></div>
						<div className="icons TL_sidebar_marker"></div>
						<div className="icons TL_sidebar_add_track" onClick={()=> addTrack()} style={newTracks.length === 3 ? {'pointer-events':'none'} : {'':''}}></div>
					</div>

					<div className="sidebar-tracks">
						{newTracks.map((track, i) => (
							<div key={i} className={classNames('tracks', trackIndex === i ? 'active': '')} onClick={()=> setActiveTrack(i)}>
								<div>
									{track.icons.map((icon, i) => (
										<div key={i} className={classNames(icon.label)}></div>
									))}
								</div>
								<div>{track.id}</div>
							</div>
						))}
					</div>
				</div>

				<div className="timeline-wrapper">
					<div className="TimelineClips">
						<div className="tracks-container" style={{'marginLeft':posX}}>
							<div className="track">
								<div className="clip generator" style={{'width':'20%','marginLeft':'0px'}} onClick={props.triggers[2]}><span className="generator">Solid Color</span></div>
								<div className="clip transition" style={{'width':'166px','marginLeft':'-83px'}} onClick={props.triggers[3]}></div>
								<div className="clip video" style={{'width':'20%','marginLeft':'-83px'}} onClick={props.triggers[0]}>
									<div className="image-box clip-01"></div>
								</div>
								<div className="clip video" style={{'width':'60%','marginLeft':'0px'}} onClick={props.triggers[0]}>
									<div className="image-box clip-02"></div>
								</div>
							</div>
							<div className="track">
								<div className="clip text" style={{'width':'520px','marginLeft':'100px'}} onClick={props.triggers[1]}><span className="text">Text+</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TimelineContent;
