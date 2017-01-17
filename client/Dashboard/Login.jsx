import React, {Component, PropTypes} from 'react';
import Header from '../Views/Header.jsx';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';

export default class Register extends Component {
    constructor() {
      super();

    }

    handleSubmit(event){
      event.preventDefault();
        let user = $('#username').val();
        let password = $('#password').val();

        Meteor.loginWithPassword(user, password, (error) =>{

          if(error != undefined){
            // var $toastContent = getInnerHTML('<span className="red">'error.reason'</span>');
            // Materialize.toast($toastContent, 5000);
            Materialize.toast(error.reason, 5000);
            // alert(error.reason)
          }
          else{

            Materialize.toast('You have successfully logged in as Admin', 5000);
            //  return window.location = '/';
             return FlowRouter.go('/admin');

          }
        });
        }

    render() {
        return (
          <div>
            <Header />
            <div className="container">
                <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>


                    <div className="row">
                      <div className="input-field col s12">
                        <input id="username" type="text" className="" required placeholder="username"/>
                      </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" required placeholder="Password"/>
                        </div>
                    </div>

                    <div className="row">
                      <button className="btn waves-effect waves-light green darken-1" role="submit" name="action"> log in
                                     <i className="material-icons right">send</i>
                      </button>
                    </div>

                </form>
            </div>
          </div>

        )
    }
}
