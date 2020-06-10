import React, { useState } from 'react';

function ContentCar(props) {
	const myContent = [
		{ id: 0, content: 'teste 1' },
		{ id: 1, content: 'teste 2' },
		{ id: 2, content: 'teste 3' },
		{ id: 3, content: 'teste 4' },
	];

	return (
		<>
			{myContent.map((content, i)=> (
				<div style={props.comps === i ? {'display':'block'} : {'display':'none'}}>{content.content}</div>
			))}
		</>
	)
}


export default ContentCar;
