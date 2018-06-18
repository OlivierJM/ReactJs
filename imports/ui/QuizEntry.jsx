import React, { Component, Proptypes } from "react";
import { Meteor } from 'meteor/meteor';
import Header from "./Views/Header";

export default class QuizEntry extends Component {
  constructor(){
    super();
    this.state = {
      name: '', 
      code: '',
      scores: 10,
      color: '',
      msg: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, code, scores, color } = this.state;

    Meteor.call("insertTeam", name, scores, code, color, 'path', (err) => {
      err ? this.setState({msg: err.reason}) : this.setState({name: '', code: '', color: '', msg: `Successfully saved ${name}`})
    });

  }

  updateOnChange = ({target: {value}}, type) => {
    switch (type) {
      case 'name':
        this.setState({
          name: value,
          msg: ''
        });
        break;
      case 'color':

        this.setState({
          color: value.trim(),
          msg: "Note: The color name should be one word"
        });
        break;  
      default:
      this.setState({
        code: value,
        msg: ''
      })
        break;
    }
  }

  render() {
    const { color, msg, code, name } = this.state;
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
                value={name}
                onChange={(e) => this.updateOnChange(e, 'name')}
              />
              <input
                className="field"
                id="code"
                required
                placeholder="Team Code"
                value={code}
                onChange={(e) => this.updateOnChange(e, 'code')}
              />
                <input
                className="field"
                id="color"
                placeholder="Color Code"
                value={color}
                onChange={(e) => this.updateOnChange(e, 'color')}
              /> 
              <button role="submit" className="btn flat green">
                {" "}
                Save
              </button>
            </form>
            { msg }
          </div>
        </div>
      </div>
    );
  }
}
