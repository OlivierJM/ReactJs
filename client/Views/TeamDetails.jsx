import React, {Component, PropTypes} from 'react';
import Header from './Header.jsx';
import {createContainer} from 'meteor/react-meteor-data';
import {Teams, Members} from '../../Collections/collections.js';

export class TeamDetails extends Component {

    render() {
        let name = '';
        let score = '';
        let code = '';
        let dist = '';
        let field = '';
        let group = '';
        let team = this.props.team;
        if (team) {
            name = team.team;
            score = team.score;
            code = team.code;
            dist = team.dist;
            field = team.field;
            group = team.group;
        } else {}

        return (
            <div>
                <Header/>
                <div className="container">
                    <h4 className="center green-text darken-1 team">{name}</h4>
                    <div className="row">
                        <div className="col s12">

                            <ul className="collection">
                                <li className="collection-item teams light">Team Code
                                    <span className="right green-text darken-1 ">{code}</span>
                                </li>
                                <li className="collection-item teams light">Current Score
                                    <span className="right green-text darken-1">{score}</span>
                                </li>
                                <li className="collection-item teams light">District
                                    <span className="right green-text darken-1">{dist}</span>
                                </li>
                                <li className="collection-item teams light">Field/Conference
                                    <span className="right green-text darken-1">{field}</span>
                                </li>
                                <li className="collection-item teams light">Ministry
                                    <span className="right green-text darken-1">{group}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col s12 center">

                            <a href="/" className="center green darken-1 btn">Go back to the ScoreBoard</a>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
export function getTeamId() {
    return FlowRouter.getParam('_id')
}

export default createContainer(() => {
    return {
        team: Teams.findOne({_id: getTeamId()})
    }
}, TeamDetails)
