
import React from 'react';

function SyncBin() {
	return (
		<>
			{/* Mini Header */}
			<div className="MiniHeader">
				<div>
					<div className="icon sidepanel"></div>
					<div className="arrow arrow borderR"></div>
					<span>Master</span>
				</div>

				<div></div>

				<div></div>
			</div>

			{/* Content */}
			<div className="SyncBinContent"></div>

			{/* Viewer ToolBar */}
			<div className="editTools">
				<div>
					<div className="boring"></div>
					<div className="split"></div>
				</div>

				<div>
					<div className="insert"></div>
					<div className="to_end disabled"></div>
					<div className="ripple_overwrite disabled"></div>
					<div className="closeup"></div>
					<div className="put_on_top disabled"></div>
					<div className="source_write disabled"></div>
				</div>

				<div>
					<div className="transition_cycle"></div>
					<div className="transition_add"></div>
					<div className="transition_match"></div>
				</div>
			</div>
		</>
	)
}

export default SyncBin;
