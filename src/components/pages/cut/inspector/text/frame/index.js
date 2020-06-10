
import React, { useState } from 'react';
import classNames from 'classnames';

import { ToggleTools } from '../../_toggle-tools';

// IMAGES
import LayoutImg 		from '../../img/text/frame/layout.png';
import RotationImg 		from '../../img/text/frame/rotation.png';
import BackgroundImg 	from '../../img/text/frame/background.png';
import TransformImg 	from '../../img/text/frame/transform.png';
import ShearImg 		from '../../img/text/frame/shear.png';
import SizeImg 			from '../../img/text/frame/size.png';

function TextFrame() {

	const [ toggleLayout, setToggleLayout ] = useState(false);
	const [ toggleRotation, setToggleRotation ] = useState(false);
	const [ toggleBackground, setToggleBackground ] = useState(false);
	const [ toggleTransform, setToggleTransform ] = useState(false);
	const [ toggleShear, setToggleShear ] = useState(false);
	const [ toggleSize, setToggleSize ] = useState(false);

	const [ layoutContent, setLayout ] = useState(false);
	const [ rotationContent, setRotation ] = useState(false);
	const [ backgroundContent, setBackground ] = useState(false);
	const [ transformContent, setTransform ] = useState(false);
	const [ shearContent, setShear ] = useState(false);
	const [ sizeContent, setSize ] = useState(false);

	return (
		<>
			<div className="Row">
				<div onClick={()=> setToggleLayout(!toggleLayout)} className={classNames('Toggle', toggleLayout ? "active" : "")}/>
				<div className="LabelToggle">Layout</div>
				<ToggleTools onClick={()=> setLayout(!layoutContent)} className={classNames('ic-controls', layoutContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={LayoutImg} width="294" style={{'margin': '5px auto 9px 15px'}} className={classNames('', layoutContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleRotation(!toggleRotation)} className={classNames('Toggle', toggleRotation ? "active" : "")}/>
				<div className="LabelToggle">Rotation</div>
				<ToggleTools onClick={()=> setRotation(!rotationContent)} className={classNames('ic-controls', rotationContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={RotationImg} width="294" style={{'margin': '1px auto 9px 15px'}} className={classNames('', rotationContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleBackground(!toggleBackground)} className={classNames('Toggle', toggleBackground ? "active" : "")}/>
				<div className="LabelToggle">Background</div>
				<ToggleTools onClick={()=> setBackground(!backgroundContent)} className={classNames('ic-controls', backgroundContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={BackgroundImg} width="294" style={{'margin': '6px auto 9px 15px'}} className={classNames('', backgroundContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleTransform(!toggleTransform)} className={classNames('Toggle', toggleTransform ? "active" : "")}/>
				<div className="LabelToggle">Transform</div>
				<ToggleTools onClick={()=> setTransform(!transformContent)} className={classNames('ic-controls', transformContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={TransformImg} width="294" style={{'margin': '1px auto 9px 15px'}} className={classNames('', transformContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleShear(!toggleShear)} className={classNames('Toggle', toggleShear ? "active" : "")}/>
				<div className="LabelToggle">Shear</div>
				<ToggleTools onClick={()=> setShear(!shearContent)} className={classNames('ic-controls', shearContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={ShearImg} width="294" style={{'margin': '6px auto 9px 15px'}} className={classNames('', shearContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleSize(!toggleSize)} className={classNames('Toggle', toggleSize ? "active" : "")}/>
				<div className="LabelToggle">Size</div>
				<ToggleTools onClick={()=> setSize(!sizeContent)} className={classNames('ic-controls', sizeContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={SizeImg} width="294" style={{'margin': '6px auto 19px 15px'}} className={classNames('', sizeContent ? "none" : "")}/>
		</>
	)
}

export default TextFrame;
