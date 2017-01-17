import React, {Component} from 'react';
import {mount} from 'react-mounter';
import Login from './Dashboard/Login.jsx';
import App from './app.jsx';
import QuizEntry from './QuizEntry.jsx';
import Home from './Views/Home.jsx';


FlowRouter.route('/admin', {
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
