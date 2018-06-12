import React, {Component} from 'react';
import Header from './Header.jsx';

export default class About extends Component {

    render() {

        return (
            <div>
                <Header/>
                <div>
                    <h4 className="center ">
                       SoftWare Developed by Olivier JM</h4>
                    <p className="center flow-text">From BongoHive</p>
                    {/* <img src="/img/olivier.jpg" className="img-circle"/> */}
                </div>
            </div>
        )
    }
}
