{/* RECORDING FLOW */}
<Popup
	trigger={<div className="icon record_media borderL" style={{'width':'40px'}}></div>}
	modal
	defaultClose
	closeOnDocumentClick>
		{close => (
			<>
				<div className={classNames('overlay-disable', toggleRec ? 'show' : '')}></div>
				<div className="MiniHeader">
					<div>
						<div className="icon close" onClick={close}></div>
					</div>
					<div>New Recording</div>
					<div>
						<div className="icon contextmenu" onClick={()=> setRecSettings(!toggleRecSettings)}></div>
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
						<div className={classNames('icon icon-rec-flow-camera borderL', toggleVideoIcon ? 'active' : '')} onClick={()=> setVideoIcon(!toggleVideoIcon)}></div>
						<div className="arrow arrow borderR" onClick={toggleCamera}></div>

						<div className={classNames('icon icon-rec-flow-audio', toggleAudioIcon ? 'active' : '')} onClick={()=> setAudioIcon(!toggleAudioIcon)}></div>
						<div className="arrow arrow" onClick={toggleAudio}></div>
					</div>
				</div>

				{/* SUBMENU */}
				<div ref={drops} className="subMenu record-settings" style={toggleRecSettings ? {'display':'block'}:{'display':'none'}}>
					<div onClick={()=> setPopupSettings(!popupSettings)}>Record Settings</div>
				</div>

				<div ref={drops} className="subMenu camera-sub" style={toggleCameraSource ? {'display':'block'}:{'display':'none'}}>
					{cameraSource.map((source, i) => (
						<div className={cameraIndex === i ? 'active' : ''} onClick={()=> handleCameraIndex(i)}>{source.label}</div>
					))}
				</div>

				<div ref={drops} className="subMenu audio-sub" style={toggleAudioSource ? {'display':'block'}:{'display':'none'}}>
					{audioSource.map((source, i) => (
						<div className={audioIndex === i ? 'active' : ''} onClick={()=> handleAudioIndex(i)}>{source.label}</div>
					))}
				</div>

				{/* CONTENT */}
				<div className="video-popup-content">

					{/* VIDEO */}
					<div className="video-source">
						<video
							loop
							ref={inputEl}
							src={myvideo}
							type="video/mp4"/>
					</div>

					{/* AUDIO */}
					<div className="video-source-audio">
						<div className={classNames('audio-bar', toggleRec ? 'active' : '')}>
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
						<div className={classNames('backlight', !backlight ? '':'active')} onClick={()=> setBacklight(!backlight)}></div>
						<div className={classNames('rec', toggleRec ? 'active':'')} onClick={onButtonClick}></div>
						<div className={classNames('timer', toggleRec ? 'active':'')}>{convert(time)}</div>
						<div className="minimize"></div>

						{/* BACKLIGHT SETTINGS */}
						<div className="backlight-settings" style={!backlight ? {'display':'none'} : {'display':'block'}}></div>
					</div>
				</div>
			</>
		)}
</Popup>
