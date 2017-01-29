import React, {Component} from 'react';
import Header from './Header.jsx';

export default class Instructions extends Component {

    render() {

        return (
            <div>
                <Header/>
                <div>
                    <h4 className="center ">
                        Instructions Of The Quiz</h4>
                    <p className="center flow-text">
                      You are to keep silence during the quiz, and observe all the in-house rules of the auditorium
                      
                    </p>
                </div>
            </div>
        )
    }
}
