
import React, { useState } from 'react';
import Split from 'react-split';
import classNames from 'classnames';

// COMPONENTS
import ViewerContent  from './ViewerContent';
import TimelineContent from './TimelineContent';
import Inspector from './inspector/Inspector';

function Cut() {

	const [ inspector, setInspector ] = useState(false);
	const [ viewerToolsIndex, setViewerTools ] = useState(0);

	const ViewerTools = [
		{ id: 0, class: 'media', label: 'Media Pool' },
		{ id: 1, class: 'sync_bin', label: 'Sync Bin' },
		{ id: 2, class: 'transitions', label: 'Transitions' },
		{ id: 3, class: 'titles', label: 'Titles' },
		{ id: 4, class: 'effects no-border', label: 'Effects' },
	];

	const [ activeIndex, setActiveIndex ] = useState(0);

	function inspecClip() 	{ setActiveIndex(0); }
	function inspecGen() 	{ setActiveIndex(1); }
	function inspecTrans() 	{ setActiveIndex(2); }
	function inspecText() 	{ setActiveIndex(3); }

	return (
		<>
			<div className="main-header">
				{ViewerTools.map((item, i) => (
					<div key={i} className={classNames(item.class, viewerToolsIndex === i ? "active" : "")} onClick={()=> setViewerTools(i)}>{item.label}</div>
				))}

				<div className="export right no-border">Quick Export</div>
				<div className={inspector ? "inspector right active" : "inspector right"} onClick={()=> setInspector(!inspector)}>Inspector</div>
			</div>

			<div className="Content">

				<Split
					style={inspector ? {'width':'calc(100% - 336px)', 'height':'100%', 'borderRight':'1px solid #000', 'float':'left'} : {'width':'100%', 'height':'100%'}}
					sizes={[60, 40]}
					minSize={[250, 414]}
					expandToMin={true}
					gutterSize={2}
					gutterAlign="start"
					dragInterval={1}
					direction="vertical"
					cursor="row-resize">

					{/* VIEWER CONTENT */}
					<><ViewerContent nav={viewerToolsIndex}/></>

					{/* TIMELINE CONTENT */}
					<><TimelineContent triggers={[inspecClip, inspecGen, inspecTrans, inspecText]}/></>
				</Split>

				<div className={inspector ? '': 'none'} style={{'width':'336px', 'height':'100%', 'float':'left'}}>
					<Inspector comps={activeIndex}/>
				</div>
			</div>
		</>
	)
}

export default Cut;
