
export function size(wVal, hVal = null, dVal = '') {

	if(hVal === '') { hVal = wVal }

	return `
		width: 	${wVal};
		height: ${hVal};
		display: ${dVal};
	`
}

export function position(ptop = null, pright = null, pbottom = null, pleft = null) {
	return `
		position: absolute;
		top: 	${ptop};
		right: 	${pright};
		bottom: ${pbottom};
		left: 	${pleft}
	`
}

export function bgimage(bgUrl, bgRepeat, bgPosition, bgSize) {
	return `
		background-image: 		url('${bgUrl}');
		background-repeat: 		${bgRepeat};
		background-position: 	${bgPosition};
		background-size: 		${bgSize};
	`
}

export function grid(gridRows, gridColumns) {
	return `
		display: grid;
		grid-template-rows: ${gridRows};
		grid-template-columns: repeat(${gridColumns}, calc(100% / ${gridColumns}));
	`
}
