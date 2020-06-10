
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

function Titles() {

	const transitionsTitle = [
		{ id: 0, label: 'L Lower 3rd', type: 'text' },
		{ id: 1, label: 'M Lower 3rd', type: 'text' },
		{ id: 2, label: 'R Lower 3rd', type: 'text' },
		{ id: 3, label: 'Scroll', type: 'text' },
		{ id: 4, label: 'Text', type: 'text' },
		{ id: 5, label: 'Text+', type: 'effects' },
		{ id: 6, label: '3D Lower 3rd Flipping 2Line', type: 'effects' },
		{ id: 7, label: '3D Lower 3rd Multiplane Background', type: 'effects' },
		{ id: 8, label: '3D Lower 3rd Plane Behind Slide In', type: 'effects' },
		{ id: 9, label: '3D Lower 3rd Plane Slide In', type: 'effects' },
		{ id: 10, label: '3D Lower 3rd Planes Rotating In', type: 'effects' },
		{ id: 11, label: '3D Lower 3rd Rotating Plane 2 Line', type: 'effects' },
		{ id: 12, label: '3D Lower 3rd Shelf', type: 'effects' },
		{ id: 13, label: '3D Lower 3rd Sliding Block', type: 'effects' },
		{ id: 14, label: '3D Lower 3rd Text In Tube', type: 'effects' },
		{ id: 15, label: '3D Title Backlit Rise', type: 'effects' },
		{ id: 16, label: '3D Title Big And Small Text', type: 'effects' },
		{ id: 17, label: '3D Title Center Line', type: 'effects' },
		{ id: 18, label: '3D Title Cinematic Type', type: 'effects' },
		{ id: 19, label: '3D Title Dramatic Mood', type: 'effects' },
		{ id: 20, label: '3D Title In A Box', type: 'effects' },
		{ id: 21, label: '3D Title Motion Background', type: 'effects' },
		{ id: 22, label: '3D Title Neon Outlines', type: 'effects' },
		{ id: 23, label: '3D Title Outline Offset', type: 'effects' },
		{ id: 24, label: '3D Title Reflective Type', type: 'effects' },
		{ id: 25, label: '3D Title Spin Twist Drift', type: 'effects' },
		{ id: 26, label: '3D Title Strech Zoom', type: 'effects' },
		{ id: 27, label: '3D Title Superhero Zoom', type: 'effects' },
		{ id: 28, label: '3D Title Text Circling Text', type: 'effects' },
		{ id: 29, label: 'Lower 3rd Corporate Corners 1 Line', type: 'effects' },
		{ id: 30, label: 'Lower 3rd Corporate Corners 2 Lines', type: 'effects' },
		{ id: 31, label: 'Lower 3rd Draw On Two Line', type: 'effects' },
		{ id: 32, label: 'Lower 3rd Simple Box 1 Line', type: 'effects' },
		{ id: 33, label: 'Lower 3rd Simple Box 2 Lines', type: 'effects' },
		{ id: 34, label: 'Lower 3rd Simple Box Thin 1 Line', type: 'effects' },
		{ id: 35, label: 'Lower 3rd Simple Underline', type: 'effects' },
		{ id: 36, label: 'Lower 3rd Simple Vertical 1 Line', type: 'effects' },
		{ id: 37, label: 'Lower 3rd Simple Vertical 2 Lines', type: 'effects' },
		{ id: 38, label: 'Title Draw On Corners 1 Line', type: 'effects' },
		{ id: 39, label: 'Title Draw On Corners 2 Lines', type: 'effects' },
		{ id: 40, label: 'Title Horizontal Line Reveal', type: 'effects' },
		{ id: 41, label: 'Title Horizontal Slide', type: 'effects' },
		{ id: 42, label: 'Title Rise Fade', type: 'effects' },
		{ id: 43, label: 'Title Slide From Center Line', type: 'effects' },
		{ id: 44, label: 'Title Square Line Tilting Text', type: 'effects' },
		{ id: 45, label: 'Title Text Ripple', type: 'effects' },
		{ id: 46, label: 'Title Threee Line Drop', type: 'effects' },
		{ id: 47, label: 'Title Two Line Twist Reveal', type: 'effects' },
		{ id: 48, label: 'Title Zipper', type: 'effects' }
	];

	//==> SEARCH TERM

	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleChange = e => {
	  setSearchTerm(e.target.value);
	};

	useEffect(() => {
		const results = transitionsTitle.filter(transition =>
			transition.label.toLowerCase().includes(searchTerm)
		);
		setSearchResults(results);
	}, [searchTerm]);

	//==> END


	//==> SELECTING INDEX OF EACH LIST

	const [ transTitle, setTransTitle ] = useState(-1);
	const [ transFusionTitle, setTransFusionTitle ] = useState(-1);

	function handleTransTitle(i) {
		setTransTitle(i);
		setTransFusionTitle(-1);
	}

	function handleTransFusionTitle(i) {
		setTransFusionTitle(i);
		setTransTitle(-1);
	}

	//==> END

	return (
		<>
			{/* Mini Header */}
			<div className="MiniHeader">
				<div></div>

				<div></div>

				<div>
					<input
						type="text"
						placeholder="Search"
        				value={searchTerm}
						onChange={handleChange}
						style={{'width':'128px', 'margin': '0 10px 0 0'}}/>
					<div className="icon contextmenu borderL" style={{'width':'38px'}}></div>
				</div>
			</div>

			{/* Content */}
			<div className="TitlesContent">
				<div className="title">Titles</div>
				<div className="content">
					{searchResults.length > 0 ?
						<>
							{searchResults.filter(transition => transition.id < 6).map((transition, i) => (
								<div key={i} className={classNames('row', transTitle === i ? 'active':'')} onClick={()=> handleTransTitle(i)}>
									<div className={`row-type ${transition.type}`}></div>
									<span>{transition.label}</span>
									<div className="favorite-title"></div>
								</div>
							))}
						</>
						:
						<div className="row">No results founded.</div>
					}
				</div>

				<div className="title">Fusion Titles</div>
				<div className="content">
					{searchResults.length > 0 ?
						<>
							{searchResults.filter(transition => transition.id > 6).map((transition, i) => (
								<div key={i} className={classNames('row', transFusionTitle === i ? 'active':'')} onClick={()=> handleTransFusionTitle(i)}>
									<div className={`row-type ${transition.type}`} text></div>
									<span>{transition.label}</span>
									<div className="favorite-title"></div>
								</div>
							))}
						</>
						:
						<div className="row">No results founded.</div>
					}
				</div>
			</div>

			{/* Viewer ToolBar */}
			<div className="editTools">
				<div>
					<div className="boring"></div>
					<div className="split"></div>
				</div>

				<div>
					<div className="insert"></div>
					<div className="to_end"></div>
					<div className="ripple_overwrite"></div>
					<div className="closeup"></div>
					<div className="put_on_top"></div>
					<div className="source_write"></div>
				</div>

				<div></div>
			</div>
		</>
	)
}

export default Titles;
