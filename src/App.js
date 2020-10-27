import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Basics from './Component/Basics';
import Equipment from './Component/Equipment';
import Safety from './Component/Safety';
import Types from './Component/Types';
import Where from './Component/Where';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Router>
    <Switch>
    <Route exact path="/" component={Basics} />
    <Route path="/Equipment" component={Equipment} />
    <Route path="/Safety" component={Safety} />
    <Route path="/Types" component={Types} />
    <Route path="/Where" component={Where} />
    </Switch>
    </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
