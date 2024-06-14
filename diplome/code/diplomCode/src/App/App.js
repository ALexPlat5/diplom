import React from "react";
import { Route, HashRouter, Routes, Navigate } from 'react-router-dom';
import Root from "../containers/Root";
import ErrorPage from "../containers/ErrorPage";
import './style.css'
import AnnouncementContainer from "../containers/AnnouncementContainer";
import ProfileContainer from "../containers/ProfileContainer";
import ResponsesContainer from "../containers/ResponsesContainer";
import NotificationContainer from "../containers/NotificationContainer";
import RedirectHandler from "../containers/RedirectHandler";
import MyAnnouncementContainer from "../containers/MyAnnouncementContainer";
import CompletedGamesContainer from "../containers/CompletedGamesContainer";

function App() {   
  return ( 
      <HashRouter>
        <RedirectHandler />
        <Routes>
            <Route path="/" element={ <Root /> } >
                <Route path="announcement" element={ <AnnouncementContainer /> } />
                <Route path="myprofile" element={ <ProfileContainer />} />
                <Route path="myresponses" element={ <ResponsesContainer /> } />
                <Route path="notification" element={ <NotificationContainer /> } />
                <Route path='myannouncement' element= { <MyAnnouncementContainer /> } />
                <Route path="completedgames" element={ <CompletedGamesContainer/>} />
            </Route>
            <Route path="/*" element={ <ErrorPage/> } />

        </Routes>
      </HashRouter>
  )
}

export default App
