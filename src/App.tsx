import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import FeedScreen from './pages/FeedScreen';
import ProfileScreen from './pages/ProfileScreen';
import Screen404 from './pages/Screen404';

import  backgot from './assets/imgs/backgot.jpg'


function App() {
  return (
    // <div className="App">
    // </div>
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path='/feed' element={<FeedScreen/>}/>
        <Route path='/profile' element={<ProfileScreen background={backgot}/>}/>
        <Route path='/404' element={<Screen404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
