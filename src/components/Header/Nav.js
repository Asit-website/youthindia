import React from "react";
import {NavLink} from 'react-router-dom';
const Nav = () => {

  return (
    <>
      <div className="vertical-menu">
        <NavLink  to="/">
          User Profile
        </NavLink>
        <hr />
        <NavLink to="/attendence">Attendence</NavLink>
        <hr />
        <NavLink to="/library" href="/">Library</NavLink>
        <hr />
        <NavLink to="/assesment">Assesment</NavLink>
        <hr />
        <NavLink to="/live">Live Classes</NavLink>
        <hr />
        <NavLink to="/forum">Discussion Forums</NavLink>
        <hr />
        <NavLink to="/calendar">Calendar</NavLink>
        <hr />
        <NavLink to="/report">Reports</NavLink>
        <hr />
        <NavLink to="/fee">Fee Collection</NavLink>
        <hr />
        <NavLink to="/document">Documents</NavLink>
        <hr />
        <NavLink to="/notice">Notices</NavLink>
      </div>
    </>
  );
};


export default Nav;
