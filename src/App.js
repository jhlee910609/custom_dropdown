import React, { PureComponent } from 'react'
import CounterContainer from './containers/CounterContainer';

export default class App extends PureComponent {

    render() {
        return (
            <div className="box" >
                <CounterContainer />
            </div>
        )
    }
};
