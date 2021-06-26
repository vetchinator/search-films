import MainApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// Object.defineProperty(window, 'matchMedia', {
//     writable: true,
//     value: jest.fn().mockImplementation(query => ({
//         matches: false,
//         media: query,
//         onchange: null,
//         addListener: jest.fn(), // deprecated
//         removeListener: jest.fn(), // deprecated
//         addEventListener: jest.fn(),
//         removeEventListener: jest.fn(),
//         dispatchEvent: jest.fn()
//     }))
// })

// describe("Test", () => {
//     beforeAll(() => {  
//       Object.defineProperty(window, "matchMedia", {
//         value: jest.fn(() => { return { matches: true } })
//       });
//     });
//   });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
