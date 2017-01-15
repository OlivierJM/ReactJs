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

        Teams.insert({team: team, score:scores});

        $('.field').val();

    }
    render() {
        return (

            <div >
              <Header/>
                <div className="container">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input className="field" id="team" required placeholder="Name of Team"/>
                        <button role="submit" className="btn flat green"> Save</button>

                    </form>
                </div>
            </div>

        )
    }
}
