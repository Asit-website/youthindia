import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Nav from './components/Header/Nav'
import Assesmant from './components/Assesmant';
import UserProfile from './components/UserProfile';
import Attendence  from './components/Attendence'
import Libarary from './components/Libarary';
import LiveClasses from './components/LiveClasses';
import DiscussionForum from './components/DiscussionForum';
import Calendar from './components/Calendar';
import Reports from './components/Reports';
import FeeCollection from './components/FeeCollections';
import Documents from './components/Documents';
import Notices from './components/Notices';
function App() {
  return (
     <>
    <Router>
    <div style={{display:'flex'}}>
       <Nav/>
       <Routes >
         <Route exact path="/" element={<UserProfile/>}/>
         <Route exact path="/attendence" element={<Attendence/>}/>
         <Route exact path="/library" element={<Libarary/>}/>
         <Route exact path="/assesment"  element={<Assesmant />}/>
         <Route exact path="/live"  element={<LiveClasses />}/>
         <Route exact path="/forum"  element={<DiscussionForum />}/>
         <Route exact path="/calendar"  element={<Calendar />}/>
         <Route exact path="/report"  element={<Reports />}/>
         <Route exact path="/fee"  element={<FeeCollection />}/>
         <Route exact path="/document"  element={<Documents />}/>
         <Route exact path="/notice"  element={<Notices/>}/>
       </Routes>
       </div>

       </Router>
     </>
  )
}

export default App;
