import React, {Component, Proptypes} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import Login from '../Dashboard/Login.jsx';

export default class Header extends Component {

    handleAdmin() {

        if (Meteor.user()) {
            return (
                <a href="/admin" className="waves-effect">
                    {/* <i className="material-icons">account_circle</i> */}
                    Admin</a>
            )
        } else {
            this.showLogin()
        }
    }
    //
    showLogin() {
        // event.preventDefault();

        user = Meteor.user();
        if (user) {
            return (
                <a className="waves-effect" href="" onClick={this.logOut.bind(this)}>Logout</a>
            )

        } else {
            // FlowRouter.go('/login');
            return (
                <a className="waves-effect" href="/login">Login</a>
            )
        }
    }

    logOut(event) {
        event.preventDefault();
        Meteor.logout(function(error) {
            if (error) {
                Materialize.toast(error.reason);
            } else {
                FlowRouter.go('/');
                Materialize.toast('You have successfully logged out')
            }
        });

    }

    //show Dashboard
    showDash() {
        if (Meteor.user()) {
            return <a href="/dash" className="waves-green">Dashboard</a>
        } else {
            return null;
        }

    }

    render() {
        // var user = this.props.user;
        Meteor.setTimeout(function() {
            $('.button-collapse').sideNav({menuWidth: 300, edge: 'left', closeOnClick: true, draggable: true});
        }, 10);

        return (
            <div className="">
                <nav className=" nav blue darken-1">
                    <div className="nav-wrapper container">
                        {/* <a href="#mobile-demo" data-activates="mobile-demo" className="button-collapse">
                        <i className="material-icons">menu</i>
                    </a> */}
                    {/* Adventist Youth Ministries Bible Quiz Program */}
                        <a href="/" className="brand-logo">Southern Zambia Union Conference Bible Quiz</a>

                        <ul className="right hide-on-med-and-down" id="menu-list">
                           
                            <li>
                                <a href="/admin" className="waves-effect">
                                    {/* <i className="material-icons">account_circle</i> */}
                                    Admin</a>
                            </li>

                            <li>
                                <a className="waves-effect" href="/help">Instructions</a>
                            </li>
                            <li>
                                <a href="/about" className="waves-effect">
                                    {/* <i className="material-icons">account_circle</i> */}
                                    About</a>
                            </li>
                            {/* <li>

                          {this.showLogin()}
                        </li> */}
                        </ul>

                        <ul id="slide-out" className="side-nav">
                            <li>
                                <div className="userView">
                                    <div className="background">
                                        {/* <img src="img/backg.jpg"   /> */}
                                        <ul>
                                            <li href="#!user">
                                                <img className="circle" width="300" height="200" src="img/olivier.jpeg"/>
                                                <a href="mailto:oliver@hackersguild.org">
                                                    <span className="grey-text email">oliver@hackersguild.org</span>
                                                </a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/dash" className="waves-green">Dashboard</a>
                            </li>
                            <li>

                                <a href="/mobile" className="waves-effect">
                                    {/* <i className="material-icons">account_circle</i> */}
                                    Mobile View</a>
                            </li>

                            <li>
                                <div className="divider"></div>
                            </li>
                            <li>
                                <a className="subheader">More</a>
                            </li>
                            <li>
                                <a className="waves-effect" href="/help">Instructions</a>
                            </li>
                            <li>
                              <a href="/about" className="waves-effect">
                              {/* <i className="material-icons">account_circle</i> */}
                              About</a>
                            </li>
                            {/* <li>
                              {this.showLogin()}

                            </li> */}
                        </ul>
                        <a href="" data-activates="slide-out" className="button-collapse">
                            {/* <i className="material-icons">menu</i> */}
                        </a>
                    </div>

                </nav>
            </div>

        )
    }
}
