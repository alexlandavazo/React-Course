import React from 'react';
import logo from '../logo.svg';
import Alert from '../components/Alert';
import Counter from '../components/Counter';
class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <p>
                    {this.props.title}
                </p>
                <Alert />
                <Counter />
            </header>
        );


    }
}
export default Header;