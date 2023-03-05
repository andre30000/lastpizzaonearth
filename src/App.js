import Home from './pages/Home'
import * as React from 'react';

// note to self: template for website comes from here - https://mui.com/store/previews/onepirate/, https://github.com/mui/material-ui/tree/master/docs/src/pages/premium-themes/onepirate

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
           <Home />
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
