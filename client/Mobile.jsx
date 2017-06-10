import React, {Component, Proptypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Teams} from '../Collections/collections.js'
import Header from './Views/Header.jsx';

export class Mobile extends Component {

//Increment Points
handleAdd(id,event){
  event.preventDefault();

  Teams.update(id, {$inc:{score:10}});
  return false;
}

//Decrement Points
handleReduce(id,event){
  event.preventDefault();

  Teams.update(id, {$inc:{score: -10}})

}

//Remove Team from game
handleRemove(id, event){
  event.preventDefault();

  Teams.remove(id);
}

addPlayer(id, code, event){
  event.preventDefault();
  FlowRouter.go('/add/'+id)

}



    renderTeams() {
      var style = {
        tCode: {
          fontSize: 25
        }
      }
      let count = 1;
        if (this.props.teams == undefined) {
            return "No Team Added Yet";
        }
        return this.props.teams.map((team) => (
            <tr key={team._id} className="">
              <td>{team.score}</td>
                {/* <td onClick={''}  className="">{team.team}</td> */}
                <td  className="tCode" style={style.tCode}>{team.code}</td>
                <td className=" link"><i className="material-icons large" onClick={this.handleAdd.bind(this, team._id)}>add</i></td>
                <td className="link">
                  <i className="material-icons large " onClick={this.handleReduce.bind(this, team._id)}>remove</i></td>
            </tr>
        ))

    }

    render() {


        return (
            <div className="">

              <Header/>
                <div className="container">

                          <table className="highlight ">
                           <thead>
                             <tr>
                                 <th data-field="" className="light">#</th>
                                 {/* <th data-field="" className="light">Team</th> */}
                                 <th data-field="" className="light">Team Code</th>
                                 <th data-field="" className="light">Add </th>
                                 <th data-field="" className="light">Reduce </th>
                             </tr>
                           </thead>
                         <tbody>
                           {this.renderTeams()}
                         </tbody>


                         </table>

                          <a href="/dashboard" className="btn-floating btn-large waves-effect waves-light green darken-1 fixed right"><i className="material-icons">add</i></a>
                    </div>

            </div>
        )
    }
}

export default createContainer(() => {
    return {
      teams: Teams.find({}, {sort:{'score':-1}}).fetch(),
    }
}, Mobile)
