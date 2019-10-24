import React from 'react';
import MainDashBoard from "./components/MainDashboard/MainDashBoard";
import ProjectDashBoard from "./components/ProjectDashboard/ProjectDashBoard";
import PokemonApp from "./components/myProjects/Pokemon/App/PokemonApp";
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <Route path='/' exact component={MainDashBoard}/>
            </div>
            <Route path='/project' exact component={ProjectDashBoard}/>
            <Route path='/project/pokemon' exact component={PokemonApp}/>
        </Router>
    )
};

export default App;