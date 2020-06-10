
import styled from 'styled-components';
import { size, bgimage } from '../../../../styles/_mixins';

import iconAudio 		from './img/icons/audio.png';
import iconAudioActive 	from './img/icons/audio_active.png';
import iconAudioHover 	from './img/icons/audio_active_hover.png';

import iconAuto 		from './img/icons/auto.png';
import iconAutoActive 	from './img/icons/auto_active.png';
import iconAutoHover 	from './img/icons/auto_active_hover.png';

import iconColScience 			from './img/icons/col_science.png';
import iconColScienceActive 	from './img/icons/col_science_active.png';
import iconColScienceHover 		from './img/icons/col_science_active_hover.png';

import iconColorWheels 			from './img/icons/color_wheels.png';
import iconColorWheelsActive 	from './img/icons/color_wheels_active.png';
import iconColorWheelsHover 	from './img/icons/color_wheels_active_hover.png';

import iconControls 		from './img/icons/controls.png';
import iconControlsActive 	from './img/icons/controls_active.png';
import iconControlsHover 	from './img/icons/controls_active_hover.png';

import iconCrop 			from './img/icons/crop.png';
import iconCropActive 		from './img/icons/crop_active.png';
import iconCropHover 		from './img/icons/crop_active_hover.png';

import iconCurves 			from './img/icons/curves.png';
import iconCurvesActive 	from './img/icons/curves_active.png';
import iconCurvesHover 		from './img/icons/curves_active_hover.png';

import iconDelete			from './img/icons/delete.png';
import iconDeleteActive 	from './img/icons/delete_push.png';
import iconDeleteHover 		from './img/icons/delete_hover.png';

import iconDynamic			from './img/icons/dyn-zoom.png';
import iconDynamicActive 	from './img/icons/dyn-zoom_active.png';
import iconDynamicHover 	from './img/icons/dyn-zoom_active.png';

import iconEq				from './img/icons/eq.png';
import iconEqActive 		from './img/icons/eq_active.png';
import iconEqHover 			from './img/icons/eq_active_hover.png';

import iconKf				from './img/icons/kf.png';
import iconKfActive 		from './img/icons/kf_active.png';

import iconResetAll			from './img/icons/reset_all.png';
import iconResetAllActive 	from './img/icons/reset_all_hover.png';
import iconResetAllHover 	from './img/icons/reset_all_hover.png';

import iconSpeed			from './img/icons/speed.png';
import iconSpeedActive 		from './img/icons/speed_active.png';
import iconSpeedHover 		from './img/icons/speed_active.png';

import iconPreview			from './img/icons/preview.png';
import iconPreviewActive 	from './img/icons/preview_active.png';
import iconPreviewHover 	from './img/icons/preview_active_hover.png';

import iconTransform		from './img/icons/transform.png';
import iconTransformActive 	from './img/icons/transform_active.png';
import iconTransformHover 	from './img/icons/transform_active_hover.png';

function iconsTools() {
	const iconsList = [
		{
			id: 0,
			class: 	'ic-audio',
			image: 	iconAudioActive, active: iconAudio, hover: iconAudioHover,
		},
		{
			id: 1,
			class: 	'ic-auto',
			image: 	iconAuto, active: iconAutoActive, hover: iconAutoHover,
		},
		{
			id: 2,
			class: 	'ic-col-science',
			image: 	iconColScienceActive, active: iconColScience, hover: iconColScienceHover,
		},
		{
			id: 3,
			class: 	'ic-colorwheel',
			image: 	iconColorWheelsActive, active: iconColorWheels, hover: iconColorWheelsHover,
		},
		{
			id: 4,
			class: 	'ic-controls',
			image: 	iconControlsActive, active: iconControls, hover: iconControlsHover,
		},
		{
			id: 5,
			class: 	'ic-crop',
			image: 	iconCropActive, active: iconCrop, hover: iconCropHover,
		},
		{
			id: 6,
			class: 'ic-curves',
			image: 	iconCurvesActive, active: iconCurves, hover: iconCurvesHover,
		},
		{
			id: 7,
			class: 'ic-delete',
			image: 	iconDelete, active: iconDeleteActive, hover: iconDeleteHover,
		},
		{
			id: 8,
			class: 'ic-dynamic',
			image: 	iconDynamicActive, active: iconDynamic, hover: iconDynamicHover,
		},
		{
			id: 9,
			class: 'ic-eq',
			image: 	iconEqActive, active: iconEq, hover: iconEqHover,
		},
		{
			id: 10,
			class: 'ic-kf ',
			image: 	iconKf, active: iconKfActive, hover: iconKfActive,
		},
		{
			class: 'ic-reset ',
			image: 	iconResetAll, active: iconResetAllActive, hover: iconResetAllHover,
		},
		{
			id: 10,
			class: 'ic-speed',
			image: 	iconSpeedActive, active: iconSpeed, hover: iconSpeedHover,
		},
		{
			id: 11,
			class: 'ic-preview',
			image: 	iconPreviewActive, active: iconPreview, hover: iconPreviewHover,
		},
		{
			id: 12,
			class: 'ic-transform',
			image: 	iconTransformActive, active: iconTransform, hover: iconTransformHover,
		},
	];

	let icons = '';

	iconsList.forEach(icn => {
		icons +=`
			&.${icn.class} {
				${bgimage(icn.image, 'no-repeat', '1px -1px', '23px 23px')};

				&.active 	{ background-image: url(${icn.active}); }
				&:hover 	{ background-image: url(${icn.hover}); }
			}
		`
	});

	return `${icons}`;
}

export const ToggleTools = styled.div `
	${size('23px', '20px')};
	display: block;
	float: right;
	margin: 5px 0 0 0;

	&.ic-reset {
		background-size: 20px 20px!important;
	}

	${iconsTools()};
`
