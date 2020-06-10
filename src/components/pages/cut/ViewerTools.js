
import React from 'react';

// COMPONENTS
import MediaPool 	from './MediaPool';
import SyncBin 		from './SyncBin';
import Transitions 	from './Transitions';
import Titles 		from './Titles';
import Effects 		from './Effects';

function ViewerTools(props) {
	return (
		<>
			<div>
				<div style={props.nav === 0 ? {'display':'block'} : {'display':'none'}}>
					<MediaPool/>
				</div>
				<div style={props.nav === 1 ? {'display':'block'} : {'display':'none'}}>
					<SyncBin/>
				</div>
				<div style={props.nav === 2 ? {'display':'block'} : {'display':'none'}}>
					<Transitions/>
				</div>
				<div style={props.nav === 3 ? {'display':'block'} : {'display':'none'}}>
					<Titles/>
				</div>
				<div style={props.nav === 4 ? {'display':'block'} : {'display':'none'}}>
					<Effects/>
				</div>
			</div>
		</>
	)
}

export default ViewerTools;
