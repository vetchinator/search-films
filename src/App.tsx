import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import React from 'react';
import Movies from './components/Movies/Movies';
import MovieFullDescription from './components/Movies/MovieFullDescription';

const App: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">
                    <Switch>
                        <Route exact path="/" render={() => <Movies />} />
                        <Route path="/film/:title" render={() => <MovieFullDescription />} />  
                    </Switch>
                    
            </div>
        </div>
    );
}

const MainApp: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    );
}

export default MainApp;
