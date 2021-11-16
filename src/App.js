import React, { Component, Suspense } from 'react';

import NavigationControl from './components/NavigationControl';

const Landing = React.lazy(() => import('./pages/Landing'));
const About = React.lazy(() => import('./pages/About'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Showcase = React.lazy(() => import('./pages/Showcase'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Footer = React.lazy(() => import('./pages/Footer'));

class App extends Component {
	render() {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<div className="App">
					<header>
						<NavigationControl />
					</header>

					<Landing />
					<About />
					<Skills />
					<Showcase />
					<Contact />
					<footer>
						<Footer />
					</footer>
				</div>
			</Suspense>
		);
	}
}

export default App;
