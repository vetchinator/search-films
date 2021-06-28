import MainApp from './App';
import ReactDOM from 'react-dom';
import React from 'react';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
    
