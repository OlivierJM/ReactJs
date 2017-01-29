import React, {Component, Proptypes} from 'react';
import {Teams, Members} from '../Collections/collections.js';
import Header from './Views/Header.jsx';

export default class QuizEntry extends Component {
    constructor() {
        super();
    }

    handleSubmit(event) {
        event.preventDefault();
        let team = $('#team').val();
        let scores = 10;
        let teamCode = $('#code').val();
        let dist = $('#district').val();
        let field = $('#field').val();
        let group = $('#group').val();

        // if (!this.userId) {
        //   throw new Meteor.Error('not-authorized');
        // }
        Teams.insert({
          team: team,
          score: scores,
          code: teamCode,
          dist: dist,
          field: field,
          group:group
        });

        $('.field').val('');
        FlowRouter.go('/admin');

    }


    submitCandidate(event){
      event.preventDefault();
      let team = $('#Team').val();
      let teamCode = $('#Code').val();


      let membres = new Array();
      $("input:text[name=membre]").each(function(){
          membres.push($(this).val());
          });
        Members.insert({
          team:team,
          code:teamCode,
          members:membres
        })



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
                        {/*  <input className="field" id="team" required placeholder="Members of the Team"/>
                        <input className="field" id="team" required placeholder="Members of the Team"/>
                        <input className="field" id="team" required placeholder="Members of the Team"/> */}
                        <button role="submit" className="btn flat green"> Save</button>

                    </form>
                  </div>
                  <div id="candidate" className="col s12">
                    <h4 className="light  ">Coming Soon ...</h4>
                    {/* <form onSubmit={this.submitCandidate.bind(this)}>
                        <input className="field" id="Team" name='team' required placeholder="Name of Team"/>
                        <input className="field" id="Code" required name='code' placeholder="Team Code"/>
                          <input className="field" id="team1" required  name='membre' placeholder="Members of the Team"/>
                        <input className="field" id="team2" required name='membre' placeholder="Members of the Team"/>
                        <input className="field" id="team3" required name='membre' placeholder="Members of the Team"/>
                        <input className="field" id="team4" required name='membre' placeholder="Members of the Team"/>
                        <input className="field" id="team5" required name='membre' placeholder="Members of the Team"/>
                        <input className="field" id="team6" required name='membre' placeholder="Members of the Team"/>
                        <button role="submit" className="btn flat green"> Save</button>

                    </form> */}
                  </div>
                </div>
            </div>

        )
    }
}
