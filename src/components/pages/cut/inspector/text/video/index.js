
import React, { useState } from 'react';
import classNames from 'classnames';

import { ToggleTools } from '../../_toggle-tools';

// IMAGES
import CompositeImg 	from '../../img/text/video/composite.png';
import Transform1Img 	from '../../img/text/video/transform-01.png';
import Transform2Img 	from '../../img/text/video/transform-02.png';
import Cropping1Img 	from '../../img/text/video/cropping-01.png';
import Cropping2Img 	from '../../img/text/video/cropping-02.png';
import Dyn1 			from '../../img/text/video/dyn-01.png';
import Dyn2 			from '../../img/text/video/dyn-02.png';
import Stablization1 	from '../../img/text/video/stablization.png';

function TextVideo() {

	const [ toggleComposite, setToggleComposite ] = useState(false);
	const [ compositeContent, setComposite ] = useState(false);

	const [ toggleTransform1, setToggleTransform1 ] = useState(false);
	const [ transform1Content, setTransform1 ] = useState(false);

	const [ toggleTransform2, setToggleTransform2 ] = useState(false);
	const [ transform2Content, setTransform2 ] = useState(false);

	const [ toggleCropping1, setToggleCropping1 ] = useState(false);
	const [ cropping1Content, setCropping1 ] = useState(false);

	const [ toggleCropping2, setToggleCropping2 ] = useState(false);
	const [ cropping2Content, setCropping2 ] = useState(false);

	const [ toggleDynamic, setToggleDynamic ] = useState(false);
	const [ toggleStablization, setToggleStablization ] = useState(false);
	const [ dyn, setDyn ] = useState(false);
	const [ dyn2, setDyn2 ] = useState(false);

	const [ stabl, setStabl ] = useState(false);

	return (
		<>
			<div className="Row">
				<div onClick={()=> setToggleComposite(!toggleComposite)} className={classNames('Toggle', toggleComposite ? "active" : "")}/>
				<div className="LabelToggle">Composite</div>
				<ToggleTools onClick={()=> setComposite(!compositeContent)} className={classNames('ic-controls', compositeContent ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={CompositeImg} width="294" style={{'margin': '0px auto 9px 15px'}} className={classNames('', compositeContent ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleTransform1(!toggleTransform1)} className={classNames('Toggle', toggleTransform1 ? "active" : "")}/>
				<div className="LabelToggle">Transform</div>
				<ToggleTools onClick={()=> setTransform1(!transform1Content)} className={classNames('ic-controls', transform1Content ? "active" : "")}/>
				<ToggleTools onClick={()=> setTransform2(!transform2Content)} className={classNames('ic-transform', transform2Content ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={Transform1Img} width="296" style={{'margin': '0px auto 11px 15px'}} className={classNames('', transform2Content ? "none" : "")}/>
			<img  src={Transform2Img} width="294" style={{'margin': '0px auto 9px 15px'}} className={classNames('', transform1Content ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleCropping1(!toggleCropping1)} className={classNames('Toggle', toggleCropping1 ? "active" : "")}/>
				<div className="LabelToggle">Cropping</div>
				<ToggleTools onClick={()=> setCropping2(!cropping2Content)} className={classNames('ic-controls', cropping2Content ? "active" : "")}/>
				<ToggleTools onClick={()=> setCropping1(!cropping1Content)} className={classNames('ic-crop', cropping1Content ? "active" : "")}/>
				<ToggleTools className={classNames('ic-kf')}/>
			</div>
			<img  src={Cropping1Img} width="296" style={{'margin': '0px auto 14px 14px'}} className={classNames('', cropping1Content ? "none" : "")}/>
			<img  src={Cropping2Img} width="294" style={{'margin': '0px auto 9px 15px'}} className={classNames('', cropping2Content ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleDynamic(!toggleDynamic)} className={classNames('Toggle', toggleDynamic ? "active" : "")}/>
				<div className="LabelToggle">Dynamic Zoom</div>
				<ToggleTools className={classNames('ic-controls', dyn ? "active" : "")} onClick={()=> setDyn(!dyn)}/>
				<ToggleTools className={classNames('ic-dynamic', dyn2 ? "active" : "")} onClick={()=> setDyn2(!dyn2)}/>
			</div>
			<img src={Dyn1} width="296" style={{'margin': '0px 0px 9px 19px'}} className={classNames('', dyn2 ? "none" : "")} />
			<img src={Dyn2} width="294" style={{'margin': '4px 0px 9px 15px'}} className={classNames('', dyn ? "none" : "")}/>

			<div className="Row header">
				<div onClick={()=> setToggleStablization(!toggleStablization)} className={classNames('Toggle', toggleStablization ? "active" : "")}/>
				<div className="LabelToggle">Stablization</div>
				<ToggleTools className={classNames('ic-controls', stabl ? "active" : "")} onClick={()=> setStabl(!stabl)}/>
			</div>
			<img src={Stablization1} width="294" style={{'margin': '1px 0px 20px 15px'}} className={stabl ? "none" : ""}/>
		</>
	)
}

export default TextVideo;
