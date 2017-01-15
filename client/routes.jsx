import React, {Component} from 'react';
import {mount} from 'react-mounter';

import App from './app.jsx';
import QuizEntry from './QuizEntry.jsx';


FlowRouter.route('/', {
    name: 'App',
    action() {
      mount(App, {});
    }
});
FlowRouter.route('/dash', {
  name: 'QuizEntry',
  action(){
    mount(QuizEntry, {})
  }

});
