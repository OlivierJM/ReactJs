import React, { Component, Proptypes } from 'react';

export default class Header extends Component {


  render(){

    return(
      <nav className=" nav green darken-1">
         <div className="nav-wrapper">
           <a href="/" className="brand-logo center">Quiz</a>
           <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li><a href="/dash" className="add"><i className="material-icons">group_add</i></a></li>
           </ul>
         </div>
       </nav>
    )
  }
}
