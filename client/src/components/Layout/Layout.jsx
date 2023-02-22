import React, { useEffect, useState } from "react";
import { removeSessions } from "../../helper/SessionHelper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Layout.css";
import { getProfileDetails } from "../../APIrequest/APIrequest";

const Layout = (props) => {
  const [sidebar, setSidebar] = useState(true);
  const [profile,setProfile] = useState(false)

  useEffect(() => {
    getProfileDetails();
    console.log(profileData);
  }, []);
  const profileData = useSelector((state) => state.profile.value);
  
 
  return (
    <>
      <nav className="navbar">
        <div onClick={() => setSidebar(!sidebar)} className="logo">
          <span class="material-symbols-outlined">task </span>Task Manager
        </div>
        <div className="userdetails">
          <img onClick={()=>setProfile(!profile)}  src={profileData?.photo} alt="" />
          
        </div>
        
      </nav>
      
      <div className={profile ? 'nameandemail':'profile-none'}>
            <p>{`${profileData.firstname} ${profileData.lastname} `}</p>
            <p>{profileData.email}</p>
            <div className="logout-profile">
              <p onClick={removeSessions}>Logout</p>
              <Link to='/profile'>Settings</Link>
            </div>
          </div>
      <div className="layout">
        <nav className={sidebar ? `sidebar` : `sidebar-none`}>
          <Link to="/">
            <span class="material-symbols-outlined">dataset</span>Dashboard
          </Link>
          <Link to="/create">
            <span class="material-symbols-outlined">add_circle</span>Create New
          </Link>
          <Link to="/new">
            <span class="material-symbols-outlined">open_in_new</span>New Task
          </Link>
          <Link to="/progress">
            <span class="material-symbols-outlined">pending</span>In Progress
          </Link>
          <Link to="/completed">
            <span class="material-symbols-outlined">done</span>Completed
          </Link>
          <Link to="/canceled">
            <span class="material-symbols-outlined">remove_done</span>Canceled
          </Link>
        </nav>
        <div className="body">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
