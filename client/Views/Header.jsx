import React, { Component, Proptypes } from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

export class Header extends Component {
//
// takeMeHome(event){
//   // return window.location = '/';
// }

  render(){
    var user = this.props.user;
    if(!user){
      return null
    }else {
      user = user.username;
    }
    return(
      <nav className=" nav green darken-1">
         <div className="nav-wrapper">
           <a href="/" className="brand-logo center" >Quiz ScoreBoard</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             {/* {user} */}
             {/* <li><a href="/dash" className="add"><i className="material-icons">group_add</i></a></li> */}
           </ul>
         </div>

       </nav>
    )
  }
}

export default createContainer(() => {
    return {
      // teams: Teams.find({}, {sort:{'score':-1}}).fetch(),
      user: Meteor.users.findOne({_id:Meteor.userId()}),
    }
}, Header)
