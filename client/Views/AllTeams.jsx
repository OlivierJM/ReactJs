import React, {Component} from 'react';
import Header from './Header.jsx';
import {Teams, Players} from '../../Collections/collections.js';
import {createContainer} from 'meteor/react-meteor-data';

export class AllTeams extends Component{

	renderTeams(){
		if(this.props.teams == undefined){
			return;
		}
		this.props.teams.map((team)=>(
			<li key={team._id}>{team.team}</li>
			));

	}


	renderPlayers(){
		if(this.props.players == undefined){
		return;
	}
	this.props.players.map((players)=>(
		<li key={players._id}>{players.name}</li>
		));
	}

	render(){

		return(

			<div>
			<Header />
 			<div className="col s6">
				<ul>{this.renderTeams()}</ul>
 			</div>
			<div className="col 6">
				<ul>{this.renderPlayers()}</ul>
			</div>


			</div>

			)
	}
}



export default createContainer(()=>{

	return {
		teams: Teams.find().fetch(),
		players: Players.find().fetch(),
	}
	}, AllTeams);