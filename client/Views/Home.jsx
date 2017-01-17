import React, {Component, PropTypes} from 'react';
import Header from './Header.jsx';
// import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';
import {Teams, Members} from '../../Collections/collections.js';


export class Home extends Component{


  renderTeams(){
    let count = 1;
      let teams = this.props.teams;
    if(teams == undefined){
      return null;
    }
    return teams.map((team)=>(

      <tr key={team._id} className="">
        <td>{count++}</td>
          <td onClick={''} className="team light link">{team.team}</td>
          <td  className="team badge link">{team.code}</td>
          <td><span className="badge ">{team.score}</span></td>
      </tr>
    ));
  }

  // adminShow(){
  //   let user = Meteor.userId();
  //   if(!user){
  //
  //   }
  // }

  render(){

    return(
    <div>
      <Header />
      <div className="container">
      <div className="col 12">
      <table className="highlight ">
       <thead>
         <tr>
             <th data-field="" className="light">#</th>
             <th data-field="" className="light">Team</th>
             <th data-field="" className="light">Code</th>
             <th data-field="" className="light">Scores</th>

         </tr>
       </thead>
       <tbody>
         {this.renderTeams()}
       </tbody>
     </table>

     <a href="/login" className="btn-floating btn-large waves-effect waves-light green darken-1 fixed right"><i className="material-icons">account_circle</i></a>

   </div>
 </div>
    </div>
    )
  }
}

export default createContainer(()=>{
  return {
    teams: Teams.find({}, {sort:{'score': -1}}).fetch(),
  }
}, Home)
