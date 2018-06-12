import React, { Component, Proptypes } from "react";
import { Meteor } from 'meteor/meteor';
import Header from "./Views/Header";
import { Teams } from '../api/teams/teams'

export default class QuizEntry extends Component {
  constructor(){
    super();
    this.state = {
      name: '', 
      code: '',
      scores: '10'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, code, scores } = this.state;

    Meteor.call("insertTeam", name, scores, code, 'path');
    console.log('hello')

  }

  updateOnChange = ({target: {value}}, type) => {
    switch (type) {
      case 'name':
        this.setState({
          name: value
        });
        break;
    
      default:
      this.setState({
        code: value
      })
        break;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container center">
          <ul className="tabs">
            <li className="tab">
              <a href="#teams" className="active">
                Add Team
              </a>
            </li>
          </ul>
          <div id="teams" className="col s12">
            <form onSubmit={this.handleSubmit}>
              <input
                className="field"
                id="team"
                required
                placeholder="Name of Team"
                onChange={(e) => this.updateOnChange(e, 'name')}
              />
              <input
                className="field"
                id="code"
                required
                placeholder="Team Code"
                onChange={(e) => this.updateOnChange(e, 'code')}
              />
              <button role="submit" className="btn flat green">
                {" "}
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
