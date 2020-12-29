import React from "react";
import {Route, Router} from 'react-router-dom';
import "./App.css"

import Header from "./components/Header/Header";
import BuildingChoice from "./components/BuildingChoice/BuildingChoice";
import ConstructionMaterial from "./components/ConstructionMaterial /ConstructionMaterial";
import FloorsNumber from "./components/FloorsNumber/FloorsNumber";
import Result from "./components/Result/Result";
import WallsLength from "./components/WallsSize/WallsSize";

import {createBrowserHistory} from "history";
const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
            <div className="block_centering">
                    <Header/>
                <Route exact path='/' render={() => <BuildingChoice/>}/>
                <Route exact path='/floors' render={() => <FloorsNumber/>}/>
                <Route exact path='/material' render={() => <ConstructionMaterial/>}/>
                <Route exact path='/size' render={() => <WallsLength/>}/>
                <Route exact path='/result' render={() => <Result/>}/>
            </div>
            </Router>
        )
    }
}
export default App;
