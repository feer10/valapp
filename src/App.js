import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import AgentDetail from './componentes/AgentDetail';
import BottomNav from './componentes/BottomNav';
import ListOfAgents from './componentes/ListOfAgents';
import StaticContext from './context/StaticContext';
import {AgentsContextProvider} from './context/AgentsContext';
import MainPage from './componentes/MainPage';
import ListOfWeapons from './componentes/ListOfWeapons';
import { WeaponsContextProvider } from './context/WeaponsContext';
import ListOfMaps from './componentes/ListOfMaps';
import { MapsContextProvider } from './context/MapsContext';
import { BundlesContextProvider } from './context/BundlesContext';
import ListOfBundles from './componentes/ListOfBundles';

// import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';


// const reducer = (state, action) => state;
// const store = createStore(reducer, composeWithDevTools());


function App() {
  return (
    <BrowserRouter>
      <StaticContext.Provider value={{}}>
        <div className="App">
          <header className="fixed w-full	top-0 h-20 z-50 bg-gray-800
          flex flex-wrap text-white p-4 items-center shadow-lg justify-center">
            <img src={`${process.env.PUBLIC_URL}/valorantlogo.png`} alt='logo' className="h-full" />
          </header>
          <section className="main_wrapper pb-20 pt-20 bg-gray-800 min-h-screen
          flex flex-wrap text-white items-center justify-center">
            <Switch>
              <AgentsContextProvider>
                <Route exact path='/agents/:agentId'>
                  <AgentDetail/>
                </Route>
                <Route exact path='/agents'>
                  <ListOfAgents/>
                </Route>
                <WeaponsContextProvider>
                  <Route path='/weapons'>
                    <ListOfWeapons/>
                  </Route>
                </WeaponsContextProvider>
                <MapsContextProvider>
                  <Route path='/maps'>
                    <ListOfMaps/>
                  </Route>
                </MapsContextProvider>
                <BundlesContextProvider>
                  <Route path='/bundles'>
                    <ListOfBundles/>
                  </Route>
                </BundlesContextProvider>
                <Route exact path='/'>
                  <MainPage/>
                </Route>
              </AgentsContextProvider>
            </Switch>
          </section>
          <BottomNav/>
        </div>
      </StaticContext.Provider>
    </BrowserRouter>
  );
}

export default App;
