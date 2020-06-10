
import React, { useState } from 'react';
import classNames from 'classnames';

import { ToggleTools } from '../../_toggle-tools';

// IMAGES
import ImageImg 			from '../../img/text/settings/image.png';
import SourceColorSpaceImg 	from '../../img/text/settings/source-color-space.png';
import SourceGammaSpaceImg 	from '../../img/text/settings/source-gamma-space.png';
import SettingsImg 			from '../../img/text/settings/settings.png';
import TextFieldImg 		from '../../img/text/settings/text-field.png';

function TextSettings() {

	const [ imageContent, setImage ] = useState(false);

	const [ toggleSrcColorSpace, setToggleSrcColorSpace ] = useState(false);
	const [ srcColorSpaceContent, setSrcColorSpace ] = useState(false);

	const [ toggleSrcGammaSpace, setToggleSrcGammaSpace ] = useState(false);
	const [ srcGammaSpaceContent, setSrcGammaSpace ] = useState(false);

	const [ toggleSettings, setToggleSettings ] = useState(false);
	const [ settingsContent, setSettings ] = useState(false);

	const [ toggleComments, setToggleComments ] = useState(false);
	const [ commentsContent, setComments ] = useState(false);

	const [ toggleFrame, setToggleFrame ] = useState(false);
	const [ frameContent, setFrame ] = useState(false);

	const [ toggleStart, setToggleStart ] = useState(false);
	const [ startContent, setStart ] = useState(false);

	const [ toggleEnd, setToggleEnd ] = useState(false);
	const [ endContent, setEnd ] = useState(false);

	return (
		<>
			<div className="Row">
				{/* <div onClick={()=> setToggleImage(!toggleImage)} className={classNames('', toggleImage ? "active" : "")}/> */}
				<div className="LabelToggle" style={{"margin":"8px 0 0 0px"}}>Image</div>
				<ToggleTools onClick={()=> setImage(!imageContent)} className={classNames('ic-controls', imageContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={ImageImg} width="294" style={{'margin': '3px auto 11px 15px'}} className={classNames('', imageContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleSrcColorSpace(!toggleSrcColorSpace)} className={classNames('Toggle', toggleSrcColorSpace ? "active" : "")}/>
				<div className="LabelToggle">Source Color Space</div>
				<ToggleTools onClick={()=> setSrcColorSpace(!srcColorSpaceContent)} className={classNames('ic-controls', srcColorSpaceContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={SourceColorSpaceImg} width="294" style={{'margin': '5px auto 10px 15px'}} className={classNames('', srcColorSpaceContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleSrcGammaSpace(!toggleSrcGammaSpace)} className={classNames('Toggle', toggleSrcGammaSpace ? "active" : "")}/>
				<div className="LabelToggle">Source Gamma Space</div>
				<ToggleTools onClick={()=> setSrcGammaSpace(!srcGammaSpaceContent)} className={classNames('ic-controls', srcGammaSpaceContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={SourceGammaSpaceImg} width="294" style={{'margin': '7px auto 12px 15px'}} className={classNames('', srcGammaSpaceContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleSettings(!toggleSettings)} className={classNames('Toggle', toggleSettings ? "active" : "")}/>
				<div className="LabelToggle">Settings</div>
				<ToggleTools onClick={()=> setSettings(!settingsContent)} className={classNames('ic-controls', settingsContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={SettingsImg} width="310" style={{'margin': '5px auto 12px 15px'}} className={classNames('', settingsContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleComments(!toggleComments)} className={classNames('Toggle', toggleComments ? "active" : "")}/>
				<div className="LabelToggle">Comments</div>
				<ToggleTools onClick={()=> setComments(!commentsContent)} className={classNames('ic-controls', commentsContent ? "active" : "")}/>
			</div>
			<img  src={TextFieldImg} width="294" style={{'margin': '2px auto 8px 15px'}} className={classNames('', commentsContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleFrame(!toggleFrame)} className={classNames('Toggle', toggleFrame ? "active" : "")}/>
				<div className="LabelToggle">Frame Render Script</div>
				<ToggleTools onClick={()=> setFrame(!frameContent)} className={classNames('ic-controls', frameContent ? "active" : "")}/>
			</div>
			<img  src={TextFieldImg} width="294" style={{'margin': '2px auto 8px 15px'}} className={classNames('', frameContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleStart(!toggleStart)} className={classNames('Toggle', toggleStart ? "active" : "")}/>
				<div className="LabelToggle">Start Render Script</div>
				<ToggleTools onClick={()=> setStart(!startContent)} className={classNames('ic-controls', startContent ? "active" : "")}/>
			</div>
			<img  src={TextFieldImg} width="294" style={{'margin': '2px auto 8px 15px'}} className={classNames('', startContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleEnd(!toggleEnd)} className={classNames('Toggle', toggleEnd ? "active" : "")}/>
				<div className="LabelToggle">End Render Script</div>
				<ToggleTools onClick={()=> setEnd(!endContent)} className={classNames('ic-controls', endContent ? "active" : "")}/>
			</div>
			<img  src={TextFieldImg} width="294" style={{'margin': '2px auto 18px 15px'}} className={classNames('', endContent ? "none" : "")}/>
		</>
	)
}

export default TextSettings;
