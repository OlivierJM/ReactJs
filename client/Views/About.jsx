import React, {Component} from 'react';
import Header from './Header.jsx';

export default class About extends Component {

    render() {

        return (
            <div>
                <Header/>
                <div>
                    <h4 className="center ">
                        Developed by Olivier JM</h4>
                    <p className="center flow-text">From Hackers Guild</p>
                    {/* <img src="/img/oliv.jpg" className=""/> */}
                </div>
            </div>
        )
    }
}
