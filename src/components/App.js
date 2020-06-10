
import React, { useState } 		from 'react';
import classNames 				from 'classnames';
import { Link, Route, Switch } 	from 'react-router-dom';

// PAGES
import Color 		from './pages/Color';
import Cut 			from './pages/cut';
import Deliver 		from './pages/Deliver';
import Edit 		from './pages/Edit';
import Fairlight 	from './pages/Fairlight';
import Fusion 		from './pages/Fusion';
import Media 		from './pages/Media';

// ROUTES
export const routes = [
	{
		path: '/media',
		component: Media,
		label: 'media',
	},{
		path: '/',
		component: Cut,
		label: 'speed_edit'
	},{
		path: '/edit',
		component: Edit,
		label: 'edit'
	},{
		path: '/fusion',
		component: Fusion,
		label: 'audio'
	},{
		path: '/color',
		component: Color,
		label: 'color'
	},{
		path: '/fairlight',
		component: Fairlight,
		label: 'effects'
	},{
		path: '/deliver',
		component: Deliver,
		label: 'deliver'
	},
]

function App() {

	const [ activeNav, setNav ] = useState(1);

	return (
		<>
			{/* Components Content */}
			<div className="Wrapper">
				<Switch>
					{routes.map((route, i)=> (
						<Route key={i} component={route.component} exact path={route.path}></Route>
					))}
				</Switch>
			</div>

			{/* Navigation */}
			<div className="navigation">
				{routes.map((link, i) => (
					<Link key={i} className={classNames(link.label, activeNav === i ? "active" : "")} to={link.path} onClick={()=> setNav(i)}></Link>
				))}
			</div>
		</>
	)
}

export default App;
