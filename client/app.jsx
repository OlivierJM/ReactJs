import React, {Component, Proptypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Teams} from '../Collections/collections.js'
import Header from './Views/Header.jsx';

export class App extends Component {

//Increment Points
handleAdd(event){
  event.preventDefault();
}

//Decrement Points
handleReduce(event){
  event.preventDefault();

}

//Remove Team from game
handleRemove(event){
  event.preventDefault();
  
}




    renderTeams() {
      let count = 1;
        if (this.props.teams == undefined) {
            return "No Team Added Yet";
        }
        return this.props.teams.map((team) => (
            <tr key={team._id} className="collection-item">
              <td>{count++}</td>
                <td onClick={''} className="team">{team.team}</td>
                <td>{team.score}</td>
                <td><i className="material-icons " onClick={this.handleAdd.bind(this)}>add</i></td>
                <td><i className="material-icons " onClick={this.handleReduce.bind(this)}>remove</i></td>
                <td><i className="material-icons " onClick={this.handleRemove.bind(this)}>delete</i></td>
            </tr>
        ))

    }

    render() {
        return (
            <div className="">
                <Header/>
                <div className="container">
                    <div className="row">

                        <div className="">

                          <table className="highlight">
                           <thead>
                             <tr>
                                 <th data-field="id">#</th>
                                 <th data-field="id">Team</th>
                                 <th data-field="name">Scores</th>
                                 <th data-field="price">Add Points</th>
                                 <th data-field="price">Reduce Points</th>
                                 <th data-field="price">Delete Team</th>
                             </tr>
                           </thead>
                         <tbody>
                           {this.renderTeams()}
                         </tbody>


                         </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default createContainer(() => {
    return {teams: Teams.find().fetch()}
}, App)
