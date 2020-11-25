import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import LogIn from './LogIn'
import SignUp from './SignUp'
import AboutUs from './AboutUs'
import Blogs from './Blogs'

function App() {
  return (
    <div>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path= "/" component= {Home}/>
        <Route exact path= "/login" component= {LogIn}/>
        <Route exact path= "/signup" component= {SignUp}/>
        <Route exact path= "/aboutus" component= {AboutUs}/>
        <Route exact path= "/blogs" component= {Blogs}/>
      </Switch>
   </Router>    
   </div>
  )
}
export default App
