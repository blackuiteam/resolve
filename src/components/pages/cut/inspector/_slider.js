
import styled from 'styled-components';
import { size, position, bgimage } from '../../../../styles/_mixins';

// SLIDERS
import SlideBlueImg 		from './img/common/slider-blue.png';
import SliderBoostImg 		from './img/common/slider-boost.png';
import SliderBwImg 			from './img/common/slider-bw.png';
import SliderCyanImg 		from './img/common/slider-cyan.png';
// import SliderDefaultImg 	from './img/common/slider-default.png';
import SliderDetailImg 		from './img/common/slider-detail.png';
import SliderGreenImg 		from './img/common/slider-green.png';
import SliderHighlightImg 	from './img/common/slider-highlight.png';
import SliderHueBlueImg 	from './img/common/slider-hue-blue.png';
import SliderHueCyanImg 	from './img/common/slider-hue-cyan.png';
import SliderHueGlobalImg 	from './img/common/slider-hue-global.png';
import SliderHueGreenImg 	from './img/common/slider-hue-green.png';
import SliderHueMagentaImg 	from './img/common/slider-hue-magenta.png';
import SliderHueRedImg 		from './img/common/slider-hue-red.png';
import SliderHueYellowImg 	from './img/common/slider-hue-yellow.png';
import SliderLumImg 		from './img/common/slider-lum.png';
import SliderMagentaImg 	from './img/common/slider-magenta.png';
import SliderMixImg 		from './img/common/slider-mix.png';
import SliderPivotImg 		from './img/common/slider-pivot.png';
import SliderRedImg 		from './img/common/slider-red.png';
import SliderSatImg 		from './img/common/slider-sat.png';
import SliderShadowImg 		from './img/common/slider-shadow.png';
import SliderTemperatureImg from './img/common/slider-temperature.png';
import SliderTintImg 		from './img/common/slider-tint.png';
import SliderYellowImg 		from './img/common/slider-yellow.png';

function SliderTypes() {
	const sliderProps = [
		{ id: 0, class: 'blue', 		image: SlideBlueImg },
		{ id: 1, class: 'boost', 		image: SliderBoostImg },
		{ id: 2, class: 'bw', 			image: SliderBwImg },
		{ id: 3, class: 'cyan', 		image: SliderCyanImg },
		{ id: 5, class: 'detail', 		image: SliderDetailImg },
		{ id: 6, class: 'green', 		image: SliderGreenImg },
		{ id: 7, class: 'highlight', 	image: SliderHighlightImg },
		{ id: 8, class: 'hue-blue', 	image: SliderHueBlueImg },
		{ id: 9, class: 'hue-cyan', 	image: SliderHueCyanImg },
		{ id: 10, class: 'hue-global', 	image: SliderHueGlobalImg },
		{ id: 11, class: 'hue-green', 	image: SliderHueGreenImg },
		{ id: 12, class: 'hue-magenta', image: SliderHueMagentaImg },
		{ id: 13, class: 'hue-red', 	image: SliderHueRedImg },
		{ id: 14, class: 'hue-yellow', 	image: SliderHueYellowImg },
		{ id: 15, class: 'lum', 		image: SliderLumImg },
		{ id: 16, class: 'magenta', 	image: SliderMagentaImg },
		{ id: 17, class: 'mix', 		image: SliderMixImg },
		{ id: 18, class: 'pivot', 		image: SliderPivotImg },
		{ id: 19, class: 'red', 		image: SliderRedImg },
		{ id: 20, class: 'saturation', 	image: SliderSatImg },
		{ id: 21, class: 'shadow', 		image: SliderShadowImg },
		{ id: 22, class: 'temperature', image: SliderTemperatureImg },
		{ id: 23, class: 'tint', 		image: SliderTintImg },
		{ id: 24, class: 'yellow', 		image: SliderYellowImg },
		{ id: 25, class: 'white', }
	];

	let sliders = '';

	sliderProps.forEach(slider => {
		sliders += `
			&.${slider.class} {
				.rc-slider-rail {
					${bgimage(slider.image, 'no-repeat', '0 0', '100%')};
				}
				.rc-slider-track {
					background-color: transparent;
				}

				.rc-slider-handle {
					background-color: #fff;

					&:hover {
						background-color: #E64B3D;
					}
				}

				&.active {
					.rc-slider-handle {
						background-color: #E64B3D;
					}
				}
			}
		`
	});

	return `${sliders}`;
}

export const Input = styled.input `
	${size('50px', '17px', 'block')};
	${position('1px', '29px', '', '')};
	border: 1px solid transparent;
	background-color: #28282E;
	text-align: right;
	/* color: #979797; */
	color: #D0D0D0;
	padding: 0 3px;
	outline: none;
	user-select: none;

	&:hover, &:focus, &.active {
		color: #fff;
		border: 1px solid #E64B3D;
		border-radius: 3px;
	}
`

export const RcSlider = styled.div `
	${size('100%', '23px', 'block')};
	position: relative;
	z-index: 1;

	&.opacity {
		pointer-events: none;
		opacity: .5;
	}

	&:active {
		${Input} {
			color: white
		};
	}

	.rc-slider {
		${size('calc(100% - 40px)', '4px', 'block')};
		${position('', '', '0px', '0px')};
		margin: 0 25px 0 15px;
		border: 1px solid #000;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
		-ms-touch-action: none;
			touch-action: none;
		box-sizing: border-box;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		cursor: ew-resize;

		&.default {
			.rc-slider-track {
				background-color: #E64B3D;
			}

			.rc-slider-handle {
				background-color: #E64B3D;
			}

			&.active {
				.rc-slider-handle {
					background-color: #E64B3D;
				}
			}
		}

		${SliderTypes()}
	}

	.rc-slider-rail {
		${size('100%', '2px')};
		position: absolute;
		background-color: #28282E;
		cursor: ew-resize;
	}

	.rc-slider-track {
		${position('', '', '', '0')};
		height: 2px;
		border-radius: 6px;
		background-color: #E64B3D;
		opacity: .4;
	}

	.rc-slider-handle {
		${size('5px', '4px')};
		position: absolute;
		margin-top: -1px;
		border-radius: 2px;
		border: solid 1px #000;
		background-color: #fff;
		-ms-touch-action: pan-x;
			touch-action: pan-x;

		&:focus {
			outline: none;
			cursor: ew-resize;
		}

		&:hover {
			${size('5px', '9px')};
			margin-top: -6px;
			cursor: ew-resize;
		}

		&:active {
			${size('5px', '9px')};
			margin-top: -6px;
			cursor: ew-resize;
		}
	}
`
