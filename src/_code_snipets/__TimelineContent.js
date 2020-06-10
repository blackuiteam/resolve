
import React, { useState } 	from 'react';
import classNames 			from 'classnames';

// STYLES
import {
	MiniTimelineCut,
	MiniTimelineSideBar,
	MiniTimelineClips,
	TimelineCut,
	TimelineSideBar,
	TimelineClips } from '../../../styles/_timeline-cut';

function TimelineContent() {

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

	return (
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
						<button>clip 01</button>
						<button>clip 02</button>
					</TimelineClips>
				</div>
			</TimelineCut>
		</div>
	)
}

export default TimelineContent;
