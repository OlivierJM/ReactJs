import React, { Component } from "react";
import Header from "./Header.jsx";
import { Teams } from "../../api/teams/teams";
import { Players } from "../../api/players/players";
import { withTracker } from "meteor/react-meteor-data";

export class AllTeams extends Component {
  renderTeams() {
	  const { teams } = this.props;
    if (!teams) {
      return;
    }
    teams.map(team => <li key={team._id}>{team.team}</li>);
  }

  renderPlayers() {
	  const { players } = this.props;
    if (!players) {
      return;
    }
    players.map(players => (
      <li key={players._id}>{players.name}</li>
    ));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="col s6">
          <ul>{this.renderTeams()}</ul>
        </div>
        <div className="col 6">
          <ul>{this.renderPlayers()}</ul>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    teams: Teams.find().fetch(),
    players: Players.find().fetch()
  };
})(AllTeams);
