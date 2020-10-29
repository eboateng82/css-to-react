import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Basics from './Component/Basics';
import Equipment from './Component/Equipment';
import Safety from './Component/Safety';
import Types from './Component/Types';
import Where from './Component/Where';

class App extends Component {
  render () {
    return (
  <React.Fragment>
  
    <Switch>
    <Route exact path="/" Component={Basics}></Route>
    <Route path="/Equipment" Component={Equipment}></Route>
    <Route path="/Safety" Component={Safety}></Route>
    <Route path="/Types" Component={Types}></Route>
    <Route path="/Where" Component={Where}></Route>
    </Switch>
    </React.Fragment>
  );
}
}
export default App;
