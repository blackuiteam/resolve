
// ===> VTR

import styled from 'styled-components';
import { size, grid } from './_mixins';

// ===> IMAGES

import vtr_back from '../images/vtr/vtr_back@2x.png';
import vtr_back_hover from '../images/vtr/vtr_back_hover@2x.png';
import vtr_back_push from '../images/vtr/vtr_back_push@2x.png';
import vtr_back_active from '../images/vtr/vtr_back_active@2x.png';
import vtr_back_active_push from '../images/vtr/vtr_back_active_push@2x.png';
import vtr_back_active_hover from '../images/vtr/vtr_back_active_hover@2x.png';

import vtr_ff from '../images/vtr/vtr_ff@2x.png';
import vtr_ff_hover from '../images/vtr/vtr_ff_hover@2x.png';
import vtr_ff_push from '../images/vtr/vtr_ff_push@2x.png';
import vtr_ff_active from '../images/vtr/vtr_ff_active@2x.png';
import vtr_ff_active_push from '../images/vtr/vtr_ff_active_push@2x.png';
import vtr_ff_active_hover from '../images/vtr/vtr_ff_active_hover@2x.png';

import vtr_first from '../images/vtr/vtr_first@2x.png';
import vtr_first_hover from '../images/vtr/vtr_first_hover@2x.png';
import vtr_first_push from '../images/vtr/vtr_first_push@2x.png';

import vtr_last from '../images/vtr/vtr_last@2x.png';
import vtr_last_hover from '../images/vtr/vtr_last_hover@2x.png';
import vtr_last_push from '../images/vtr/vtr_last_push@2x.png';

import vtr_loop from '../images/vtr/vtr_loop@2x.png';
import vtr_loop_hover from '../images/vtr/vtr_loop_hover@2x.png';
import vtr_loop_push from '../images/vtr/vtr_loop_push@2x.png';
import vtr_loop_active from '../images/vtr/vtr_loop_active@2x.png';
import vtr_loop_active_push from '../images/vtr/vtr_loop_active_push@2x.png';
import vtr_loop_active_hover from '../images/vtr/vtr_loop_active_hover@2x.png';

import vtr_loop_arrow_hover from '../images/vtr/vtr_loop_arrow_hover@2x.png';
import vtr_loop_active_arrow_hover from '../images/vtr/vtr_loop_active_arrow_hover@2x.png';

import vtr_pingpong from '../images/vtr/vtr_pingpong@2x.png';
import vtr_pingpong_hover from '../images/vtr/vtr_pingpong_hover@2x.png';
import vtr_pingpong_push from '../images/vtr/vtr_pingpong_push@2x.png';
import vtr_pingpong_active from '../images/vtr/vtr_pingpong_active@2x.png';
import vtr_pingpong_active_push from '../images/vtr/vtr_pingpong_active_push@2x.png';
import vtr_pingpong_active_hover from '../images/vtr/vtr_pingpong_active_hover@2x.png';

import vtr_pingpong_arrow_hover from '../images/vtr/vtr_pingpong_arrow_hover@2x.png';
import vtr_pingpong_active_arrow_hover from '../images/vtr/vtr_pingpong_active_arrow_hover@2x.png';

import vtr_play_active from '../images/vtr/vtr_play_active@2x.png';
import vtr_play_active_hover from '../images/vtr/vtr_play_active_hover@2x.png';
import vtr_play_active_push from '../images/vtr/vtr_play_active_push@2x.png';

import vtr_play_around from '../images/vtr/vtr_play_around@2x.png';
import vtr_play_around_hover from '../images/vtr/vtr_play_around_hover@2x.png';
import vtr_play_around_push from '../images/vtr/vtr_play_around_push@2x.png';
import vtr_play_around_active from '../images/vtr/vtr_play_around_active@2x.png';
import vtr_play_around_active_push from '../images/vtr/vtr_play_around_active_push@2x.png';
import vtr_play_around_active_hover from '../images/vtr/vtr_play_around_active_hover@2x.png';

import vtr_play from '../images/vtr/vtr_play@2x.png';
import vtr_play_hover from '../images/vtr/vtr_play_hover@2x.png';
import vtr_play_push from '../images/vtr/vtr_play_push@2x.png';
import vtr_play_disabled from '../images/vtr/vtr_play_disabled@2x.png';

import vtr_record from '../images/vtr/vtr_record@2x.png';
import vtr_record_hover from '../images/vtr/vtr_record_hover@2x.png';
import vtr_record_push from '../images/vtr/vtr_record_push@2x.png';
import vtr_record_active from '../images/vtr/vtr_record_active@2x.png';
import vtr_record_active_push from '../images/vtr/vtr_record_active_push@2x.png';
import vtr_record_active_hover from '../images/vtr/vtr_record_active_hover@2x.png';
import vtr_record_disabled from '../images/vtr/vtr_record_disabled@2x.png';

import vtr_rehearse from '../images/vtr/vtr_rehearse@2x.png';
import vtr_rehearse_hover from '../images/vtr/vtr_rehearse_hover@2x.png';
import vtr_rehearse_push from '../images/vtr/vtr_rehearse_push@2x.png';
import vtr_rehearse_active from '../images/vtr/vtr_rehearse_active@2x.png';
import vtr_rehearse_active_push from '../images/vtr/vtr_rehearse_active_push@2x.png';
import vtr_rehearse_active_hover from '../images/vtr/vtr_rehearse_active_hover@2x.png';
import vtr_rehearse_disabled from '../images/vtr/vtr_rehearse_disabled@2x.png';

import vtr_rwd from '../images/vtr/vtr_rwd@2x.png';
import vtr_rwd_hover from '../images/vtr/vtr_rwd_hover@2x.png';
import vtr_rwd_push from '../images/vtr/vtr_rwd_push@2x.png';
import vtr_rwd_active from '../images/vtr/vtr_rwd_active@2x.png';
import vtr_rwd_active_push from '../images/vtr/vtr_rwd_active_push@2x.png';
import vtr_rwd_active_hover from '../images/vtr/vtr_rwd_active_hover@2x.png';

import vtr_stepforward from '../images/vtr/vtr_stepforward@2x.png';
import vtr_stepforward_hover from '../images/vtr/vtr_stepforward_hover@2x.png';
import vtr_stepforward_push from '../images/vtr/vtr_stepforward_push@2x.png';

import vtr_stop from '../images/vtr/vtr_stop@2x.png';
import vtr_stop_hover from '../images/vtr/vtr_stop_hover@2x.png';
import vtr_stop_push from '../images/vtr/vtr_stop_push@2x.png';
import vtr_stop_disabled from '../images/vtr/vtr_stop_disabled@2x.png';
import vtr_stop_arrow_hover from '../images/vtr/vtr_stop_arrow_hover@2x.png';

function globalVtr() {

	const vtrImages = [
		{
			class: 'vtr_back',
			image: vtr_back,
			hover: vtr_back_hover,
			push: vtr_back_push,
			active: vtr_back_active,
			active_push: vtr_back_active_push,
			active_hover: vtr_back_active_hover,
		},
		{
			class: 'vtr_ff',
			image: vtr_ff,
			hover: vtr_ff_hover,
			push: vtr_ff_push,
			active: vtr_ff_active,
			active_push: vtr_ff_active_push,
			active_hover: vtr_ff_active_hover,
		},
		{
			class: 'vtr_first',
			image: vtr_first,
			hover: vtr_first_hover,
			push: vtr_first_push,
		},
		{
			class: 'vtr_last',
			image: vtr_last,
			hover: vtr_last_hover,
			push: vtr_last_push,
		},
		{
			class: 'vtr_loop',
			image: vtr_loop,
			hover: vtr_loop_hover,
			push: vtr_loop_push,
			active: vtr_loop_active,
			active_push: vtr_loop_active_push,
			active_hover: vtr_loop_active_hover,
			rrow_hover: vtr_loop_arrow_hover,
			active_arrow_hover: vtr_loop_active_arrow_hover,
		},
		{
			class: 'vtr_pingpong',
			image: vtr_pingpong,
			hover: vtr_pingpong_hover,
			push: vtr_pingpong_push,
			active: vtr_pingpong_active,
			active_push: vtr_pingpong_active_push,
			active_hover: vtr_pingpong_active_hover,
			arrow_hover: vtr_pingpong_arrow_hover,
			active_arrow_hover: vtr_pingpong_active_arrow_hover
		},
		{
			class: 'vtr_play_active',
			image: vtr_play_active,
			active_push: vtr_play_active_push,
			active_hover: vtr_play_active_hover,
		},
		{
			class: 'vtr_play_around',
			image: vtr_play_around,
			hover: vtr_play_around_hover,
			push: vtr_play_around_push,
			active: vtr_play_around_active,
			active_push: vtr_play_around_active_push,
			active_hover: vtr_play_around_active_hover,
		},
		{
			class: 'vtr_play',
			image: vtr_play,
			hover: vtr_play_hover,
			push: vtr_play_push,
			disabled: vtr_play_disabled,
		},
		{
			class: 'vtr_record',
			image: vtr_record,
			hover: vtr_record_hover,
			push: vtr_record_push,
			active: vtr_record_active,
			active_push: vtr_record_active_push,
			active_hover: vtr_record_active_hover,
			disabled: vtr_record_disabled,
		},
		{
			class: 'vtr_rehearse',
			image: vtr_rehearse,
			hover: vtr_rehearse_hover,
			push: vtr_rehearse_push,
			active: vtr_rehearse_active,
			active_push: vtr_rehearse_active_push,
			active_hover: vtr_rehearse_active_hover,
			disabled: vtr_rehearse_disabled,
		},
		{
			class: 'vtr_rwd',
			image: vtr_rwd,
			hover: vtr_rwd_hover,
			push: vtr_rwd_push,
			active: vtr_rwd_active,
			active_push: vtr_rwd_active_push,
			active_hover: vtr_rwd_active_hover,
		},
		{
			class: 'vtr_stepforward',
			image: vtr_stepforward,
			hover: vtr_stepforward_hover,
			push: vtr_stepforward_push,
		},
		{
			class: 'vtr_stop',
			image: vtr_stop,
			hover: vtr_stop_hover,
			push: vtr_stop_push,
			disabled: vtr_stop_disabled,
			arrow_hover: vtr_stop_arrow_hover,
		},
	];

	let vtrImagesEmpty = '';

	vtrImages.forEach(vtr => {
		vtrImagesEmpty +=`
			&.${vtr.class} 						{ background-image: url(${vtr.image})};
			&.${vtr.class}:hover 				{ background-image: url(${vtr.hover})};
			&.${vtr.class}:active 				{ background-image: url(${vtr.push})};
			&.${vtr.class}.active 				{ background-image: url(${vtr.active})};
			&.${vtr.class}.active:hover 		{ background-image: url(${vtr.active_hover})};
			&.${vtr.class}.active:active 		{ background-image: url(${vtr.active_push})};
			&.${vtr.class}.disabled 			{ background-image: url(${vtr.disabled})};
			&.${vtr.class}.arrow_hover 			{ background-image: url(${vtr.arrow_hover})};
			&.${vtr.class}.active_arrow_hover	{ background-image: url(${vtr.active_arrow_hover})};
		`
	});

	return `${vtrImagesEmpty}`;
}

export const Vtr = styled.div `
	${size('100%', '44px', 'block')};
	background-color: #212126;
	border-top: 1px solid #000;

	div	{
		${size('24px', '100%', 'block')};
		background-repeat: no-repeat;
		background-position: center;
		background-size: 24px 25px;
		float: left;
		margin: 0 6px;
		border: 1px solid red;

		${globalVtr()};
	}
`
