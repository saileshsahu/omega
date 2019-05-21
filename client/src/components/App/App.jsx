import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Defining style imports
import '../../styles/ant-customs.less';
import '../../styles/common.less';
import '../../styles/ant-overrides.less';

//Defining components
import Home from '../../pages/Home/App';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={() => 'Page not found'} />
        </Switch>
      </Router>
    );
  }
}

export default App;