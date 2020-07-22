import React from 'react';

const Alert = () => (
    <a
        className="App-link"
        href="https://google.com"
        target="_blank"
        onClick={{ alert }}
        rel="noopener noreferrer"
    >
        Google
    </a>);
export default Alert;