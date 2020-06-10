
import React, { useState } from 'react';
import classNames from 'classnames';

import { ToggleTools } from '../../_toggle-tools';

// IMAGES
import ShadingImg 		from '../../img/text/style/shading-element.png';
import PropertiesImg 	from '../../img/text/style/properties.png';
import SoftnessImg 		from '../../img/text/style/softness.png';
import PositionImg 		from '../../img/text/style/position.png';
import RotationImg 		from '../../img/text/style/rotation.png';
import ShearImg 		from '../../img/text/style/shear.png';
import SizeImg 			from '../../img/text/style/size.png';

function TextStyle() {

	const [ toggleShading, setToggleShading ] = useState(false);
	const [ toggleSoftness, setToggleSoftness ] = useState(false);
	const [ togglePosition, setTogglePosition ] = useState(false);
	const [ toggleRotation, setToggleRotation ] = useState(false);
	const [ toggleShear, setToggleShear ] = useState(false);
	const [ toggleSize, setToggleSize ] = useState(false);

	const [ shadingContent, setShading ] = useState(false);
	const [ propertiesContent, setProperties ] = useState(false);
	const [ softnessContent, setSoftness ] = useState(false);
	const [ positionContent, setPosition ] = useState(false);
	const [ rotationContent, setRotation ] = useState(false);
	const [ shearContent, setShear ] = useState(false);
	const [ sizeContent, setSize ] = useState(false);


	return (
		<>
			<div className="Row">
				<div onClick={()=> setToggleShading(!toggleShading)} className={classNames('Toggle', toggleShading ? "active" : "")}/>
				<div className="LabelToggle">Shading Element</div>
				<ToggleTools onClick={()=> setShading(!shadingContent)} className={classNames('ic-controls', shadingContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={ShadingImg} width="294" style={{'margin': '5px auto 9px 15px'}} className={classNames('', shadingContent ? "none" : "")}/>

			<div className={classNames("MiniContainer first", shadingContent ? "none" : "")} style={{"borderBottom":"none"}}>
				<div className={classNames('MiniToggle', propertiesContent ? "active" : "")} onClick={()=> setProperties(!propertiesContent)}>Properties</div>
				<img  src={PropertiesImg} width="295" style={{'margin': '1px auto 9px 0px'}} className={classNames('', propertiesContent ? "none" : "")}/>
			</div>

			<div className="Row header">
				<div onClick={()=> setToggleSoftness(!toggleSoftness)} className={classNames('Toggle', toggleSoftness ? "active" : "")}/>
				<div className="LabelToggle">Softness</div>
				<ToggleTools onClick={()=> setSoftness(!softnessContent)} className={classNames('ic-controls', softnessContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={SoftnessImg} width="294" style={{'margin': '6px auto 13px 15px'}} className={classNames('', softnessContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setTogglePosition(!togglePosition)} className={classNames('Toggle', togglePosition ? "active" : "")}/>
				<div className="LabelToggle">Position</div>
				<ToggleTools onClick={()=> setPosition(!positionContent)} className={classNames('ic-controls', positionContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={PositionImg} width="294" style={{'margin': '6px auto 9px 15px'}} className={classNames('', positionContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleRotation(!toggleRotation)} className={classNames('Toggle', toggleRotation ? "active" : "")}/>
				<div className="LabelToggle">Rotation</div>
				<ToggleTools onClick={()=> setRotation(!rotationContent)} className={classNames('ic-controls', rotationContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={RotationImg} width="294" style={{'margin': '6px auto 9px 15px'}} className={classNames('', rotationContent ? "none" : "")}/>

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

export default TextStyle;
