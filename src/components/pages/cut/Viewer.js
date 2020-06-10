
import React, { useState } from 'react';
import classNames from 'classnames';

// COMPONENTS
import AudioMeterComp from './AudioMeterComp';

function Viewer() {

	const viewerModes = [
		{ id: 0, cssClass: 'mode_clip' },
		{ id: 1, cssClass: 'mode_tape' },
		{ id: 2, cssClass: 'mode_timeline borderR' }
	];

	const [ viewerModeIndex, setViewerModeIndex ] = useState(0);

	return (
		<div>
			<div style={{'width':'calc(100% - 65px)', 'height': '100%', 'float': 'left'}}>
				{/* Mini Header */}
				<div className="MiniHeader">
					<div>
						{viewerModes.map((mode, i)=> (
							<div className={classNames(`icon ${mode.cssClass}`, viewerModeIndex === i ? 'active':'')} onClick={()=> setViewerModeIndex(i)}></div>
						))}
					</div>

					<div>
						<span className="title" style={{'fontSize':'12px'}}>Timeline 1</span>
					</div>

					<div>
						<span style={{'marginRight':'10px','fontSize':'12px'}}>01:00:00:00</span>
						<div className="icon aspect borderL"></div>
						<div className="arrow arrow borderR"></div>

						<div className="icon colour_space"></div>
						<div className="arrow arrow borderR"></div>

						<div className="icon color_fusion"></div>
					</div>
				</div>

				{/* Viewer */}
				<div className="ViewerCut"></div>

				{/* Viewer ToolBar */}
				<div className="VtrCut">
					<div>
						<div className="vtr_fast_review"></div>
						<div className="inspector_tool"></div>
					</div>

					<div>
						<div className="vtr_first"></div>
						<div className="vtr_back"></div>
						<div className="vtr_stop"></div>
						<div className="vtr_play"></div>
						<div className="vtr_last"></div>
						<div className="vtr_loop"></div>
					</div>

					<div>
						<div className="markin"></div>
						<div className="markout"></div>
					</div>

					<div>
						<span>01:00:00:00</span>
					</div>
				</div>
			</div>

			{/* Audio Meter */}
			<AudioMeterComp/>
		</div>
	)
}

export default Viewer;
