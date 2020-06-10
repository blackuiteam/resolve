
// ===> TIMELINE CUT

import styled from 'styled-components';
import { size, grid, position, bgimage } from './_mixins';

// ===> IMAGES

import audio_only from '../images/timelines/cut/audio_only@2x.png';
import audio_only_hover from '../images/timelines/cut/audio_only_hover@2x.png';
import audio_only_push from '../images/timelines/cut/audio_only_push@2x.png';
import audio_only_active from '../images/timelines/cut/audio_only_active@2x.png';
import audio_only_active_push from '../images/timelines/cut/audio_only_active_push@2x.png';
import audio_only_active_hover from '../images/timelines/cut/audio_only_active_hover@2x.png';

import cti_free from '../images/timelines/cut/cti_free@2x.png';
import cti_free_hover from '../images/timelines/cut/cti_free_hover@2x.png';
import cti_free_push from '../images/timelines/cut/cti_free_push@2x.png';
import cti_free_active from '../images/timelines/cut/cti_free_active@2x.png';

import cti_lock from '../images/timelines/cut/cti_lock@2x.png';
import cti_lock_hover from '../images/timelines/cut/cti_lock_hover@2x.png';
import cti_lock_push from '../images/timelines/cut/cti_lock_push@2x.png';
import cti_lock_active from '../images/timelines/cut/cti_lock_active@2x.png';

import video_only from '../images/timelines/cut/video_only@2x.png';
import video_only_hover from '../images/timelines/cut/video_only_hover@2x.png';
import video_only_push from '../images/timelines/cut/video_only_push@2x.png';
import video_only_active from '../images/timelines/cut/video_only_active@2x.png';
import video_only_active_push from '../images/timelines/cut/video_only_active_push@2x.png';
import video_only_active_hover from '../images/timelines/cut/video_only_active_hover@2x.png';


// TRACK ELEMENTS IMAGES

import mute from '../images/timelines/track-elements/mute@2x.png';
import mute_active from '../images/timelines/track-elements/mute_active@2x.png';
import mute_hover from '../images/timelines/track-elements/mute_hover@2x.png';

import TL_lock from '../images/timelines/track-elements/TL_lock@2x.png';
import TL_lock_hover from '../images/timelines/track-elements/TL_lock_hover@2x.png';
import TL_lock_push from '../images/timelines/track-elements/TL_lock_push@2x.png';
import TL_lock_disabled from '../images/timelines/track-elements/TL_lock_disabled@2x.png';
import TL_lock_active from '../images/timelines/track-elements/TL_lock_active@2x.png';
import TL_lock_active_push from '../images/timelines/track-elements/TL_lock_active_push@2x.png';
import TL_lock_active_hover from '../images/timelines/track-elements/TL_lock_active_hover@2x.png';

import TL_sidebar_add_track from '../images/timelines/track-elements/TL_sidebar_add_track@2x.png';
import TL_sidebar_add_track_hover from '../images/timelines/track-elements/TL_sidebar_add_track_hover@2x.png';
import TL_sidebar_add_track_push from '../images/timelines/track-elements/TL_sidebar_add_track_push@2x.png';
import TL_sidebar_add_track_disabled from '../images/timelines/track-elements/TL_sidebar_add_track_disabled@2x.png';

import TL_sidebar_marker from '../images/timelines/track-elements/TL_sidebar_marker@2x.png';
import TL_sidebar_marker_hover from '../images/timelines/track-elements/TL_sidebar_marker_hover@2x.png';
import TL_sidebar_marker_push from '../images/timelines/track-elements/TL_sidebar_marker_push@2x.png';
import TL_sidebar_marker_disabled from '../images/timelines/track-elements/TL_sidebar_marker_disabled@2x.png';

import TL_sidebar_snapping from '../images/timelines/track-elements/TL_sidebar_snapping@2x.png';
import TL_sidebar_snapping_hover from '../images/timelines/track-elements/TL_sidebar_snapping_hover@2x.png';
import TL_sidebar_snapping_push from '../images/timelines/track-elements/TL_sidebar_snapping_push@2x.png';
import TL_sidebar_snapping_disabled from '../images/timelines/track-elements/TL_sidebar_snapping_disabled@2x.png';
import TL_sidebar_snapping_active from '../images/timelines/track-elements/TL_sidebar_snapping_active@2x.png';
import TL_sidebar_snapping_active_push from '../images/timelines/track-elements/TL_sidebar_snapping_active_push@2x.png';
import TL_sidebar_snapping_active_hover from '../images/timelines/track-elements/TL_sidebar_snapping_active_hover@2x.png';

import TL_video_off from '../images/timelines/track-elements/TL_video_off@2x.png';
import TL_video_off_hover from '../images/timelines/track-elements/TL_video_off_hover@2x.png';
import TL_video_off_push from '../images/timelines/track-elements/TL_video_off_push@2x.png';
import TL_video_off_disabled from '../images/timelines/track-elements/TL_video_off_disabled@2x.png';

import TL_video_on_active from '../images/timelines/track-elements/TL_video_on_active@2x.png';
import TL_video_on_active_hover from '../images/timelines/track-elements/TL_video_on_active_hover@2x.png';
import TL_video_on_active_push from '../images/timelines/track-elements/TL_video_on_active_push@2x.png';
import TL_video_on_active_disabled from '../images/timelines/track-elements/TL_video_on_active_disabled@2x.png';

import markerTimeline from '../images/common/markers-timeline.png';
import markerMiniTimeline from '../images/common/markers-mini-timeline.png';
import bgTransition from '../images/common/transition.png';
import bgMiniTransition from '../images/common/mini-transition.png';
import clipTextIcon from '../images/common/clip-text-icon.png';
import clipGeneratorIcon from '../images/common/clip-generator-icon.png';

import clip01bg from '../images/common/clip-01-bg.png';
import clip02bg from '../images/common/clip-02-bg.png';

import ctiFull from '../images/common/Cti-full.png';

function createMiniSidebar() {
	const sidebarImages = [
		{
			class: 'audio_only',
			image: audio_only,
			hover: audio_only_hover,
			push: audio_only_push,
			active: audio_only_active,
			active_push: audio_only_active_push,
			active_hover: audio_only_active_hover,
			top: '96px',
			left: '52px'
		},
		{
			class: 'cti_free',
			image: cti_free,
			hover: cti_free_hover,
			push: cti_free_push,
			active: cti_free_active,
			active_hover: cti_free_active,
			active_push: cti_free_push,
			top: '26px',
			left: '52px'
		},
		{
			class: 'cti_lock',
			image: cti_lock,
			hover: cti_lock_hover,
			push: cti_lock_push,
			active: cti_lock_active,
			active_hover: cti_lock_active,
			active_push: cti_lock_push,
			top: '26px',
			left: '13px'
		},
		{
			class: 'video_only',
			image: video_only,
			hover: video_only_hover,
			push: video_only_push,
			active: video_only_active,
			active_push: video_only_active_push,
			active_hover: video_only_active_hover,
			top: '96px',
			left: '13px'
		},
	];

	let sidebarImagesEmpty = '';

	sidebarImages.forEach(side => {
		sidebarImagesEmpty +=`
			&.${side.class} 					{ background-image: url(${side.image}); top: ${side.top}; left: ${side.left}};
			&.${side.class}:hover 				{ background-image: url(${side.hover})};
			&.${side.class}:active 				{ background-image: url(${side.push})};
			&.${side.class}.active 				{ background-image: url(${side.active})};
			&.${side.class}.active:hover 		{ background-image: url(${side.active_hover})};
			&.${side.class}.active:active 		{ background-image: url(${side.active_push})};
		`
	});

	return `${sidebarImagesEmpty}`;
}

function TrackElements() {
	const trackImages = [
		{
			class: 'mute',
			image: mute,
			hover: mute_hover,
			active: mute_active,
		},
		{
			class: 'TL_lock',
			image: TL_lock,
			hover: TL_lock_hover,
			push: TL_lock_push,
			disabled: TL_lock_disabled,
			active: TL_lock_active,
			active_push: TL_lock_active_push,
			active_hover: TL_lock_active_hover,
		},
		{
			class: 'TL_sidebar_add_track',
			image: TL_sidebar_add_track,
			hover: TL_sidebar_add_track_hover,
			push: TL_sidebar_add_track_push,
			disabled: TL_sidebar_add_track_disabled,
		},
		{
			class: 'TL_sidebar_marker',
			image: TL_sidebar_marker,
			hover: TL_sidebar_marker_hover,
			push: TL_sidebar_marker_push,
			disabled: TL_sidebar_marker_disabled,
		},
		{
			class: 'TL_sidebar_snapping',
			image: TL_sidebar_snapping,
			hover: TL_sidebar_snapping_hover,
			push: TL_sidebar_snapping_push,
			disabled: TL_sidebar_snapping_disabled,
			active: TL_sidebar_snapping_active,
			active_push: TL_sidebar_snapping_active_push,
			active_hover: TL_sidebar_snapping_active_hover,
		},
		{
			class: 'TL_video_off',
			image: TL_video_off,
			hover: TL_video_off_hover,
			push: TL_video_off_push,
			disabled: TL_video_off_disabled,
		},
		{
			class: 'TL_video_on_active',
			image: TL_video_on_active,
			hover: TL_video_on_active_hover,
			push: TL_video_on_active_push,
			disabled: TL_video_on_active_disabled,
		},
	];

	let trackImagesEmpty = '';

	trackImages.forEach(track => {
		trackImagesEmpty += `
			&.${track.class} 					{ background-image: url(${track.image})};
			&.${track.class}:hover 				{ background-image: url(${track.hover})};
			&.${track.class}:active 			{ background-image: url(${track.push})};
			&.${track.class}.active 			{ background-image: url(${track.active})};
			&.${track.class}.active:hover 		{ background-image: url(${track.active_hover})};
			&.${track.class}.active:active 		{ background-image: url(${track.active_push})};
		`
	});

	return `${trackImagesEmpty}`;
}

export const MiniTimelineCut = styled.div `
	${size('100%', '142px', '')};
	position: relative;
	border-bottom: 1px solid #000;
`

export const MiniTimelineSideBar = styled.div `
	${size('130px', '100%', 'block')};
	float: left;
	background-color: #212126;
	border-right: 1px solid #000;

	.icons-sidebar {
		${size('99px', '100%', 'block')};
		position: relative;
		float: left;

		&:before {
			content: '';
			${size('84px', '1px', '')};
			${position('70px', '8px', '', '')};
			background-color: #000;
		}

		.icons {
			${size('31px', '22px', 'block')};
			background-repeat: no-repeat;
			background-size: 31px 22px;
			background-position: center;
			position: absolute;

			${createMiniSidebar()};
		}
	}

	.track-numbers {
		${size('30px', '100%', 'flex')};
		float: left;
		align-items: center;
		border-left: 1px solid #000;

		.number-container {
			${size('29px', 'auto', 'flex')};
  			flex-direction: column-reverse;

			div {
				${size('calc(100% - 2px)', '20px', 'block')};
				margin: 0 0 0 1px;
				padding: 3px 0 0 0;
				text-align: center;
				font-size: 9px;

				&.active {
					background-color: #28282E;
					color: #E64B3D;
				}
			}
		}
	}
`

export const MiniTimelineClips = styled.div `
	${size('calc(100% - 131px)', '100%', 'block')};
	${bgimage(markerMiniTimeline, 'repeat-x', '14px 0', '297px 20px')};
	float: left;

	.tracks-container {
		${size('100%', '100%', 'flex')};
		position: relative;
		flex-direction: column-reverse;
		justify-content: center;

		.mini-cti {
			${size('17px', '100%', 'block')};
			${position('0', '', '', '0')};
			${bgimage(ctiFull, 'no-repeat', '0 0', '17px 1214px')};
			z-index: 3;
		}

		.track {
			${size('100%', '20px', 'block')};

			.clip {
				${size('', '100%', 'block')};
				position: relative;
				float: left;
				border: 1px solid #000;
				border-radius: 4px;

				&.video {
					background-color: #4376A1;
					z-index: 0;
				}

				&.text {
					background-color: #B9B097;
				}

				&.generator {
					background-color: #9973A0;
				}

				&.transition {
					background-image: url(${bgMiniTransition});
					background-repeat: no-repeat;
					background-size: 82px 20px;
					border: none;
					z-index: 2;
				}
			}
		}
	}
`

export const TimelineCut = styled.div `
	${size('100%', 'calc(100% - 142px)', 'block')};
	position: relative;

	&:before {
		content:'';
		${size('17px', '100%', 'block')};
		${position('0', '', '', 'calc(50% + 57px)')};
		${bgimage(ctiFull, 'no-repeat', '0 0', '17px 1214px')};
		z-index: 3;
	}

	.timeline-wrapper {
		${size('calc(100% - 130px)', '100%', 'block')};
		position: relative;
		float: left;
		overflow: scroll;
	}
`

export const TimelineSideBar = styled.div `
	${size('130px', '100%', 'block')};
	position: relative;
	float: left;
	background-color: #212126;
	border-right: 1px solid #000;

	.sidebar-tools {
		${size('100%', '30px', 'flex')};
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid #000;

		.icons {
			${size('22px', '22px', 'block')};
			float: left;
			margin: 0 3px;
			border: none;
			background-repeat: no-repeat;
			background-position: center;
			background-size: 22px 22px;
			${TrackElements()};
		}
	}

	.sidebar-tracks {
		${size('100%', 'calc(100% - 70px)', 'flex')};
		flex-direction: column-reverse;
		border-bottom: 1px solid #000;

		.tracks {
			${size('100%', '101px', 'grid')};
			grid-template-columns: 100px 30px;
			grid-template-rows: 100%;
			border-top: 1px solid #000;

			&.active {
				background-color: #28282E;

				div {
					&:nth-child(2) { color: #E64B3D; }
				}
			}

			div {
				&:nth-child(1),
				&:nth-child(2) {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 12px;
				}

				&:nth-child(1) {
					border-right: 1px solid #000;

					.icons {
						${size('22px', '22px', 'block')};
						float: left;
						margin: 0 3px;
						border: none;
						background-repeat: no-repeat;
						background-position: center;
						background-size: 22px 22px;
						${TrackElements()};
					}
				}
			}
		}
	}
`

export const TimelineClips = styled.div `
	${size('200%', '100%', 'block')};
	${bgimage(markerTimeline, 'repeat-x', '-109px -1px', '328px 839px')};
	position: relative;
	float: left;

	.tracks-container {
		${size('100%', 'calc(100% - 40px)', 'flex')};
		flex-direction: column-reverse;
		padding: 0 0 0 calc(100% / 4);

		&:before {
			content: "";
			${size('calc(100% / 4)', '100%', 'block')};
			${position('0', '', '', '0')};
			background-color: #000;
			opacity: .2;
		}

		&:after {
			content: "";
			${size('calc(100% / 4)', '100%', 'block')};
			${position('0', '0', '', '')};
			background-color: #000;
			opacity: .2;
		}
	}

	.track {
		${size('calc((100% / 2) + 520px)', '101px', 'block')};
		position: relative;

		.clip {
			${size('', '100%', 'block')};
			position: relative;
			float: left;
			border: 1px solid #000;
			border-radius: 4px;

			span {
				${position('', '', '10px', '10px')};
				height: 20px;
				padding: 2px 0 0 23px;
				color: #fff;
				font-size: 11px;

				&.text {
					${bgimage(clipTextIcon, 'no-repeat', '0 0', '20px 20px')};
				}

				&.generator {
					${bgimage(clipGeneratorIcon, 'no-repeat', '0 0', '20px 20px')};
				}

			}

			&.video {
				background-color: #4376A1;
				z-index: 0;

				.image-box {
					${size('calc(100% - 6px)', '75px')};
					${position('3px', '', '', '3px')};
					border: 1px solid #000;

					&.clip-01 {
						${bgimage(clip01bg, 'no-repeat', '0 0', '2400px 83px')}
					}

					&.clip-02 {
						${bgimage(clip02bg, 'no-repeat', '0 0', '2400px 83px')}
					}
				}
			}

			&.text {
				background-color: #B9B097;
			}

			&.generator {
				background-color: #9973A0;
			}

			&.transition {
				background-image: url(${bgTransition});
				background-repeat: no-repeat;
				background-size: 166px 101px;
				border: none;
				z-index: 2;
			}
		}
	}
`
