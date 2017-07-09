import React, {Component, PropTypes} from 'react';
import Header from './Header.jsx';
// import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';
import {Teams, Members} from '../../Collections/collections.js';


export class Home extends Component {


//To the all details Page
viewDetails(id, event){
  event.preventDefault();
  FlowRouter.go('/details/' + id);
}



    renderTeams() {
        let count = 1;
        let teams = this.props.teams;
        if (teams == undefined) {
            return null;
        }
        return teams.map((team) => (

            <tr key={team._id} className="" onClick={this.viewDetails.bind(this, team._id)}>
                <td  style={{height: 50}}>{count++}</td>
                <td onClick={''} className="team light link" title={'Click here to see details about '+team.team}>{team.team}</td>
                <td className="team light link">{team.code}</td>
                {/* <td> <span className="badge ">{team.score}</span></td> */}
                <td className="team light">{team.score}</td>
            </tr>
        ));
    }



    render(){
    
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="col 12">
                    <h4 className="center blue-text darken-1 team">Senior Youths</h4>
                        <table className="highlight ">
                            <thead>
                                <tr>
                                    <th data-field="" className="light team">#</th>
                                    <th data-field="" className="light team">Team</th>
                                    <th data-field="" className="light team">Code</th>
                                    <th data-field="" className="light team">Scores</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTeams()}
                            </tbody>
                        </table>




                 

                 </div>
                </div>
            </div>
        )
    }
}

export default createContainer(() => {
    return {teams: Teams.find({}, {
            sort: {
                'score': -1
            }
        }).fetch()}
}, Home);