import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
