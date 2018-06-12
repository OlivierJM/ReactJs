import React, { Component, Proptypes } from "react";
import { Meteor } from 'meteor/meteor';
import Header from "./Views/Header";

const colors = [
  'red', 'blue', 'green', 'yellow'
]

export default class QuizEntry extends Component {
  constructor(){
    super();
    this.state = {
      name: '', 
      code: '',
      scores: 10,
      color: 'blue'
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, code, scores, color } = this.state;

    Meteor.call("insertTeam", name, scores, code, color, 'path');

  }

  updateOnChange = ({target: {value}}, type) => {
    switch (type) {
      case 'name':
        this.setState({
          name: value
        });
        break;
      case 'color':
        this.setState({
          color: value
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
                <input
                className="field"
                id="color"
                required
                placeholder="Color Code"
                onChange={(e) => this.updateOnChange(e, 'color')}
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
