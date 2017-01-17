import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import './accounts-config.js';
// import App from './App.jsx';

Meteor.startup(() => {

  if(!Meteor.userId()){
      FlowRouter.go('/login');
  }
});
