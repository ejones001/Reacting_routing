import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/characters" component={BrowseCharacters} />
            <Route path="/character/:id" component={CharacterDetails} />
            <Route path="/comics" component={Comics} />
        </Switch>
    </Router>
);

export default App;
