import { HashRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import React from 'react';
import Movies from './components/Movies/Movies';
import Footer from './components/Footer/Footer';
import MovieFullDescription from './components/Movies/MovieFullDescription';
import { BodyContainer } from './components/StyledComponets/StyledComponents';
import GlobalStyle from './components/StyledComponets/GlobalStyle';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <BodyContainer>
                <Switch>
                    <Route exact path="/" render={() => <Movies />} />
                    <Route path="/film/:title" render={() => <MovieFullDescription />} />
                </Switch>
            </BodyContainer>
            <Footer />
        </>
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
