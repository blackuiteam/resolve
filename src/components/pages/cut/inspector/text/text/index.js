
import React, { useState } from 'react';
import classNames from 'classnames';

import { ToggleTools } from '../../_toggle-tools';

// IMAGES
import TextTextImg 			from '../../img/text/text/text-text.png';
import TextTabSpacingImg 	from '../../img/text/text/text-tab-spacing.png';
import TextAdvancedImg 		from '../../img/text/text/text-advanced.png';

function TextText() {

	const [ textContent, setTextContent ] = useState(false);
	const [ textTabSpacing, setTabSpacing ] = useState(false);
	const [ textAdvanced, setAdvanced ] = useState(false);

	return (
		<>
			<div className="Row">
				<div className="LabelToggle" style={{"margin":"6px 0 0 0px"}}>Text</div>
				<ToggleTools className={classNames('ic-controls', textContent ? "active" : "")} onClick={()=> setTextContent(!textContent)}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={TextTextImg} width="294" style={{'margin': '0px auto 9px 15px'}} className={classNames('', textContent ? "none" : "")}/>

			<div className={classNames('MiniContainer first', textContent ? "none" : "")}>
				<div className={classNames('MiniToggle', textTabSpacing ? "active" : "")} onClick={()=> setTabSpacing(!textTabSpacing)}>Tab Spacing</div>
				<img  src={TextTabSpacingImg} width="294" style={{'margin': '6px 0px 9px -1px'}} className={classNames('', textTabSpacing ? "none" : "")}/>
			</div>

			<div className={classNames('MiniContainer no-border', textContent ? "none" : "")}>
				<div className={classNames('MiniToggle', textAdvanced ? "active" : "")} onClick={()=> setAdvanced(!textAdvanced)}>Advanced</div>
				<img  src={TextAdvancedImg} width="294" style={{'margin': '6px 0px 20px -1px'}} className={classNames('', textAdvanced ? "none" : "")}/>
			</div>
		</>
	)
}

export default TextText;
