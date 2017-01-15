import React, {Component, Proptypes} from 'react';
import {Teams} from '../Collections/collections.js';
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

        Teams.insert({team: team, score:scores, code:teamCode});

        $('.field').val();

    }
    render() {
        return (

            <div >
              <Header/>
                <div className="container center">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input className="field" id="team" required placeholder="Name of Team"/>
                        <input className="field" id="code" required placeholder="Team Code"/>
                        {/* <input className="field" id="team" required placeholder="Members of the Team"/>
                        <input className="field" id="team" required placeholder="Members of the Team"/>
                        <input className="field" id="team" required placeholder="Members of the Team"/>
                        <input className="field" id="team" required placeholder="Members of the Team"/>
                        <input className="field" id="team" required placeholder="Members of the Team"/>
                        <input className="field" id="team" required placeholder="Members of the Team"/> */}
                        <button role="submit" className="btn flat green"> Save</button>

                    </form>
                </div>
            </div>

        )
    }
}
