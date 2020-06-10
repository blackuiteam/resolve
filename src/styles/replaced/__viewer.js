
// ===> VIEWER

import styled from 'styled-components';
import { size, position } from './_mixins';

// IMAGES

import ViewerCutImage from '../images/common/viewer_image.png';

export const ViewerCut = styled.div `
	${size('100%', 'calc(100% - 74px)', '')};
	background-image: url(${ViewerCutImage});
	background-size: contain;
	background-color: #1A1A1A;
	background-repeat: no-repeat;
	background-position: center;
`

//  VIEWER CUT PAGE
export const MediaPoolContent = styled.div `
	${size('100%', 'calc(100% - 74px)', 'block')};

	.breadcrumb {
		${size('100%', '29px', 'flex')};
		align-items: center;
		background-color: #212126;
		border-bottom: 1px solid #000;
		font-family: 'Opensans Semibold';
		font-size: 11px;
		color: #fff;
		padding: 0 0 0 10px;
	}
`

export const SyncBinContent = styled.div `
	${size('100%', 'calc(100% - 74px)', 'block')};
`

export const TransitionsContent = styled.div `
	${size('100%', 'calc(100% - 74px)', 'block')};
	overflow: scroll;

	.title {
		font-family: 'Opensans Semibold';
		font-size: 14px;
		color: #fff;
		margin: 15px 0 15px 10px;
	}

	.content {
		${size('calc(100% - 20px)', 'auto', 'block')};
		margin: 10px auto;
		padding: 10px 0;
		border: 1px solid #000;
		border-radius: 3px;
		clear: both;

		.row {
			${size('100%', '32px', 'flex')};
			font-family: 'Opensans Regular';
			font-size: 12px;
			color: #929292;
			padding: 0 12px;
			align-items: center;

			&:hover {
				color: #fff;
			}

			&.active {
				color: #fff;
				background-color: #17181A;
			}
		}
	}
`

export const TitlesContent = styled.div `
	${size('100%', 'calc(100% - 74px)', 'block')};
	overflow: scroll;

.title {
	font-family: 'Opensans Semibold';
	font-size: 14px;
	color: #fff;
	margin: 15px 0 15px 10px;
}

.content {
	${size('calc(100% - 20px)', 'auto', 'block')};
	margin: 10px auto;
	padding: 10px 0;
	border: 1px solid #000;
	border-radius: 3px;
	clear: both;

	.row {
		${size('100%', '32px', 'flex')};
		font-family: 'Opensans Regular';
		font-size: 12px;
		color: #929292;
		padding: 0 12px;
		align-items: center;

		&:hover {
			color: #fff;
		}

		&.active {
			color: #fff;
			background-color: #17181A;
		}
	}
}
`

export const EffectsContent = styled.div `
	${size('100%', 'calc(100% - 74px)', 'block')};
`

export const AudioMeter = styled.div `
	${size('65px', '100%', 'block')};
	position: relative;
	float: left;
	border-left: 1px solid #000;

	.meter {
		${size('19px', 'calc(100% - 92px)', 'block')};
		${position('35px', '', '57px', 'calc(50% - (19px / 2))')};
		background-color: #28282E;
		border: 1px solid #000;

		&:before {
			content:'';
			${size('1px', '100%', '')};
			${position('0', '', '', 'calc(50% - 1px)')};
			background-color: #000;
		}
	}
`


