
// ===> VIEWER TOOLBAR

import styled from 'styled-components';
import { size, grid } from './_mixins';

// IMAGES

import apply from '../images/cut-edit-tools/apply@2x.png';
import apply_hover from '../images/cut-edit-tools/apply_hover@2x.png';
import apply_push from '../images/cut-edit-tools/apply_push@2x.png';
import apply_disabled from '../images/cut-edit-tools/apply_disabled@2x.png';

import boring from '../images/cut-edit-tools/boring@2x.png';
import boring_hover from '../images/cut-edit-tools/boring_hover@2x.png';
import boring_push from '../images/cut-edit-tools/boring_push@2x.png';
import boring_active from '../images/cut-edit-tools/boring_active@2x.png';

import center from '../images/cut-edit-tools/center@2x.png';
import center_hover from '../images/cut-edit-tools/center_hover@2x.png';
import center_push from '../images/cut-edit-tools/center_push@2x.png';
import center_disabled from '../images/cut-edit-tools/center_disabled@2x.png';

import closeup from '../images/cut-edit-tools/closeup@2x.png';
import closeup_hover from '../images/cut-edit-tools/closeup_hover@2x.png';
import closeup_push from '../images/cut-edit-tools/closeup_push@2x.png';
import closeup_disabled from '../images/cut-edit-tools/closeup_disabled@2x.png';

import create_timeline from '../images/cut-edit-tools/create_timeline@2x.png';
import create_timeline_hover from '../images/cut-edit-tools/create_timeline_hover@2x.png';
import create_timeline_push from '../images/cut-edit-tools/create_timeline_push@2x.png';
import create_timeline_disabled from '../images/cut-edit-tools/create_timeline_disabled@2x.png';

import fit_to_fill from '../images/cut-edit-tools/fit_to_fill@2x.png';
import fit_to_fill_hover from '../images/cut-edit-tools/fit_to_fill_hover@2x.png';
import fit_to_fill_push from '../images/cut-edit-tools/fit_to_fill_push@2x.png';
import fit_to_fill_disabled from '../images/cut-edit-tools/fit_to_fill_disabled@2x.png';

import in_img from '../images/cut-edit-tools/in@2x.png';
import in_hover from '../images/cut-edit-tools/in_hover@2x.png';
import in_push from '../images/cut-edit-tools/in_push@2x.png';
import in_disabled from '../images/cut-edit-tools/in_disabled@2x.png';

import insert from '../images/cut-edit-tools/insert@2x.png';
import insert_hover from '../images/cut-edit-tools/insert_hover@2x.png';
import insert_push from '../images/cut-edit-tools/insert_push@2x.png';
import insert_disabled from '../images/cut-edit-tools/insert_disabled@2x.png';

import out from '../images/cut-edit-tools/out@2x.png';
import out_hover from '../images/cut-edit-tools/out_hover@2x.png';
import out_push from '../images/cut-edit-tools/out_push@2x.png';
import out_disabled from '../images/cut-edit-tools/out_disabled@2x.png';

import overwrite from '../images/cut-edit-tools/overwrite@2x.png';
import overwrite_hover from '../images/cut-edit-tools/overwrite_hover@2x.png';
import overwrite_push from '../images/cut-edit-tools/overwrite_push@2x.png';
import overwrite_disabled from '../images/cut-edit-tools/overwrite_disabled@2x.png';

import put_on_top from '../images/cut-edit-tools/put_on_top@2x.png';
import put_on_top_hover from '../images/cut-edit-tools/put_on_top_hover@2x.png';
import put_on_top_push from '../images/cut-edit-tools/put_on_top_push@2x.png';
import put_on_top_disabled from '../images/cut-edit-tools/put_on_top_disabled@2x.png';

import replace from '../images/cut-edit-tools/replace@2x.png';
import replace_hover from '../images/cut-edit-tools/replace_hover@2x.png';
import replace_push from '../images/cut-edit-tools/replace_push@2x.png';
import replace_disabled from '../images/cut-edit-tools/replace_disabled@2x.png';

import ripple_overwrite from '../images/cut-edit-tools/ripple_overwrite@2x.png';
import ripple_overwrite_hover from '../images/cut-edit-tools/ripple_overwrite_hover@2x.png';
import ripple_overwrite_push from '../images/cut-edit-tools/ripple_overwrite_push@2x.png';
import ripple_overwrite_disabled from '../images/cut-edit-tools/ripple_overwrite_disabled@2x.png';

import sort_audio from '../images/cut-edit-tools/sort_audio@2x.png';
import sort_audio_hover from '../images/cut-edit-tools/sort_audio_hover@2x.png';
import sort_audio_push from '../images/cut-edit-tools/sort_audio_push@2x.png';
import sort_audio_active from '../images/cut-edit-tools/sort_audio_active@2x.png';

import sort_camera from '../images/cut-edit-tools/sort_camera@2x.png';
import sort_camera_hover from '../images/cut-edit-tools/sort_camera_hover@2x.png';
import sort_camera_push from '../images/cut-edit-tools/sort_camera_push@2x.png';
import sort_camera_active from '../images/cut-edit-tools/sort_camera_active@2x.png';

import sort_clapper from '../images/cut-edit-tools/sort_clapper@2x.png';
import sort_clapper_hover from '../images/cut-edit-tools/sort_clapper_hover@2x.png';
import sort_clapper_push from '../images/cut-edit-tools/sort_clapper_push@2x.png';
import sort_clapper_active from '../images/cut-edit-tools/sort_clapper_active@2x.png';

import sort_custom from '../images/cut-edit-tools/sort_custom@2x.png';
import sort_custom_hover from '../images/cut-edit-tools/sort_custom_hover@2x.png';
import sort_custom_push from '../images/cut-edit-tools/sort_custom_push@2x.png';
import sort_custom_active from '../images/cut-edit-tools/sort_custom_active@2x.png';

import sort_duration from '../images/cut-edit-tools/sort_duration@2x.png';
import sort_duration_hover from '../images/cut-edit-tools/sort_duration_hover@2x.png';
import sort_duration_push from '../images/cut-edit-tools/sort_duration_push@2x.png';
import sort_duration_active from '../images/cut-edit-tools/sort_duration_active@2x.png';

import sort_filename from '../images/cut-edit-tools/sort_filename@2x.png';
import sort_filename_hover from '../images/cut-edit-tools/sort_filename_hover@2x.png';
import sort_filename_push from '../images/cut-edit-tools/sort_filename_push@2x.png';
import sort_filename_active from '../images/cut-edit-tools/sort_filename_active@2x.png';

import sort_in from '../images/cut-edit-tools/sort_in@2x.png';
import sort_in_hover from '../images/cut-edit-tools/sort_in_hover@2x.png';
import sort_in_push from '../images/cut-edit-tools/sort_in_push@2x.png';
import sort_in_active from '../images/cut-edit-tools/sort_in_active@2x.png';

import sort_media from '../images/cut-edit-tools/sort_media@2x.png';
import sort_media_hover from '../images/cut-edit-tools/sort_media_hover@2x.png';
import sort_media_push from '../images/cut-edit-tools/sort_media_push@2x.png';
import sort_media_active from '../images/cut-edit-tools/sort_media_active@2x.png';

import sort_out from '../images/cut-edit-tools/sort_out@2x.png';
import sort_out_hover from '../images/cut-edit-tools/sort_out_hover@2x.png';
import sort_out_push from '../images/cut-edit-tools/sort_out_push@2x.png';
import sort_out_active from '../images/cut-edit-tools/sort_out_active@2x.png';

import sort_timecode from '../images/cut-edit-tools/sort_timecode@2x.png';
import sort_timecode_hover from '../images/cut-edit-tools/sort_timecode_hover@2x.png';
import sort_timecode_push from '../images/cut-edit-tools/sort_timecode_push@2x.png';
import sort_timecode_active from '../images/cut-edit-tools/sort_timecode_active@2x.png';

import source_write from '../images/cut-edit-tools/source_write@2x.png';
import source_write_hover from '../images/cut-edit-tools/source_write_hover@2x.png';
import source_write_push from '../images/cut-edit-tools/source_write_push@2x.png';
import source_write_disabled from '../images/cut-edit-tools/source_write_disabled@2x.png';

import split from '../images/cut-edit-tools/split@2x.png';
import split_hover from '../images/cut-edit-tools/split_hover@2x.png';
import split_push from '../images/cut-edit-tools/split_push@2x.png';
import split_disabled from '../images/cut-edit-tools/split_disabled@2x.png';

import to_end from '../images/cut-edit-tools/to_end@2x.png';
import to_end_hover from '../images/cut-edit-tools/to_end_hover@2x.png';
import to_end_push from '../images/cut-edit-tools/to_end_push@2x.png';
import to_end_disabled from '../images/cut-edit-tools/to_end_disabled@2x.png';

import transition_add from '../images/cut-edit-tools/transition_add@2x.png';
import transition_add_hover from '../images/cut-edit-tools/transition_add_hover@2x.png';
import transition_add_push from '../images/cut-edit-tools/transition_add_push@2x.png';
import transition_add_disabled from '../images/cut-edit-tools/transition_add_disabled@2x.png';

import transition_cycle from '../images/cut-edit-tools/transition_cycle@2x.png';
import transition_cycle_hover from '../images/cut-edit-tools/transition_cycle_hover@2x.png';
import transition_cycle_push from '../images/cut-edit-tools/transition_cycle_push@2x.png';
import transition_cycle_disabled from '../images/cut-edit-tools/transition_cycle_disabled@2x.png';

import transition_match from '../images/cut-edit-tools/transition_match@2x.png';
import transition_match_hover from '../images/cut-edit-tools/transition_match_hover@2x.png';
import transition_match_push from '../images/cut-edit-tools/transition_match_push@2x.png';
import transition_match_disabled from '../images/cut-edit-tools/transition_match_disabled@2x.png';

function createEditTools() {
	const EditToolsImg = [
		{ label: 'apply', 				image: apply , 				hover: apply_hover, 			push: apply_push,	 		disabled: apply_disabled },
		{ label: 'boring', 				image: boring , 			hover: boring_hover, 			push: boring_push, 			active: boring_active },
		{ label: 'center', 				image: center , 			hover: center_hover, 			push: center_push, 			disabled: center_disabled },
		{ label: 'closeup', 			image: closeup , 			hover: closeup_hover, 			push: closeup_push, 		disabled: closeup_disabled },
		{ label: 'create_timeline', 	image: create_timeline , 	hover: create_timeline_hover, 	push: create_timeline_push, disabled: create_timeline_disabled },
		{ label: 'fit_to_fill', 		image: fit_to_fill , 		hover: fit_to_fill_hover, 		push: fit_to_fill_push, 	disabled: fit_to_fill_disabled },
		{ label: 'in', 					image: in_img , 			hover: in_hover, 				push: in_push, 				disabled: in_disabled },
		{ label: 'insert', 				image: insert , 			hover: insert_hover, 			push: insert_push, 			disabled: insert_disabled },
		{ label: 'out', 				image: out , 				hover: out_hover, 				push: out_push, 			disabled: out_disabled },
		{ label: 'overwrite', 			image: overwrite , 			hover: overwrite_hover, 		push: overwrite_push, 		disabled: overwrite_disabled },
		{ label: 'put_on_top', 			image: put_on_top , 		hover: put_on_top_hover, 		push: put_on_top_push, 		disabled: put_on_top_disabled },
		{ label: 'replace', 			image: replace , 			hover: replace_hover, 			push: replace_push, 		disabled: replace_disabled },
		{ label: 'ripple_overwrite', 	image: ripple_overwrite , 	hover: ripple_overwrite_hover, 	push: ripple_overwrite_push, disabled: ripple_overwrite_disabled },
		{ label: 'sort_audio', 			image: sort_audio , 		hover: sort_audio_hover, 		push: sort_audio_push, 		active: sort_audio_active },
		{ label: 'sort_camera', 		image: sort_camera , 		hover: sort_camera_hover, 		push: sort_camera_push, 	active: sort_camera_active },
		{ label: 'sort_clapper', 		image: sort_clapper , 		hover: sort_clapper_hover, 		push: sort_clapper_push, 	active: sort_clapper_active },
		{ label: 'sort_custom', 		image: sort_custom , 		hover: sort_custom_hover, 		push: sort_custom_push, 	active: sort_custom_active },
		{ label: 'sort_duration', 		image: sort_duration , 		hover: sort_duration_hover, 	push: sort_duration_push, 	active: sort_duration_active },
		{ label: 'sort_filename', 		image: sort_filename , 		hover: sort_filename_hover, 	push: sort_filename_push, 	active: sort_filename_active },
		{ label: 'sort_in', 			image: sort_in , 			hover: sort_in_hover, 			push: sort_in_push, 		active: sort_in_active },
		{ label: 'sort_media', 			image: sort_media , 		hover: sort_media_hover, 		push: sort_media_push, 		active: sort_media_active },
		{ label: 'sort_out', 			image: sort_out, 			hover: sort_out_hover, 			push: sort_out_push, 		active: sort_out_active },
		{ label: 'sort_timecode', 		image: sort_timecode , 		hover: sort_timecode_hover, 	push: sort_timecode_push, 	active: sort_timecode_active },
		{ label: 'source_write', 		image: source_write , 		hover: source_write_hover, 		push: source_write_push, 	disabled: source_write_disabled },
		{ label: 'split', 				image: split , 				hover: split_hover, 			push: split_push, 			disabled: split_disabled },
		{ label: 'to_end',				image: to_end , 			hover: to_end_hover, 			push: to_end_push, 			disabled: to_end_disabled },
		{ label: 'transition_add', 		image: transition_add , 	hover: transition_add_hover, 	push: transition_add_push, 	 disabled: transition_add_disabled },
		{ label: 'transition_cycle', 	image: transition_cycle , 	hover: transition_cycle_hover, 	push: transition_cycle_push, disabled: transition_cycle_disabled },
		{ label: 'transition_match', 	image: transition_match , 	hover: transition_match_hover, 	push: transition_match_push, disabled: transition_match_disabled },
	];

	let EditToolsImgStyle = '';

	EditToolsImg.forEach(edit => {
		EditToolsImgStyle +=`
			&.${edit.label} 		 { background-image: url(${edit.image})}
			&.${edit.label}:hover 	 { background-image: url(${edit.hover})}
			&.${edit.label}:active 	 { background-image: url(${edit.push})}
			&.${edit.label}.active 	 { background-image: url(${edit.active})}
			&.${edit.label}.disabled { background-image: url(${edit.disabled})}
		`
	});

	return `${EditToolsImgStyle}`;
}

export const EditTools = styled.div `
	${size('100%', '44px', '')};
	display: grid;
	grid-template-rows: 100%;
	grid-template-columns: 100px calc(100% - 250px) 150px;
	align-items: center;
	background-color: #212126;
	border-top: 1px solid #000;

	> div {

		&:nth-child(1) {
			padding: 0 0 0 10px;
		}

		&:nth-child(2) {
			display: flex;
			justify-content: center;
		}

		div {
			${size('30px', '30px', 'block')};
			background-repeat: no-repeat;
			background-position: center;
			background-size: 30px 30px;
			float: left;
			margin: 0 7px;

			${createEditTools()};
		}
	}
`
