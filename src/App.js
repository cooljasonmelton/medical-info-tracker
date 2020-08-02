import React from 'react';

// router 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import './App.css';

// components
import PageSelector from './components/page_selector/PageSelector';
import MedInfoContainer from './components/med_info_container/MedInfoContainer';
import Demographics from './components/info_components/Demographics';

const App = () => {
  return (
    <Router>
      <div className="App">
        <PageSelector/>
        <MedInfoContainer/>

        <Switch>
            <Route exact path="/demographics" component={Demographics} />
            <Route exact path="/" component={null} />
            <Route exact path="/" component={null} />
            <Route exact path="/" component={null} />
            <Route exact path="/" component={null} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
