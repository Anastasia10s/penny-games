import { useState } from 'react';
import { Outlet } from "react-router-dom";
import GlobalHeader from "./component/global-header";
import {Link} from "react-router-dom";
import './App.css'
import GlobalFooter from './component/global-footer';

const App = () => {
 

  return (
    <div className="App">
    <GlobalHeader />
    <Outlet />
    <GlobalFooter />
    </div>
  )
}

export default App
