import React, { Component } from "react";
import Header from "./Header.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { Teams } from '../../api/teams/teams'

export class Home extends Component {
  //To the all details Page
  viewDetails = (e, id) => FlowRouter.go(`/details/${id}`);
  

  renderTeams() {
    let count = 1;
    let { teams } = this.props;
    if (!teams) {
      return null;
    }
    return teams.map(team => (
      <tr
        key={team._id}
        className="teamss "
        onClick={e => this.viewDetails(e, team._id)}
        style={{backgroundColor: team.color}}
      >
        <td style={{ height: 50 }}>{count++}</td>
        <td
          className="team teamss light link"
          title={"Click here to see details about " + team.team}
        >
          {team.team}
        </td>
        <td className="team light red-text">{team.score}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="col 12">
            <h4
              className="center green-text darken-1 team"
            >
              Senior Youth
            </h4>
            <table className="highlight ">
              <thead>
                <tr>
                  <th data-field="" className="light team">
                    #
                  </th>
                  <th data-field="" className="light team">
                    Team
                  </th>
                  <th data-field="" className="light team">
                    Scores
                  </th>
                </tr>
              </thead>
              <tbody>{this.renderTeams()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    teams: Teams.find(
      {},
      {
        sort: {
          score: -1
        }
      }
    ).fetch()
  };
})(Home);
