
import React from 'react';
import Split from 'react-split';

// COMPONENTS
import Viewer 		from './Viewer';

// COMPONENTS
import MediaPool 	from './MediaPool';
import SyncBin 		from './SyncBin';
import Transitions 	from './Transitions';
import Titles 		from './Titles';
import Effects 		from './Effects';

function ViewerContent(props) {
	return (
		<div style={{'height':'100%', 'width':'100%'}}>
			<Split
				style={{'width':'100%', 'height':'100%', 'display':'flex'}}
				sizes={[23.5, 76.5]}
				minSize={[601, 800]}
				expandToMin={true}
				gutterSize={1}
				gutterAlign="start"
				dragInterval={1}
				direction="horizontal"
				cursor="col-resize"
				snapOffset={false}
				>

				{/* VIEWER TOOLS */}
				<div>
					<div style={props.nav === 0 ? {'display':'contents'} : {'display':'none'}}><MediaPool/></div>
					<div style={props.nav === 1 ? {'display':'contents'} : {'display':'none'}}><SyncBin/></div>
					<div style={props.nav === 2 ? {'display':'contents'} : {'display':'none'}}><Transitions/></div>
					<div style={props.nav === 3 ? {'display':'contents'} : {'display':'none'}}><Titles/></div>
					<div style={props.nav === 4 ? {'display':'contents'} : {'display':'none'}}><Effects/></div>
				</div>

				{/* VIEWER */}
				<Viewer/>
			</Split>
		</div>
	)
}

export default ViewerContent;
