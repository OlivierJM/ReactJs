import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import '../imports/api/teams/methods';
import '../imports/api/teams/teams';


Meteor.startup(() => {
  // code to run on server at startup
    if(Meteor.users.find().count() === 0){
      user = {
        username:'admin',
        email:'admin@admin.com',
        password:'123456'
      }
      Accounts.createUser(user);
    }



});
