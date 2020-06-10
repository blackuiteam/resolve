
import styled, { createGlobalStyle } from 'styled-components';
import { size, position, bgimage } from '../../../../styles/_mixins';

// NAVIGATION INSPECTOR
import VideoImg 		from './img/nav/video.png';
import VideoActiveImg 	from './img/nav/video-active.png';

import SizingImg 		from './img/nav/sizing.png';
import SizingActiveImg 	from './img/nav/sizing-active.png';

import AudioImg 		from './img/nav/audio.png';
import AudioActiveImg 	from './img/nav/audio-active.png';

import ColorImg 		from './img/nav/color.png';
import ColorActiveImg 	from './img/nav/color-active.png';

import EffectsImg 		from './img/nav/effects.png';
import EffectsActiveImg from './img/nav/effects-active.png';

import FileImg 			from './img/nav/file.png';
import FileActiveImg 	from './img/nav/file-active.png';

// NAVIGATION TEXT TEMPLATE
import TextImg 				from './img/nav/text/text.png';
import TextActiveImg		from './img/nav/text/text-active.png';
import FrameImg 			from './img/nav/text/frame.png';
import FrameActiveImg		from './img/nav/text/frame-active.png';
import StyleImg 			from './img/nav/text/style.png';
import StyleActiveImg		from './img/nav/text/style-active.png';
import SettingsImg 			from './img/nav/text/settings.png';
import SettingsActiveImg	from './img/nav/text/settings-active.png';
import TextVideoImg 		from './img/nav/text/video.png';
import TextVideoActiveImg	from './img/nav/text/video-active.png';

import ResetCursor 			from './img/common/reset_hover_cursor.png';
import Arrow 				from './img/icons/arrow.png';
import Tick 				from './img/common/tick.png';

// function DefaultNav() {
// 	return `
// 		${size('46px', '100%')};
// 		position: relative;
// 		display: block;
// 		float: left;

// 		> span {
// 			${position('', '', '7px', '0px')};
// 			font-family: "OpenSans regular";
// 			display: block;
// 			width: 100%;
// 			font-size: 10px;
// 			text-align: center;
// 			color: #828282;
// 		}

// 		&.active {
// 			&:before {
// 				content: "";
// 				${size('40px', '2px')};
// 				${position('', '', '1px', '3px')};
// 				background-color: #E64B3D;
// 			}

// 			span {
// 				color: #fff;
// 			}
// 		}
// 	`
// }

// LOOPS
// function createNavItems() {
// 	const NavClip = [
// 		{ id: 1, image: VideoImg, 	pos: '13px 8px', size: '21px 13px', active: VideoActiveImg, 	posA: '11px 6px', sizeA: '24px 18px' },
// 		{ id: 2, image: SizingImg, 	pos: '13px 8px', size: '21px 13px', active: SizingActiveImg, 	posA: '11px 7px', sizeA: '25px 16px' },
// 		{ id: 3, image: AudioImg, 	pos: '11px 5px', size: '25px 19px', active: AudioActiveImg, 	posA: '11px 5px', sizeA: '25px 19px' },
// 		{ id: 4, image: ColorImg, 	pos: '11px 4px', size: '25px 21px', active: ColorActiveImg, 	posA: '12px 4px', sizeA: '23px 21px' },
// 		{ id: 5, image: EffectsImg, pos: '14px 4px', size: '21px 20px', active: EffectsActiveImg, 	posA: '13px 2px', sizeA: '23px 24px' },
// 		{ id: 6, image: FileImg, 	pos: '11px 4px', size: '25px 21px', active: FileActiveImg, 		posA: '11px 4px', sizeA: '25px 21px' },
// 	]

// 	let navClipItems = '';

// 	NavClip.forEach(nav => {
// 		navClipItems += `
// 			&:nth-child(${nav.id}) 			{ ${bgimage(nav.image, 'no-repeat', nav.pos, nav.size)}; };
// 			&:nth-child(${nav.id}).active 	{ ${bgimage(nav.active, 'no-repeat', nav.posA, nav.sizeA)}; };
// 		`
// 	});

// 	return `${navClipItems}`;
// }

// function createNavTextItems() {
// 	const NavText = [
// 		{ id: 1, image: TextImg, 		pos: '8px 0px',  size: '32px 32px', active: TextActiveImg, 		posA: '15px 7px', 	sizeA: '16px 18px' },
// 		{ id: 2, image: FrameImg, 		pos: '8px 0', 	 size: '30px 32px', active: FrameActiveImg, 	posA: '8px 0', 		sizeA: '30px 32px' },
// 		{ id: 3, image: StyleImg, 		pos: '9px 0', 	 size: '30px 32px', active: StyleActiveImg, 	posA: '9px 0', 		sizeA: '30px 32px' },
// 		{ id: 4, image: SettingsImg, 	pos: '12px 9px', size: '22px 16px', active: SettingsActiveImg, 	posA: '11px 8px', 	sizeA: '25px 20px' },
// 		{ id: 5, image: TextVideoImg, 	pos: '13px 9px', size: '21px 13px', active: TextVideoActiveImg, posA: '11px 7px', 	sizeA: '24px 18px' }
// 	]

// 	let navTextItems = '';

// 	NavText.forEach(nav => {
// 		navTextItems += `
// 			&:nth-child(${nav.id}) 			{ ${bgimage(nav.image, 'no-repeat', nav.pos, nav.size)}; };
// 			&:nth-child(${nav.id}).active 	{ ${bgimage(nav.active, 'no-repeat', nav.posA, nav.sizeA)}; };
// 		`
// 	});

// 	return `${navTextItems}`;
// }

// function createNavGenItems() {
// 	const NavGen = [
// 		{ id: 1, image: VideoImg, 	pos: '13px 8px', size: '21px 13px', active: VideoActiveImg, 	posA: '11px 6px', sizeA: '24px 18px' },
// 		{ id: 2, image: SizingImg, 	pos: '13px 8px', size: '21px 13px', active: SizingActiveImg, 	posA: '11px 7px', sizeA: '25px 16px' },
// 	]

// 	let navGenItems = '';

// 	NavGen.forEach(nav => {
// 		navGenItems += `
// 			&:nth-child(${nav.id}) 			{ ${bgimage(nav.image, 'no-repeat', nav.pos, nav.size)}; };
// 			&:nth-child(${nav.id}).active 	{ ${bgimage(nav.active, 'no-repeat', nav.posA, nav.sizeA)}; };
// 		`
// 	});

// 	return `${navGenItems}`;
// }

// function createNavTransItems() {
// 	const NavTrans = [
// 		{ id: 1, image: VideoImg, 	pos: '13px 8px', size: '21px 13px', active: VideoActiveImg, 	posA: '11px 6px', sizeA: '24px 18px' },
// 		{ id: 2, image: AudioImg, 	pos: '11px 5px', size: '25px 19px', active: AudioActiveImg, 	posA: '11px 5px', sizeA: '25px 19px' },
// 	]

// 	let navTransItems = '';

// 	NavTrans.forEach(nav => {
// 		navTransItems += `
// 			&:nth-child(${nav.id}) 			{ ${bgimage(nav.image, 'no-repeat', nav.pos, nav.size)}; };
// 			&:nth-child(${nav.id}).active 	{ ${bgimage(nav.active, 'no-repeat', nav.posA, nav.sizeA)}; };
// 		`
// 	});

// 	return `${navTransItems}`;
// }

// export const AppContainer = styled.div `
// 	${size('336px', 'auto', 'table')};
// 	float: left;
// `

// export const NavWrapper = styled.div `
// 	${size('100%', 'calc(24px + 49px)', 'block')};
// `

// export const Wrapper = styled.div `
// 	${size('336px', 'calc(100% - 73px)', 'block')};
// 	${position('73px', '0', '', '')};
// 	color: #fff;
// 	margin-bottom: 60px;
// `

// export const ClipsWrapper = styled.div `
// 	${size('336px', 'auto', 'block')};
// 	${position('0', '', '', '0')};
// `

// export const Header = styled.div `
// 	${size('100%', '24px')};
// 	display: flex;
// 	padding: 2px 0 0 9px;
// 	font-size: 12px;
// 	background-color: #212126;
// 	border-bottom: 1px solid #000;
// 	color: #fff;
// `

// export const Navigation = styled.div `
// 	${size('100%', '49px')};
// 	display: flex;
// 	justify-content: center;
// 	background-color: #212126;
// 	border-bottom: 1px solid #000;
// `

// export const NavItem = styled.div `
// 	${DefaultNav()};
// 	${createNavItems()};
// `

// export const NavTextItem = styled.div `
// 	${DefaultNav()};
// 	${createNavTextItems()};
// `

// export const NavGenItem = styled.div `
// 	${DefaultNav()};
// 	${createNavGenItems()};
// `

// export const NavTransItem = styled.div `
// 	${DefaultNav()};
// 	${createNavTransItems()};
// `

// export const Toggle = styled.div `
// 	${size('21px', '14px')};
// 	position: relative;
// 	float: left;
// 	margin: 9px 0 0 0px;
// 	background-color: #171717;
// 	border-radius: 30px;

// 	&::before {
// 		${size('8px', '8px')};
// 		${position('3px', '', '', '10px')};
// 		content:"";
// 		background-color: #E64B3D;
// 		border-radius: 50%;
// 		transition: .3s;
// 	}

// 	&.active {
// 		&::before {
// 			${position('3px', '', '', '3px')};
// 			background-color: #929292;
// 		}
// 	}
// `

// export const LabelToggle = styled.div `
// 	display: block;
// 	font-family: 'OpenSans regular';
// 	text-rendering: optimizeLegibility;
// 	letter-spacing: 0.1px;
// 	float: left;
// 	margin: 6px 0 0 8px;
// 	font-size: 11px;
// 	color: #fff;
// `

// export const MiniContainer = styled.div `
// 	${size('calc(100% - 39px)', 'auto', 'block')};
// 	margin: 0 0 0 16px;
// 	border-bottom: 1px solid #1B1B1E;

// 	&.first {
// 		border-top: 1px solid #1B1B1E;
// 	}

// 	&.no-border {
// 		border: none;
// 		/* margin: 0 0 0 0; */
// 	}

// 	.row {
// 		width: 100%;
//     	height: 30px;
// 		padding: 0 0 0 0;
// 	}
// `

// export const MiniToggle = styled.div `
// 	${size('100%', '29px')};
// 	font-family: 'Opensans regular';
// 	letter-spacing: 0.1px;
// 	position: relative;
// 	margin: 0 auto;
// 	padding: 7px 0 0 20px;
// 	font-size: 11px;

// 	&:before {
// 		content: "";
// 		${size('9px', '6px', 'block')};
// 		${position('12px', '', '', '0px')};
// 		${bgimage(Arrow,'no-repeat', '0 0', '9px 6px')};
// 	}

// 	&.active {
// 		&:before {
// 			transform: rotate(270deg);
// 		}
// 	}
// `

// export const RoundedButton = styled.div `
// 	${size('95px', '21px', 'block')};
// 	float: left;
// 	text-align: center;
// 	border: 1px solid #43474D;
// 	border-radius: 50px;
// 	color: #979797;
// 	font-family: 'OpenSans light';
// 	font-size: 11px;
// 	margin: -1px 0 0 0;
// 	padding: 1px 0 0 0;

// 	&.offset {
// 		width: 80px;
// 		margin: 0 0 0 106px;
// 	}
// `

// export const InputLabel = styled.label `
// 	${size('auto', '17px', 'block')};
// 	${position('2px', '', '', '24px')};
// 	/* color: #979797; */
// 	color: #D0D0D0;
// 	font-family: 'OpenSans light';
// 	font-size: 11px;
// 	letter-spacing: 0.1px;
// 	z-index: 3;

// 	&:hover {
// 		cursor: url(${ResetCursor}), auto;
// 	}

// 	&.active { color: #fff; }
// `

// export const Tabs = styled.div `
// 	${size('auto', '23px', 'block')};
// 	margin: 0 25px 0 15px;

// 	.btn-tab {
// 		float: left;
// 		background-color: #222226;
// 		border-right: 1px solid #000;
// 		border-top: 1px solid #000;
// 		border-bottom: 1px solid #000;
// 		text-align: center;
// 		font-family: 'OpenSans light';
// 		font-size: 11px;
// 		color: #979797;
// 		padding: 3px 0 0 0;

// 		&.active {
// 			color: #fff;
// 			background-color: #171717;
// 		}

// 		&:first-child {
// 			border-top-left-radius: 2px;
// 			border-bottom-left-radius: 2px;
// 			border-left: 1px solid #000;
// 		}

// 		&:last-child {
// 			border-top-right-radius: 2px;
// 			border-bottom-right-radius: 2px;
// 			border-right: 1px solid #000;
// 		}

// 		&.two {
// 			${size('calc(100% / 2)', '100%')};
// 		}

// 		&.three {
// 			${size('calc(100% / 3)', '100%')};
// 		}

// 		&.four {
// 			${size('calc(100% / 4)', '100%')};
// 		}

// 		&.five {
// 			${size('calc(100% / 5)', '100%')};
// 		}
// 	}
// `

// export const CheckBox = styled.div `
// 	${size('auto','15px','block')};
// 	position: relative;
// 	margin: 3px 0 0 -1px;
// 	padding: 0 0 0 23px;
// 	float: left;
// 	font-family: 'OpenSans light';
// 	font-size: 11px;
// 	color: #979797;

// 	&:before {
// 		content: "";
// 		${size('13px','13px','block')};
// 		${position('0', '', '', '0')};
// 		border: 1px solid #000;
// 		background-color: #222226;
// 		border-radius: 2px;
// 		float: left;
// 	}

// 	&.active {
// 		&:before {
// 			${bgimage(Tick, 'no-repeat', 'center', '10px 10px')};
// 		}
// 	}
// `

// export const Row = styled.div `
// 	${size('100%', '30px')};
// 	padding: 0 20px 0 16px;

// 	&.header {
// 		border-top: 1px solid #000;
// 	}

// 	&.mini-title {
// 		height: 23px;
// 		padding: 8px 0 0 16px;
// 		font-family: 'OpenSans light';
// 		font-size: 10px;
// 		color: #979797;
// 	}

// 	&.row-slider {
// 		height: 23px;
// 		padding: 0;
// 		position: relative;
// 	}

// 	&.mini-row {
// 		position: relative;
// 		height: 4px;

// 		&:before {
// 			content: "";
// 			${size('calc(100% - 39px)', '1px', 'block')};
// 			${position('0','','','15px')};
// 			background-color: #1B1B1E;
// 		}
// 	}
// `
