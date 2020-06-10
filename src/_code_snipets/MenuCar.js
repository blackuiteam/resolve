import React from 'react';

function MenuCar(props) {
	return (
		<>
			<button onClick={props.myFunc[0]}>{props.comps[0].label}</button>
			<button onClick={props.myFunc[1]}>{props.comps[1].label}</button>
			<button onClick={props.myFunc[2]}>{props.comps[2].label}</button>
			<button onClick={props.myFunc[3]}>{props.comps[3].label}</button>
		</>
	)
}

export default MenuCar;
