import React, {Component} from 'react';
import Header from './Header.jsx';
import {Teams, Players} from '../../Collections/collections.js';
import {createContainer} from 'meteor/react-meteor-data';
import {getTeamId} from './TeamDetails';


export class Members extends Component{

            handleAdd(id,event){
            event.preventDefault();

            Players.update(id, {$inc:{score:10}});
            // Teams.update(getTeamId(), {$inc:{score:10}});
            return false;
          }

          //Decrement Points
          handleReduce(id,event){
            event.preventDefault();

            Players.update(id, {$inc:{score: -5}})

          }

          //Remove Team from game
          handleRemove(id, event){
            event.preventDefault();

            Players.remove(id);
          }

          addPlayer(id, teamId, event){
            event.preventDefault();
            FlowRouter.go('/players/'+teamId);

          }

    renderPlayers() {
      let count = 1;
        if (this.props.players == undefined) {
            return "No Players Added Yet";
        }
        return this.props.players.map((player) => (
            <tr key={player._id} className="">
              <td>{count++}</td>
                {/* <td onClick={''}  className="">{player.team}</td> */}
                <td  className="link" onClick={this.addPlayer.bind(this, player._id, player.teamId)}>{player.name}</td>
                <td><span className=" ">{player.score}</span></td>
                <td className=" link"><i className="material-icons  " onClick={this.handleAdd.bind(this, player._id)}>add</i></td>
                <td className="link">
                  <i className="material-icons  " onClick={this.handleReduce.bind(this, player._id)}>remove</i></td>
                <td className="link"><i className="material-icons " onClick={this.handleRemove.bind(this, player._id)}>delete</i></td>
            </tr>
        ))

    }
    renderPathfinders(){
      let pathfiners = this.props.pathfiners;
      if (pathfiners == undefined) {
          return "No Players Added Yet";
      }
      return pathfiners.map((path) => (
        <li key={path._id}>
          {path.name} <span>" Score  "{path.score}</span>
        </li>
      ))
    }

	render(){
     let name = '';
        let score = '';
        let code = '';
        let dist = '';
        let field = '';
        let group = '';
        let players = '';
        let teamId = '';
        let team = this.props.team;
        let count = this.props.players;
        if (team && count !== undefined) {
            name = team.team;
            score = team.score;
            code = team.code;
            dist = team.dist;
            field = team.field;
            group = team.group;
            players = count;
            teamId = team._id;
        } else {}

		return(

			<div>
				<Header />
				<div className="container">

            <h4 className="center green-text darken-1 team">Team {name} has {score} Points</h4>

                          <table className="highlight">
                           <thead>
                             <tr>
                                 <th data-field="" className="light">#</th>
                                 {/* <th data-field="" className="light">Team</th> */}
                                 <th data-field="" className="light">Player Name</th>
                                 <th data-field="" className="light">Scores</th>
                                 <th data-field="" className="light">Add </th>
                                 <th data-field="" className="light">Reduce </th>
                                 <th data-field="" className="light">Remove</th>
                             </tr>
                           </thead>
                         <tbody>
                           {this.renderPlayers()}
                         </tbody>


                         </table>
                         {/* {this.renderPathfinders()} */}
                         </div>

			       </div>


			)
	}
}


export default createContainer(() => {
	return {
		team: Teams.findOne({_id: getTeamId()}),
		players: Players.find({teamId:getTeamId()}).fetch(),
		pathfiners: Players.find({}, {sort:{score:-1}}).fetch(),
	}
	}, Members);
