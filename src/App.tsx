import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import LogInScreen from './pages/LogInScreen';
import SignUpScreen from './pages/SignUpScreen';
import Screen404 from './pages/Screen404';

import  backgot from './assets/imgs/backgot.jpg'


function App() {
  return (
    // <div className="App">
    // </div>
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/profile' element={<ProfileScreen background={backgot}/>}/>
        <Route path='/404' element={<Screen404/>}/>
        <Route path='/login' element={<LogInScreen/>}/>
        <Route path='/signup' element={<SignUpScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
