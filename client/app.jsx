import React, {Component, Proptypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Teams, Members} from '../Collections/collections.js'
import Header from './Views/Header.jsx';

export class App extends Component {

//Increment Points
handleAdd(id,event){
  event.preventDefault();

  Teams.update(id, {$inc:{score:10}});
  return false;
}

//Decrement Points
handleReduce(id,event){
  event.preventDefault();

  Teams.update(id, {$inc:{score: -10}})

}

//Remove Team from game
handleRemove(id, event){
  event.preventDefault();

  Teams.remove(id);
}




    renderTeams() {
      let count = 1;
        if (this.props.teams == undefined) {
            return "No Team Added Yet";
        }
        return this.props.teams.map((team) => (
            <tr key={team._id} className="collection-item">
              <td>{count++}</td>
                <td onClick={''} className="team light link">{team.team}</td>
                <td  className="team badge link">{team.code}</td>
                <td><span className="badge ">{team.score}</span></td>
                <td><i className="material-icons link " onClick={this.handleAdd.bind(this, team._id)}>add</i></td>
                <td><i className="material-icons link " onClick={this.handleReduce.bind(this, team._id)}>remove</i></td>
                <td><i className="material-icons link" onClick={this.handleRemove.bind(this, team._id)}>delete</i></td>
            </tr>
        ))

    }

    render() {
        return (
            <div className="light">
                <Header/>
                <div className="container">
                    <div className="row">

                        <div className="">

                          <table className="highlight">
                           <thead>
                             <tr>
                                 <th data-field="">#</th>
                                 <th data-field="">Team</th>
                                 <th data-field="">Code</th>
                                 <th data-field="">Scores</th>
                                 <th data-field="">Add Points</th>
                                 <th data-field="">Reduce Points</th>
                                 <th data-field="">Delete Team</th>
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
    return {teams: Teams.find({}, {sort:{'score':-1}}).fetch()}
}, App)
