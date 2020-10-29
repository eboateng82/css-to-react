import React,{Component}from'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Basics from './Components/Basics';
import Equipment from './Components/Equipment';
import Safety from './Components/Safety';
import Types from './Components/Types';
import Where from './Components/Where';

class App extends Component {
  render () {
    return (
  
  <Router>
<Switch>
  <div>
    <Route exact path="/" component={Basics} />
    <Route path="/Equipment" component={Equipment} />
    <Route path="/Safety" component={Safety} />
    <Route path="/Types" component={Types} />
    <Route path="/Where" component={Where} />
  </div>
    </Switch>
  </Router>

  );
}
}
export default App;
