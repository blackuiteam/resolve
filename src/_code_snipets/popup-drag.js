
					<ReactModal initWidth={765} initHeight={524}
                    className={"popup-content"}
                    onRequestClose={()=> setRecModal()}
                    isOpen={recModal}
                    disableResize={true}>
                    <div className={classNames('overlay-disable', toggleRec ? 'none' : 'none')}></div>
                    <div className="MiniHeader">
                        <div>
                            <div className="icon close" onClick={()=> setRecModal()} style={{'zIndex':'1'}}></div>
                        </div>
                        <div>New Recording</div>
                        <div>
                            <div className="icon contextmenu" onClick={()=> setRecSettings(!toggleRecSettings)} style={{'zIndex':'1'}}></div>
                        </div>
                    </div>

                    <div className="MiniHeader v2">
                        <div>
                            <span className={toggleRec ? 'none' : ''}>File Name</span>
                            <input
                                className={classNames('recording-flow')}
                                type="text"
                                value={recName}
                                onChange={handleChangeRecName}
                                style={toggleRec ? {'display': 'none'} : {'display':'block'}}/>
                            <span className={toggleRec ? '' : 'none'}>{recName}</span>
                        </div>

                        <div></div>

                        <div>
                            <div className={classNames('icon icon-rec-flow-camera borderL', toggleVideoIcon ? 'active' : '')} onClick={videoIcon}></div>
                            <div className="arrow arrow borderR" onClick={toggleCamera}></div>

                            <div className={classNames('icon icon-rec-flow-audio', toggleAudioIcon ? 'active' : '')} onClick={audioIcon}></div>
                            <div className="arrow arrow" onClick={toggleAudio}></div>
                        </div>
                    </div>

                    {/* SUBMENU */}
                    <div ref={drops} className="subMenu record-settings" style={toggleRecSettings ? {'display':'block'}:{'display':'none'}}>
                        <div onClick={()=> setPopupSettings(!popupSettings)}>Record Settings</div>
                    </div>

                    <div ref={drops} className="subMenu camera-sub" style={toggleCameraSource ? {'display':'block'}:{'display':'none'}}>
                        {cameraSource.map((source, i) => (
                            <div key={i} className={cameraIndex === i ? 'active' : ''} onClick={()=> handleCameraIndex(i)}>{source.label}</div>
                        ))}
                    </div>

                    <div ref={drops} className="subMenu audio-sub" style={toggleAudioSource ? {'display':'block'}:{'display':'none'}}>
                        {audioSource.map((source, i) => (
                            <div key={i} className={audioIndex === i ? 'active' : ''} onClick={()=> handleAudioIndex(i)}>{source.label}</div>
                        ))}
                    </div>

                    {/* CONTENT */}
                    <div className="video-popup-content">

                        {/* VIDEO */}
                        <div className={classNames('source', toggleVideoIcon ? 'audio-only':'', toggleAudioBar ? 'active':'')}>
                            <video
                                loop
                                ref={inputEl}
                                src={myvideo}
                                type="video/mp4"/>
                        </div>

                        {/* AUDIO */}
                        <div className="video-source-audio">
                            <div className={classNames('audio-bar', toggleAudioBar ? 'active' : '')}>
                                <div className="audio-bar-shadow"></div>
                                <div className="audio-bar-shadow right"></div>
                            </div>
                        </div>

                        {/* SETTINGS */}
                        <div className="record-settings-content" style={popupSettings ? {'display':'block'}:{'display':'none'}}>
                            <div className="MiniHeader">
                                <div>
                                    <div className="icon close" onClick={()=> setPopupSettings(false)}></div>
                                </div>

                                <div>New Recording</div>

                                <div></div>
                            </div>

                            <img src={imgSettings} width="377" alt=""/>
                        </div>

                        {/* VTR RECORDING FLOW */}
                        <div className="video-recording-bar">
                            <div className={classNames('backlight', !backlight ? '':'active')} style={toggleRec ? {'pointerEvents':'none'}:{'pointerEvents':'auto'}} onClick={()=> setBacklight(!backlight)}></div>
                            <div className={classNames('rec', toggleRec ? 'active':'')} style={toggleRec ? {'pointerEvents':'none'}:{'pointerEvents':'auto'}} onClick={onButtonClick}></div>
                            <div className={classNames('stop', toggleRec ? 'active':'')} style={toggleRec ? {'pointerEvents':'auto'}:{'pointerEvents':'none'}} onClick={onButtonClick}></div>
                            <div className={classNames('timer', toggleRec ? 'active':'')}>{convert(time)}</div>
                            <div className="minimize"></div>

                            {/* BACKLIGHT SETTINGS */}
                            <div className="backlight-settings" style={!backlight ? {'display':'none'} : {'display':'flex'}}>

                                {/* FRONT LIGHT */}
                                <div className="front-light-toggle">
                                    <div className={classNames('Toggle', toggleFrontLight ? 'active':'')} onClick={()=>setFrontLight(!toggleFrontLight)}></div>
                                    <div className="LabelToggle">Front light</div>
                                </div>

                                {/* LIGHT COLOR / SHAPE / INTENSITY */}
                                <div className="color-shape-container">
                                    <div className="LabelToggle child1">Light Color</div>

                                    {solidColorList.map((color, i)=>(
                                        <div
                                            key={i}
                                            className={classNames('color-shape child1', indexSolid === i ? '':'none')}
                                            style={ indexSolid === i ? {'backgroundColor': `${color.color}`} : {}}
                                            onClick={handleColor}>
                                        </div>
                                    ))}

                                    <div className="LabelToggle child2">Shape</div>

                                    {shapeList.map((shape, i)=> (
                                        <div
                                            key={i}
                                            className={classNames(`color-shape child2 icon-shape-${shape.id}`, indexShape === i ? '':'none')}
                                            onClick={handleShapes}>
                                        </div>
                                    ))}
                                </div>

                                {/* COLOR PICKER */}
                                <div className={classNames('color-picker-container')} style={toggleLightColor ? {'display':'block'}:{'display':'none'}}>
                                    <div className="menu-picker">
                                        {colorPickerType.filter(picker => picker.id < 3).map((picker, i) => (
                                            <div
                                                key={i}
                                                className={classNames(picker.classe, indexPicker === i ? 'active':'')}
                                                onClick={()=> setPicker(i)}>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="slider-container" style={indexPicker !== 0 ? {'display':'block'}:{'display':'none'}}>
                                        <div className="slider-gradient-radial"></div>
                                    </div>

                                    <div className="color-container">
                                        {solidColorList.map((color, i)=> (
                                            <div
                                                key={i}
                                                className={classNames('color-square', indexSolid === i ? 'active':'')}
                                                style={{'backgroundColor': `${color.color}`}}
                                                onClick={()=> setSolid(i)}>
                                            </div>
                                        ))}
                                    </div>

                                    <img src={ColorSelector} width="205" alt=""/>
                                </div>

                                {/* SHAPE */}
                                <div className="shape-container" style={toggleShape ? {'display':'block'}:{'display':'none'}}>
                                    {shapeList.map((shape, i)=> (
                                        <div
                                            key={i}
                                            className={classNames(`icon icon-shape-${shape.id}`, indexShape === i ? 'active':'')}
                                            onClick={()=> setIndexShape(i)}>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </ReactModal>



<ReactModal initWidth={765} initHeight={524}
className={"popup-content"}
onRequestClose={()=> setRecModal()}
isOpen={recModal}
disableResize={true}>
<div className={classNames('overlay-disable', toggleRec ? 'none' : 'none')}></div>
<div className="MiniHeader">
	<div>
		<div className="icon close" onClick={()=> setRecModal()} style={{'zIndex':'1'}}></div>
	</div>
	<div>New Recording</div>
	<div>
		<div className="icon contextmenu" onClick={()=> setRecSettings(!toggleRecSettings)} style={{'zIndex':'1'}}></div>
	</div>
</div>

<div className="MiniHeader v2">
	<div>
		<span className={toggleRec ? 'none' : ''}>File Name</span>
		<input
			className={classNames('recording-flow')}
			type="text"
			value={recName}
			onChange={handleChangeRecName}
			style={toggleRec ? {'display': 'none'} : {'display':'block'}}/>
		<span className={toggleRec ? '' : 'none'}>{recName}</span>
	</div>

	<div></div>

	<div>
		<div className={classNames('icon icon-rec-flow-camera borderL', toggleVideoIcon ? 'active' : '')} onClick={videoIcon}></div>
		<div className="arrow arrow borderR" onClick={toggleCamera}></div>

		<div className={classNames('icon icon-rec-flow-audio', toggleAudioIcon ? 'active' : '')} onClick={audioIcon}></div>
		<div className="arrow arrow" onClick={toggleAudio}></div>
	</div>
</div>

{/* SUBMENU */}
<div ref={drops} className="subMenu record-settings" style={toggleRecSettings ? {'display':'block'}:{'display':'none'}}>
	<div onClick={()=> setPopupSettings(!popupSettings)}>Record Settings</div>
</div>

<div ref={drops} className="subMenu camera-sub" style={toggleCameraSource ? {'display':'block'}:{'display':'none'}}>
	{cameraSource.map((source, i) => (
		<div key={i} className={cameraIndex === i ? 'active' : ''} onClick={()=> handleCameraIndex(i)}>{source.label}</div>
	))}
</div>

<div ref={drops} className="subMenu audio-sub" style={toggleAudioSource ? {'display':'block'}:{'display':'none'}}>
	{audioSource.map((source, i) => (
		<div key={i} className={audioIndex === i ? 'active' : ''} onClick={()=> handleAudioIndex(i)}>{source.label}</div>
	))}
</div>

{/* CONTENT */}
<div className="video-popup-content">

	{/* VIDEO */}
	<div className={classNames('source', toggleVideoIcon ? 'audio-only':'', toggleAudioBar ? 'active':'')}>
		<video
			loop
			ref={inputEl}
			src={myvideo}
			type="video/mp4"/>
	</div>

	{/* AUDIO */}
	<div className="video-source-audio">
		<div className={classNames('audio-bar', toggleAudioBar ? 'active' : '')}>
			<div className="audio-bar-shadow"></div>
			<div className="audio-bar-shadow right"></div>
		</div>
	</div>

	{/* SETTINGS */}
	<div className="record-settings-content" style={popupSettings ? {'display':'block'}:{'display':'none'}}>
		<div className="MiniHeader">
			<div>
				<div className="icon close" onClick={()=> setPopupSettings(false)}></div>
			</div>

			<div>New Recording</div>

			<div></div>
		</div>

		<img src={imgSettings} width="377" alt=""/>
	</div>

	{/* VTR RECORDING FLOW */}
	<div className="video-recording-bar">
		<div className={classNames('backlight', !backlight ? '':'active')} style={toggleRec ? {'pointerEvents':'none'}:{'pointerEvents':'auto'}} onClick={()=> setBacklight(!backlight)}></div>
		<div className={classNames('rec', toggleRec ? 'active':'')} style={toggleRec ? {'pointerEvents':'none'}:{'pointerEvents':'auto'}} onClick={onButtonClick}></div>
		<div className={classNames('stop', toggleRec ? 'active':'')} style={toggleRec ? {'pointerEvents':'auto'}:{'pointerEvents':'none'}} onClick={onButtonClick}></div>
		<div className={classNames('timer', toggleRec ? 'active':'')}>{convert(time)}</div>
		<div className="minimize"></div>

		{/* BACKLIGHT SETTINGS */}
		<div className="backlight-settings" style={!backlight ? {'display':'none'} : {'display':'flex'}}>

			{/* FRONT LIGHT */}
			<div className="front-light-toggle">
				<div className={classNames('Toggle', toggleFrontLight ? 'active':'')} onClick={()=>setFrontLight(!toggleFrontLight)}></div>
				<div className="LabelToggle">Front light</div>
			</div>

			{/* LIGHT COLOR / SHAPE / INTENSITY */}
			<div className="color-shape-container">
				<div className="LabelToggle child1">Light Color</div>

				{solidColorList.map((color, i)=>(
					<div
						key={i}
						className={classNames('color-shape child1', indexSolid === i ? '':'none')}
						style={ indexSolid === i ? {'backgroundColor': `${color.color}`} : {}}
						onClick={handleColor}>
					</div>
				))}

				<div className="LabelToggle child2">Shape</div>

				{shapeList.map((shape, i)=> (
					<div
						key={i}
						className={classNames(`color-shape child2 icon-shape-${shape.id}`, indexShape === i ? '':'none')}
						onClick={handleShapes}>
					</div>
				))}
			</div>

			{/* COLOR PICKER */}
			<div className={classNames('color-picker-container')} style={toggleLightColor ? {'display':'block'}:{'display':'none'}}>
				<div className="menu-picker">
					{colorPickerType.filter(picker => picker.id < 3).map((picker, i) => (
						<div
							key={i}
							className={classNames(picker.classe, indexPicker === i ? 'active':'')}
							onClick={()=> setPicker(i)}>
						</div>
					))}
				</div>

				<div className="slider-container" style={indexPicker !== 0 ? {'display':'block'}:{'display':'none'}}>
					<div className="slider-gradient-radial"></div>
				</div>

				<div className="color-container">
					{solidColorList.map((color, i)=> (
						<div
							key={i}
							className={classNames('color-square', indexSolid === i ? 'active':'')}
							style={{'backgroundColor': `${color.color}`}}
							onClick={()=> setSolid(i)}>
						</div>
					))}
				</div>

				<img src={ColorSelector} width="205" alt=""/>
			</div>

			{/* SHAPE */}
			<div className="shape-container" style={toggleShape ? {'display':'block'}:{'display':'none'}}>
				{shapeList.map((shape, i)=> (
					<div
						key={i}
						className={classNames(`icon icon-shape-${shape.id}`, indexShape === i ? 'active':'')}
						onClick={()=> setIndexShape(i)}>
					</div>
				))}
			</div>

		</div>
	</div>
</div>
</ReactModal>
