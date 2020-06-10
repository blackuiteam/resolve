
// ===> GLOBAL STYLES

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		user-select: none;
		color: #929292;
		font-family: "OpenSans regular";
		cursor: default;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background-color: #28282E;
		overflow: hidden;
	}

	img {
		display: block;
		margin: 0 auto;
	}

	.none { display: none; }

	.gutter {
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: 50%;
		border-top: 1px solid #000;

		&.gutter-horizontal {
			height: 100%;
			background-color: #000;

			&:hover {
				cursor: col-resize;
			}
		}

		&:hover {
			cursor: row-resize;
		}
	}
`
