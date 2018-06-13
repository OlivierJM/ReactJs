import React, { Component } from "react";
import Header from "./Header.jsx";
import { Teams } from "../../api/teams/teams";
import { Players } from "../../api/players/players";
import { withTracker } from "meteor/react-meteor-data";

export class TeamDetails extends Component {
  renderPlayers() {
    let { playersList } = this.props;
    let count = 1;
    if (!playersList) {
      return;
    }
    return playersList.map(player => (
      <li key={player._id} className="collection-item teams light">
        {player.name}
        <span className="right green-text darken-1">{player.score}</span>
      </li>
    ));
  }
  render() {
    let name = "";
    let score = "";
    let code = "";
    let dist = "";
    let field = "";
    let group = "";
    let players = "";
    let teamId = "";
    let team = this.props.team;
    let count = this.props.players;
    if (team && !count) {
      name = team.team;
      score = team.score;
      code = team.code;
      dist = team.dist;
      field = team.field;
      group = team.group;
      players = count;
      teamId = team._id;
    } else {
    }

    return (
      <div>
        <Header />
        <div className="container">
          <h4 className="center green-text darken-1 team">Team {name}</h4>
          <div className="row">
            <div className="col s12">
              <ul className="collection">
                <li className="collection-item teams light">
                  Current Score
                  <span className="right green-text darken-1">{score}</span>
                </li>
                <li className="collection-item teams light">
                  Ministry
                  <span className="right green-text darken-1">{group}</span>
                </li>
                <li
                  className="collection-item teams light"
                  title="Members of the Team"
                >
                  Players
                  <span className="right green-text darken-1">
                    <a href={"/members/" + teamId}>{players} Players </a>
                  </span>
                </li>
                {this.renderPlayers()}
              </ul>
            </div>
            <div className="col s12 center">
              <a href="/" className="center green darken-1 btn">
                Go back to the ScoreBoard
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export function getTeamId() {
  return FlowRouter.getParam("_id");
}

export default withTracker(() => {
  return {
    team: Teams.findOne({ _id: getTeamId() }),
    players: Players.find({ teamId: getTeamId() }).count(),
    playersList: Players.find({ teamId: getTeamId() }).fetch()
  };
})(TeamDetails);
