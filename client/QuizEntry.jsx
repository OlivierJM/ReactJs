import React, {Component, Proptypes} from 'react';
import {Teams} from '../Collections/collections.js';
import Header from './Views/Header.jsx';

export default class QuizEntry extends Component {
  
    handleSubmit(event) {
        event.preventDefault();
        let team = $('#team').val();
        let scores = 10; //initial score for every team
        let teamCode = $('#code').val();
        let dist = $('#district').val();
        let field = $('#field').val();
        let group = $('#group').val();
        let teamId = new Meteor.Collection.ObjectID().valueOf();


        // if (!this.userId) {
        //   throw new Meteor.Error('not-authorized');
        // }
        Teams.insert({
          _id:teamId,
          team: team,
          score: scores,
          code: teamCode,
          dist: dist,
          field: field,
          group:group,
          date: new Date()
        });

        $('.field').val('');
        FlowRouter.go('/admin');

    }
    render() {
        return (

            <div >
                <Header/>
                <div className="container center">
                  <ul className="tabs">
                    <li className="tab">
                      <a href="#teams" className="active">Add Team</a>
                    </li>
                    <li className="tab">
                      <a className="" href="#candidate">Add Candidate</a>
                    </li>
                  </ul>
                  <div id="teams" className="col s12">

                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input className="field" id="team" required placeholder="Name of Team"/>
                        <input className="field" id="code" required placeholder="Team Code"/>
                        <input className="field" id="district" required placeholder="District"/>
                        <input className="field" id="field" required placeholder="Conference or Field"/>
                        <input className="field" id="group" required placeholder=" Which Ministry "/>
                        <button role="submit" className="btn flat green"> Save</button>

                    </form>
                  </div>
                  <div id="candidate" className="col s12">
                    <h4 className="light  ">Coming Soon ...</h4>
                  </div>
                </div>
            </div>

        )
    }
}
