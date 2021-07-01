import React from "react";
// import Logo from "../../components/Logo/Logo";
import "./App.scss";
import Login from "../Login/Login";
import PassReset from '../PassReset/PassReset'
import { BrowserRouter as Router , Route} from 'react-router-dom'

export default function App() {

     return <>

          {/* <div className="center">
               <Logo />
          </div> */}

          <Router>
               <Route exact path="/passreset" component={PassReset} />
               <Route exact path="/login" component={Login} />
          </Router>

     </>
}
