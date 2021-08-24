import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import BottomNav from './componentes/BottomNav';
import ListOfAgents from './componentes/ListOfAgents';

// import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';


// const reducer = (state, action) => state;
// const store = createStore(reducer, composeWithDevTools());


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="fixed w-full	top-0 h-20 bg-gray-800
        flex flex-wrap text-white p-4 items-center shadow-lg justify-center">
          <img src={process.env.PUBLIC_URL + "/valorantlogo.png"} alt='logo' className="h-full" />
        </header>
        <section className="main_wrapper pb-20 pt-28 bg-gray-800 min-h-screen
        flex flex-wrap text-white items-center justify-center">
          <Switch>
            <Route path='/agents'>
              <ListOfAgents/>
            </Route>
            <Route path='/weapons'>
              <ListOfAgents/>
            </Route>
            <Route path='/maps'>
              <ListOfAgents/>
            </Route>
            <Route path='/Bundles'>
              <ListOfAgents/>
            </Route>
            <Route path='/'>
              <ListOfAgents/>
            </Route>
          </Switch>
        </section>
        <BottomNav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
