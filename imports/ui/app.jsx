import React, { Component, Proptypes } from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Teams } from '../api/teams/teams';
import Header from "./Views/Header.jsx";

export class App extends Component {
  //Increment Points
  handleAdd(id, event) {
    event.preventDefault();

    Teams.update(id, { $inc: { score: 10 } });
    return false;
  }

  //Decrement Points
  handleReduce(id, event) {
    event.preventDefault();

    Teams.update(id, { $inc: { score: -5 } });
  }

  //Remove Team from game
  handleRemove(id, event) {
    event.preventDefault();

    Teams.remove(id);
  }

  addPlayer(id, code, event) {
    event.preventDefault();
    FlowRouter.go("/add/" + id);
  }

  renderTeams() {
    let count = 1;
    if (this.props.teams == undefined) {
      return "No Team Added Yet";
    }
    return this.props.teams.map(team => (
      <tr key={team._id} className="">
        <td>{count++}</td>
        {/* <td onClick={''}  className="">{team.team}</td> */}
        <td
          className="link"
          onClick={this.addPlayer.bind(this, team._id, team.code)}
        >
          {team.code}
        </td>
        <td>
          <span className=" ">{team.score}</span>
        </td>
        <td className=" link">
          <i
            className="material-icons  "
            onClick={this.handleAdd.bind(this, team._id)}
          >
            add
          </i>
        </td>
        <td className="link">
          <i
            className="material-icons  "
            onClick={this.handleReduce.bind(this, team._id)}
          >
            remove
          </i>
        </td>
        <td className="link">
          <i
            className="material-icons "
            onClick={this.handleRemove.bind(this, team._id)}
          >
            delete
          </i>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="">
        <Header />
        <div className="container">
          <table className="highlight ">
            <thead>
              <tr>
                <th data-field="" className="light">
                  #
                </th>
                {/* <th data-field="" className="light">Team</th> */}
                <th data-field="" className="light">
                  Team Code
                </th>
                <th data-field="" className="light">
                  Scores
                </th>
                <th data-field="" className="light">
                  Add{" "}
                </th>
                <th data-field="" className="light">
                  Reduce{" "}
                </th>
                <th data-field="" className="light">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>{this.renderTeams()}</tbody>
          </table>

          <a
            href="/dashboard"
            className="btn-floating btn-large waves-effect waves-light green darken-1 fixed right"
          >
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    teams: Teams.find({}, { sort: { score: -1 } }).fetch()
  };
}, App);
