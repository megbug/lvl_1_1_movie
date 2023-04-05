
import './App.css';
import Data from './components/Data.js';
import movies from './movies';


function App() {
	return (
		<div className="App">
			<div className="Carddisplay">
				{movies.map((elt) =>
					<Data
						name={elt.title}
						year={elt.year}
						regie={elt.director}
						duration={elt.duration}
						critics={elt.rate}
						genre={elt.genre}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
