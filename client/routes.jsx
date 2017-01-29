import React, {Component} from 'react';
import {mount} from 'react-mounter';
import Login from './Dashboard/Login.jsx';
import App from './app.jsx';
import QuizEntry from './QuizEntry.jsx';
import Home from './Views/Home.jsx';
import TeamDetails from './Views/TeamDetails.jsx';
import About from './Views/About.jsx';
import Instructions from './Views/Instructions.jsx';


FlowRouter.route('/admin/', {
    name: 'App',
    action() {
      mount(App, {});
    }
});
FlowRouter.route('/', {
    name: 'Home',
    action() {
      mount(Home, {});
    }
});
FlowRouter.route('/dash', {
  name: 'QuizEntry',
  action(){
    mount(QuizEntry, {})
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
    action() {
      mount(Instructions, {});
    }
});
FlowRouter.route('/details/:_id', {
    name: 'TeamDetails',
    action(params, queryParams) {
      mount(TeamDetails, {});
    }
});
