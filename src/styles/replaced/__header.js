
// ===> HEADER

import styled from 'styled-components';
import { size, position } from './_mixins';

import adr 					from '../images/main-bar/adr@2x.png';
import adr_hover 			from '../images/main-bar/adr_hover@2x.png';
import adr_active 			from '../images/main-bar/adr_active@2x.png';

import audio_lib 			from '../images/main-bar/audio_library@2x.png';
import audio_lib_hover 		from '../images/main-bar/audio_library_hover@2x.png';
import audio_lib_active 	from '../images/main-bar/audio_library_active@2x.png';

import audio 				from '../images/main-bar/audio@2x.png';
import audio_hover 			from '../images/main-bar/audio_hover@2x.png';
import audio_active 		from '../images/main-bar/audio_active@2x.png';

import capture 				from '../images/main-bar/capture@2x.png';
import capture_hover 		from '../images/main-bar/capture_hover@2x.png';
import capture_active 		from '../images/main-bar/capture_active@2x.png';

import clips_view 			from '../images/main-bar/clips_view@2x.png';
import clips_view_hover 	from '../images/main-bar/clips_view_hover@2x.png';
import clips_view_active 	from '../images/main-bar/clips_view_active@2x.png';

import clone 				from '../images/main-bar/clone@2x.png';
import clone_hover 			from '../images/main-bar/clone_hover@2x.png';
import clone_active 		from '../images/main-bar/clone_active@2x.png';

import edl 					from '../images/main-bar/edl@2x.png';
import edl_hover 			from '../images/main-bar/edl_hover@2x.png';
import edl_active 			from '../images/main-bar/edl_active@2x.png';

import effects 				from '../images/main-bar/effects@2x.png';
import effects_hover 		from '../images/main-bar/effects_hover@2x.png';
import effects_active 		from '../images/main-bar/effects_active@2x.png';

import exportImg 			from '../images/main-bar/export@2x.png';
import exportImg_hover 		from '../images/main-bar/export_hover@2x.png';
import exportImg_active 	from '../images/main-bar/export_active@2x.png';

import gallery 				from '../images/main-bar/gallery@2x.png';
import gallery_hover 		from '../images/main-bar/gallery_hover@2x.png';
import gallery_active 		from '../images/main-bar/gallery_active@2x.png';

import inspector 			from '../images/main-bar/inspector@2x.png';
import inspector_hover 		from '../images/main-bar/inspector_hover@2x.png';
import inspector_active 	from '../images/main-bar/inspector_active@2x.png';

import keyframes 			from '../images/main-bar/keyframes_panel@2x.png';
import keyframes_hover 		from '../images/main-bar/keyframes_panel_hover@2x.png';
import keyframes_active 	from '../images/main-bar/keyframes_panel_active@2x.png';

import lightbox 			from '../images/main-bar/lightbox@2x.png';
import lightbox_hover 		from '../images/main-bar/lightbox_hover@2x.png';
import lightbox_active 		from '../images/main-bar/lightbox_active@2x.png';

import luts 				from '../images/main-bar/luts@2x.png';
import luts_hover 			from '../images/main-bar/luts_hover@2x.png';
import luts_active 			from '../images/main-bar/luts_active@2x.png';

import media 				from '../images/main-bar/media@2x.png';
import media_hover 			from '../images/main-bar/media_hover@2x.png';
import media_active 		from '../images/main-bar/media_active@2x.png';

import metadata 			from '../images/main-bar/metadata@2x.png';
import metadata_hover 		from '../images/main-bar/metadata_hover@2x.png';
import metadata_active 		from '../images/main-bar/metadata_active@2x.png';

import meters 				from '../images/main-bar/meters@2x.png';
import meters_hover 		from '../images/main-bar/meters_hover@2x.png';
import meters_active 		from '../images/main-bar/meters_active@2x.png';

import mixer 				from '../images/main-bar/mixer@2x.png';
import mixer_hover 			from '../images/main-bar/mixer_hover@2x.png';
import mixer_active 		from '../images/main-bar/mixer_active@2x.png';

import nodes 				from '../images/main-bar/nodes@2x.png';
import nodes_hover 			from '../images/main-bar/nodes_hover@2x.png';
import nodes_active 		from '../images/main-bar/nodes_active@2x.png';

import ofx 					from '../images/main-bar/ofx@2x.png';
import ofx_hover 			from '../images/main-bar/ofx_hover@2x.png';
import ofx_active 			from '../images/main-bar/ofx_active@2x.png';

import renderqueue 			from '../images/main-bar/render_queue@2x.png';
import renderqueue_hover 	from '../images/main-bar/render_queue_hover@2x.png';
import renderqueue_active 	from '../images/main-bar/render_queue_active@2x.png';

import spline 				from '../images/main-bar/spline@2x.png';
import spline_hover 		from '../images/main-bar/spline_hover@2x.png';
import spline_active 		from '../images/main-bar/spline_active@2x.png';

import storage 				from '../images/main-bar/storage@2x.png';
import storage_hover 		from '../images/main-bar/storage_hover@2x.png';
import storage_active 		from '../images/main-bar/storage_active@2x.png';

import syncbin 				from '../images/main-bar/sync_bin@2x.png';
import syncbin_hover 		from '../images/main-bar/sync_bin_hover@2x.png';
import syncbin_active 		from '../images/main-bar/sync_bin_active@2x.png';

import timeline 			from '../images/main-bar/timeline@2x.png';
import timeline_hover 		from '../images/main-bar/timeline_hover@2x.png';
import timeline_active 		from '../images/main-bar/timeline_active@2x.png';

import titles 				from '../images/main-bar/titles@2x.png';
import titles_hover 		from '../images/main-bar/titles_hover@2x.png';
import titles_active 		from '../images/main-bar/titles_active@2x.png';

import transitions 			from '../images/main-bar/transitions@2x.png';
import transitions_hover 	from '../images/main-bar/transitions_hover@2x.png';
import transitions_active 	from '../images/main-bar/transitions_active@2x.png';

function createHeader() {
	const HeaderImages = [
		{ id: 0, label: adr, 			img: adr, 			hover: adr_hover, 			active: adr_active },
		{ id: 1, label: 'audio_lib', 	img: audio_lib, 	hover: audio_lib_hover, 	active: audio_lib_active },
		{ id: 2, label: 'audio', 		img: audio,	 		hover: audio_hover, 		active: audio_active },
		{ id: 3, label: 'capture', 		img: capture, 		hover: capture_hover, 		active: capture_active },
		{ id: 4, label: 'clips_view', 	img: clips_view , 	hover: clips_view_hover, 	active: clips_view_active},
		{ id: 5, label: 'clone', 		img: clone, 		hover: clone_hover, 		active: clone_active },
		{ id: 6, label: 'edl', 			img: edl, 			hover: edl_hover, 			active: edl_active },
		{ id: 7, label: 'effects', 		img: effects, 		hover: effects_hover, 		active: effects_active },
		{ id: 8, label: 'export', 		img: exportImg, 	hover: exportImg_hover, 	active: exportImg_active },
		{ id: 9, label: 'gallery', 		img: gallery, 		hover: gallery_hover, 		active: gallery_active },
		{ id: 10, label: 'inspector', 	img: inspector, 	hover: inspector_hover, 	active: inspector_active },
		{ id: 11, label: 'keyframes', 	img: keyframes, 	hover: keyframes_hover, 	active: keyframes_active },
		{ id: 12, label: 'lightbox', 	img: lightbox, 		hover: lightbox_hover, 		active: lightbox_active },
		{ id: 13, label: 'luts', 		img: luts, 			hover: luts_hover, 			active: luts_active },
		{ id: 14, label: 'media', 		img: media, 		hover: media_hover , 		active: media_active },
		{ id: 15, label: 'metadata', 	img: metadata, 		hover: metadata_hover, 		active: metadata_active },
		{ id: 16, label: 'meters', 		img: meters, 		hover: meters_hover, 		active: meters_active },
		{ id: 17, label: 'mixer', 		img: mixer, 		hover: mixer_hover, 		active: mixer_active },
		{ id: 18, label: 'nodes', 		img: nodes, 		hover: nodes_hover, 		active: nodes_active },
		{ id: 19, label: 'ofx', 		img: ofx, 			hover: ofx_hover, 			active: ofx_active },
		{ id: 20, label: 'renderqueue', img: renderqueue, 	hover: renderqueue_hover, 	active: renderqueue_active },
		{ id: 21, label: 'spline', 		img: spline, 		hover: spline_hover, 		active: spline_active },
		{ id: 22, label: 'storage', 	img: storage, 		hover: storage_hover, 		active: storage_active },
		{ id: 23, label: 'syncbin', 	img: syncbin, 		hover: syncbin_hover, 		active: syncbin_active },
		{ id: 24, label: 'timeline', 	img: timeline, 		hover: timeline_hover, 		active: timeline_active },
		{ id: 25, label: 'titles', 		img: titles, 		hover: titles_hover, 		active: titles_active },
		{ id: 26, label: 'transitions', img: transitions, 	hover: transitions_hover, 	active: transitions_active },
	];

	let HeaderStyle = '';

	HeaderImages.forEach(header => {
		HeaderStyle += `
			&.${header.label} 		 { background-image: url(${header.img})};
			&.${header.label}:hover  { background-image: url(${header.hover})};
			&.${header.label}.active { background-image: url(${header.active})};
		`
	});

	return `${HeaderStyle}`
}

export const Header = styled.div `
	${size('100%', '35px')};
	${position('0px', '', '', '0px')};
	background-color: #17181A;
	border-bottom: 1px solid #000;

	div {
		${size('', '28px', 'table')};
		float: left;
		margin: 3px 0 0 0;
		padding: 4px 15px 0 45px;
		font-family: "OpenSans regular";
		font-size: 12px;
		color: #929292;
		background-repeat: no-repeat;
		background-position: 15px -2px;
		background-size: 200px 30px;
		border-right: 1px solid #434346;

		${createHeader()};

		&:hover 	{ color: #BEBEBE; }
		&.active 	{ color: #fff; }
		&.no-border { border: none; }
		&.right 	{ float: right; }
	}
`
