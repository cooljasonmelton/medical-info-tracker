import React from 'react';

// styles
import './App.css';

// components
import PageSelector from './components/page_selector/PageSelector';
import MedInfoContainer from './components/med_info_container/MedInfoContainer';

const App = () => {
  return (
    <div className="App">
      app
      <PageSelector/>
      <MedInfoContainer/>
    </div>
  );
}

export default App;
