import React, {Component, PropTypes} from 'react';
import Header from './Views/Header.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import {Teams, Players} from '../Collections/collections.js';
import {getTeamId} from './Views/TeamDetails';


export class PlayerList extends Component {


    //To the all details Page



    renderPlayers() {
        let count = 1;
        let players = this.props.players;
        if (players == undefined) {
            return null;
        }
        return players.map((player) => (

            <tr key={player._id} className="">
                <td  style={{height: 50}}>{count++}</td>
                <td onClick={''} className="team light link" title={'Click here to see details about '+player.name}>{player.name}</td>
                <td className="team light">{player.score}</td>
            </tr>
        ));
    }



    render(){
         let name = '';
         let score = '';
         let team = this.props.team;
         let count = this.props.players;
         if (team && count !== undefined) {
             name = team.team;
             score = team.score;
         } else {}

        return (
            <div>
                <Header/>
                <div className="container">

                    <div className="col 12">
                      <h4 className="center green-text darken-1 team"> {name} currently has {score} Points</h4>

                        <table className="highlight ">
                            <thead>
                                <tr>
                                    <th data-field="" className="light team">#</th>
                                    <th data-field="" className="light team">player</th>
                                    <th data-field="" className="light team">Scores</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.renderPlayers()}
                            </tbody>
                        </table>






                 </div>
                </div>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
      team: Teams.findOne({_id: getTeamId()}),
      players: Players.find({teamId:getTeamId()}, {sort: {'score': -1}}).fetch(),

      }
}, PlayerList);
