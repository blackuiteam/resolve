import React, { useState } from 'react';

function Car(props) {
	const myContent = [
		{ id: 0, content: 'teste 1' },
		{ id: 1, content: 'teste 2' },
		{ id: 2, content: 'teste 3' },
	]
	return (
		<>
			{/* {myContent.map((item, i) => (
				<div style={props.brand === i ? {'display':'block'} : {'display':'none'}}>{item.label}</div>
			))} */}
			<div style={props.comps === 0 ? {'display':'block'} : {'display':'none'}}>content 1</div>
			<div style={props.comps === 1 ? {'display':'block'} : {'display':'none'}}>content 2</div>
			<div style={props.comps === 2 ? {'display':'block'} : {'display':'none'}}>content 3</div>
		</>

		// <div style={props.brand === 'ford' ? {'border': '1px solid red'} : {'border': '1px solid blue'}}>
		// 	<h2>I am a {props.brand}!</h2>
		// </div>
	)
}

function App() {
	const menu = [
		{ label: 'Media Pool'},
		{ label: 'Sync Bin' },
		{ label: 'Transitions' }
	]

	const [ toggle, setToggle ] = useState(false);
	const [ activeIndex, setActiveIndex ] = useState(0);

	return (
		<div>
			{/* <Car brand={toggle ? "teste" : "ford"}/> */}
			{/* <button onClick={()=> setToggle(!toggle)}>click</button> */}
			{/* <div style={activeIndex !== 0 ? {'border': '1px solid red'} : {'border': '1px solid blue'}}>teste</div> */}

			<Car comps={activeIndex}/>

			{menu.map((btn, i) => (
				<button onClick={()=> setActiveIndex(i)}>{btn.label}</button>
			))}
		</div>
	);
}

export default App;
