import React, {Component} from 'react';
import {mount} from 'react-mounter';
import Login from './Dashboard/Login.jsx';
import App from './app.jsx';
import Mobile from './Mobile';
import QuizEntry from './QuizEntry.jsx';
import Home from './Views/Home.jsx';
import TeamDetails from './Views/TeamDetails.jsx';
import Timer from './Views/Timer.jsx';
import About from './Views/About.jsx';
import Instructions from './Views/Instructions.jsx';
import Members from './Views/Members';
import AllTeams from './Views/AllTeams';
import AddPlayer from './AddPlayer';


FlowRouter.route('/admin/', {
    name: 'App',
    action() {
      mount(App, {});
    }
});
FlowRouter.route('/mobile', {
    name: 'Mobile',
    action() {
      mount(Mobile, {});
    }
});
FlowRouter.route('/', {
    name: 'Home',
    action() {
      mount(Home, {});
    }
});
FlowRouter.route('/add/:_id', {
    name: 'AddPlayer',
    action(params) {
      mount(AddPlayer, {});
    }
});

FlowRouter.route('/dashboard', {
  name: 'QuizEntry',
  action(){
    mount(QuizEntry, {});
  }

});

FlowRouter.route('/login', {
    name: 'Login',
    action() {
      mount(Login, {});
    }
});

FlowRouter.route('/about', {
    name: 'About',
    action() {
      mount(About, {});
    }
});

FlowRouter.route('/help', {
    name: 'Instructions',
    action(){
      mount(Instructions, {});
    }
});

FlowRouter.route('/all', {
  name: "AllTeams",
  action(){
    mount(AllTeams, {});
  }
});

//Route for the players 
FlowRouter.route('/players/:_id', {
    name: 'Members',
    action(params) {
      mount(Members, {});
    }
});

FlowRouter.route('/details/:_id', {
    name: 'TeamDetails',
    action(params) {
      mount(TeamDetails, {});
    }
});

FlowRouter.route('/countdown', {
  name: 'Timer',
  action(){
    mount(Timer, {});
  }
});