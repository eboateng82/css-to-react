import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Basics from './Components/Basics';
import Equipment from './Components/Equipment';
import Safety from './Components/Safety';
import Types from './Components/Types';
import Where from './Components/Where';

class App extends Component {
  render () {
    return (
  <React.Fragment>
  <Router>
    <Switch>
    <Route exact path="/" Component={Basics} />
    <Route path="/Equipment" Component={Equipment} />
    <Route path="/Safety" Component={Safety} />
    <Route path="/Types" Component={Types} />
    <Route path="/Where" Component={Where} />
    </Switch>
  </Router>
    </React.Fragment>
  );
}
}
export default App;
