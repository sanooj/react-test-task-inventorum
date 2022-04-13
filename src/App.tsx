import React from 'react';
import MainRoutes from 'routes/MainRoutes';

const App = () : JSX.Element => {
  return (
		<div className="App" data-testid="app">
			<MainRoutes />
		</div>
	);
}

export default App;
