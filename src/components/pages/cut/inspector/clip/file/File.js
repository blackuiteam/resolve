import React, { useState } from 'react';
import classNames from 'classnames';
import { ToggleTools } from '../../_toggle-tools';

import InfoImg 				from '../../img/file/info.png';
import BmdCameraRawImg 		from '../../img/file/bmd-camera-raw.png';
import ClipImg 				from '../../img/file/clip.png';
import WhitheBalanceImg  	from '../../img/file/white-balance.png';
import GammaControlsImg 	from '../../img/file/gamma-controls.png';

import CamRaw1 		from '../../img/file/bmd-camera-raw-01.png';
import CamRaw2 		from '../../img/file/bmd-camera-raw-02.png';
import CamRaw3 		from '../../img/file/bmd-camera-raw-03.png';

function File() {

	const [ clip, setClip ] = useState(false);
	const [ whiteBalance, setWhiteBalance ] = useState(false);
	const [ gamma, setGamma ] = useState(false);
	const [ cameraRaw, setCameraRaw ] = useState(false);
	const [ camColor, setCamColor ] = useState(false);

	return (
		<>
			<img src={InfoImg} width="294" style={{'margin': '13px 0 10px 15px'}}/>

			<div className="Row header">
				<div className="LabelToggle" style={{"margin":"6px 0 0 0px"}}>Clip</div>
				<ToggleTools className="ic-reset"/>
				<ToggleTools className={classNames('ic-controls', clip ? "active" : "")} onClick={()=> setClip(!clip)}/>
			</div>
			<img src={ClipImg} width="294" style={{'margin': '6px 0 9px 15px'}} className={classNames('', clip ? "none" : "")}/>

			<div className="Row header">
				<div className="LabelToggle" style={{"margin":"6px 0 0 0px"}}>Blackmagic Camera Raw</div>
				<ToggleTools className="ic-reset"/>
				<ToggleTools className={classNames('ic-controls', cameraRaw ? "active" : "")} onClick={()=> setCameraRaw(!cameraRaw)}/>
				<ToggleTools className={classNames('ic-col-science', camColor ? "active" : "")} onClick={()=> setCamColor(!camColor)}/>
			</div>
			<img src={CamRaw1} width="294" style={{'margin': '6px 0 11px 15px'}} className={cameraRaw ? "none" : ''}/>
			<img src={CamRaw2} width="294" style={cameraRaw ? {"margin":"0px 0px 19px 15px"} : {'margin': '0px 0 8px 15px'}} className={camColor ? "none" : ''}/>
			<img src={CamRaw3} width="294" style={{'margin': '0px 0 13px 15px'}} className={cameraRaw ? "none" : ''}/>

			<div className={classNames('MiniContainer first', cameraRaw ? "none" : '')}>
				<div onClick={()=> setWhiteBalance(!whiteBalance)} className={classNames('MiniToggle', whiteBalance ? "active" : "")}>White Balance</div>
				<img src={WhitheBalanceImg} width="294" style={{'margin': '1px 0px 9px -1px'}} className={classNames('', whiteBalance ? "none" : "")}/>
			</div>

			<div className={classNames('MiniContainer no-border', cameraRaw ? "none" : '')}>
				<div onClick={()=> setGamma(!gamma)} className={classNames('MiniToggle', gamma ? "active" : "")}>Gamma Controls</div>
				<img src={GammaControlsImg} width="294" style={{'margin': '6px 0 19px -1px'}} className={classNames('', gamma ? "none" : "")}/>
			</div>
		</>
	)
}

export default File;
