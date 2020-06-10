
// ===> MAIN NAVIGATION

import styled from 'styled-components';
import { size, position, bgimage } from './_mixins';

import mediaNav 			from '../images/navigation/media@2x.png';
import mediaNavActive 		from '../images/navigation/media_active@2x.png';

import cutNav 				from '../images/navigation/speed_edit@2x.png';
import cutNavActive 		from '../images/navigation/speed_edit_active@2x.png';

import editNav 				from '../images/navigation/edit@2x.png';
import editNavActive 		from '../images/navigation/edit_active@2x.png';

import fusionNav 			from '../images/navigation/audio@2x.png';
import fusionNavActive 		from '../images/navigation/audio_active@2x.png';

import colorNav 			from '../images/navigation/color@2x.png';
import colorNavActive 		from '../images/navigation/color_active@2x.png';

import fairlightNav 		from '../images/navigation/audio@2x.png';
import fairlightNavActive 	from '../images/navigation/audio_active@2x.png';

import deliverNav 			from '../images/navigation/deliver@2x.png';
import deliverNavActive 	from '../images/navigation/deliver_active@2x.png';


function createNav() {
	const imagesNav = [
		{ id: 0, image: mediaNav, 		active: mediaNavActive },
		{ id: 1, image: cutNav, 		active: cutNavActive },
		{ id: 2, image: editNav, 		active: editNavActive },
		{ id: 3, image: fusionNav, 		active: fusionNavActive },
		{ id: 4, image: colorNav, 		active: colorNavActive },
		{ id: 5, image: fairlightNav, 	active: fairlightNavActive },
		{ id: 6, image: deliverNav, 	active: deliverNavActive }
	]

	let NavLinks = '';

	imagesNav.forEach(nav => {
		NavLinks += `
			&:nth-child(${nav.id}) {
				${bgimage(`${imagesNav[nav.id].image}`, 'no-repeat', 'center', '26px 26px')};
			}

			&:nth-child(${nav.id}).active, &:nth-child(${nav.id}):hover {
				background-image: url(${imagesNav[nav.id].active});
			}
		`
	});

	return `${NavLinks}`;
}


export const Navigation = styled.div `
	${size('100%', '30px', 'flex')};
	${position('', '', '1px', '0px')};
	justify-content: center;
	background-color: #17181A;
	border-top: 1px solid #000;

	a {
		&.navigation {
			${size('113px', '30px', 'block')};
			text-indent: -10000px;
			float: left;
			text-decoration: none;

			${createNav()};

			&.active {
				background-color: #000;
				-webkit-box-shadow: inset 0px -2px 0px 0px rgba(253,56,48,1);
				-moz-box-shadow: 	inset 0px -2px 0px 0px rgba(253,56,48,1);
				box-shadow: 		inset 0px -2px 0px 0px rgba(253,56,48,1);
			}

			&:hover {
				-webkit-box-shadow: inset 0px -2px 0px 0px rgba(146,146,146,1);
				-moz-box-shadow: 	inset 0px -2px 0px 0px rgba(146,146,146,1);
				box-shadow: 		inset 0px -2px 0px 0px rgba(146,146,146,1);
			}
		}
	}

`
