
// ===> VTR CUT

import styled from 'styled-components';
import { size, grid } from './_mixins';

// ===> IMAGES

import inspector_tool from '../images/vtr/cut/inspector_tool@2x.png';
import inspector_tool_hover from '../images/vtr/cut/inspector_tool_hover@2x.png';
import inspector_tool_push from '../images/vtr/cut/inspector_tool_push@2x.png';
import inspector_tool_disabled from '../images/vtr/cut/inspector_tool_disabled@2x.png';
import inspector_tool_active from '../images/vtr/cut/inspector_tool_active@2x.png';
import inspector_tool_active_push from '../images/vtr/cut/inspector_tool_active_push@2x.png';
import inspector_tool_active_hover from '../images/vtr/cut/inspector_tool_active_hover@2x.png';

import markin from '../images/vtr/cut/markin@2x.png';
import markin_hover from '../images/vtr/cut/markin_hover@2x.png';
import markin_push from '../images/vtr/cut/markin_push@2x.png';

import markout from '../images/vtr/cut/markout@2x.png';
import markout_hover from '../images/vtr/cut/markout_hover@2x.png';
import markout_push from '../images/vtr/cut/markout_push@2x.png';

import vtr_back from '../images/vtr/cut/vtr_back@2x.png';
import vtr_back_hover from '../images/vtr/cut/vtr_back_hover@2x.png';
import vtr_back_push from '../images/vtr/cut/vtr_back_push@2x.png';
import vtr_back_active from '../images/vtr/cut/vtr_back_active@2x.png';
import vtr_back_active_push from '../images/vtr/cut/vtr_back_active_push@2x.png';
import vtr_back_active_hover from '../images/vtr/cut/vtr_back_active_hover@2x.png';

import vtr_fast_review from '../images/vtr/cut/vtr_fast_review@2x.png';
import vtr_fast_review_hover from '../images/vtr/cut/vtr_fast_review_hover@2x.png';
import vtr_fast_review_push from '../images/vtr/cut/vtr_fast_review_push@2x.png';
import vtr_fast_review_disabled from '../images/vtr/cut/vtr_fast_review_disabled@2x.png';
import vtr_fast_review_active from '../images/vtr/cut/vtr_fast_review_active@2x.png';
import vtr_fast_review_active_push from '../images/vtr/cut/vtr_fast_review_active_push@2x.png';
import vtr_fast_review_active_hover from '../images/vtr/cut/vtr_fast_review_active_hover@2x.png';

import vtr_first from '../images/vtr/cut/vtr_first@2x.png';
import vtr_first_hover from '../images/vtr/cut/vtr_first_hover@2x.png';
import vtr_first_push from '../images/vtr/cut/vtr_first_push@2x.png';

import vtr_last from '../images/vtr/cut/vtr_last@2x.png';
import vtr_last_hover from '../images/vtr/cut/vtr_last_hover@2x.png';
import vtr_last_push from '../images/vtr/cut/vtr_last_push@2x.png';

import vtr_loop from '../images/vtr/cut/vtr_loop@2x.png';
import vtr_loop_hover from '../images/vtr/cut/vtr_loop_hover@2x.png';
import vtr_loop_push from '../images/vtr/cut/vtr_loop_push@2x.png';
import vtr_loop_active from '../images/vtr/cut/vtr_loop_active@2x.png';
import vtr_loop_active_push from '../images/vtr/cut/vtr_loop_active_push@2x.png';
import vtr_loop_active_hover from '../images/vtr/cut/vtr_loop_active_hover@2x.png';

import vtr_play_active from '../images/vtr/cut/vtr_play_active@2x.png';
import vtr_play_active_hover from '../images/vtr/cut/vtr_play_active_hover@2x.png';
import vtr_play_active_push from '../images/vtr/cut/vtr_play_active_push@2x.png';

import vtr_play_around from '../images/vtr/cut/vtr_play_around@2x.png';
import vtr_play_around_hover from '../images/vtr/cut/vtr_play_around_hover@2x.png';
import vtr_play_around_push from '../images/vtr/cut/vtr_play_around_push@2x.png';
import vtr_play_around_active from '../images/vtr/cut/vtr_play_around_active@2x.png';
import vtr_play_around_active_push from '../images/vtr/cut/vtr_play_around_active_push@2x.png';
import vtr_play_around_active_hover from '../images/vtr/cut/vtr_play_around_active_hover@2x.png';

import vtr_play from '../images/vtr/cut/vtr_play@2x.png';
import vtr_play_hover from '../images/vtr/cut/vtr_play_hover@2x.png';
import vtr_play_push from '../images/vtr/cut/vtr_play_push@2x.png';

import vtr_stop from '../images/vtr/cut/vtr_stop@2x.png';
import vtr_stop_hover from '../images/vtr/cut/vtr_stop_hover@2x.png';
import vtr_stop_push from '../images/vtr/cut/vtr_stop_push@2x.png';

function vtrCutProps() {
	const vtrCutImages = [
		{
			label: 'inspector_tool',
			image: inspector_tool,
			hover: inspector_tool_hover,
			push: inspector_tool_push,
			disabled: inspector_tool_disabled,
			active: inspector_tool_active,
			active_push: inspector_tool_active_push,
			active_hover: inspector_tool_active_hover,
		},
		{
			label: 'markin',
			image: markin,
			hover: markin_hover,
			push: markin_push,
		},
		{
			label: 'markout',
			image: markout,
			hover: markout_hover,
			push: markout_push,
		},
		{
			label: 'vtr_back',
			image: vtr_back,
			hover: vtr_back_hover,
			push: vtr_back_push,
			active: vtr_back_active,
			active_push: vtr_back_active_push,
			active_hover: vtr_back_active_hover,
		},
		{
			label: 'vtr_fast_review',
			image: vtr_fast_review,
			hover: vtr_fast_review_hover,
			push: vtr_fast_review_push,
			disabled: vtr_fast_review_disabled,
			active: vtr_fast_review_active,
			active_push: vtr_fast_review_active_push,
			active_hover: vtr_fast_review_active_hover,
		},
		{
			label: 'vtr_first',
			image: vtr_first,
			hover: vtr_first_hover,
			push: vtr_first_push,
		},
		{
			label: 'vtr_last',
			image: vtr_last,
			hover: vtr_last_hover,
			push: vtr_last_push,
		},
		{
			label: 'vtr_loop',
			image: vtr_loop,
			hover: vtr_loop_hover,
			push: vtr_loop_push,
			active: vtr_loop_active,
			active_push: vtr_loop_active_push,
			active_hover: vtr_loop_active_hover,
		},
		{
			label: 'vtr_play_active',
			image: vtr_play_active,
			hover: vtr_play_active_hover,
			push: vtr_play_active_push,
		},
		{
			label: 'vtr_play_around',
			image: vtr_play_around,
			hover: vtr_play_around_hover,
			push: vtr_play_around_push,
			active: vtr_play_around_active,
			active_push: vtr_play_around_active_push,
			active_hover: vtr_play_around_active_hover,
		},
		{
			label: 'vtr_play',
			image: vtr_play,
			hover: vtr_play_hover,
			push: vtr_play_push,
		},
		{
			label: 'vtr_stop',
			image: vtr_stop,
			hover: vtr_stop_hover,
			push: vtr_stop_push,
		},
	];

	let vtrCutImagesEmpty = '';

	vtrCutImages.forEach(vtr => {
		vtrCutImagesEmpty +=`
			&.${vtr.label} 						{ background-image: url(${vtr.image})};
			&.${vtr.label}:hover 				{ background-image: url(${vtr.hover})};
			&.${vtr.label}:active 				{ background-image: url(${vtr.push})};
			&.${vtr.label}.active 				{ background-image: url(${vtr.active})};
			&.${vtr.label}.active:hover 		{ background-image: url(${vtr.active_hover})};
			&.${vtr.label}.active:active 		{ background-image: url(${vtr.active_push})};
			&.${vtr.label}.disabled 			{ background-image: url(${vtr.disabled})};
			&.${vtr.label}.arrow_hover 			{ background-image: url(${vtr.arrow_hover})};
			&.${vtr.label}.active_arrow_hover	{ background-image: url(${vtr.active_arrow_hover})};
		`
	});

	return `${vtrCutImagesEmpty}`;
}

export const VtrCut = styled.div `
	${size('100%', '44px', 'grid')};
	grid-template-rows: 100%;
	grid-template-columns: 120px calc(80% - 240px) 20% 120px;
	background-color: #212126;
	border-top: 1px solid #000;

	> div {

		span {
			color: #fff;
		}

		&:nth-child(2),
		&:nth-child(3) {
			display: flex;
			justify-content: center;
		}

		&:nth-child(4) {
			display: flex;
			align-items: center;
		}


		div	{
			${size('30px', '100%', 'block')};
			background-repeat: no-repeat;
			background-position: center;
			background-size: 30px 30px;
			float: left;
			margin: 0 7px;

			${vtrCutProps()};
		}
	}
`
