/* eslint-disable no-undef */
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../styles/App.css';
import AgentDetail from '../componentes/AgentDetail';
import BottomNav from '../componentes/BottomNav';
import ListOfAgents from '../componentes/ListOfAgents';
import MainPage from '../componentes/MainPage';
import ListOfWeapons from '../componentes/ListOfWeapons';
import ListOfMaps from '../componentes/ListOfMaps';
import ListOfBundles from '../componentes/ListOfBundles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="fixed w-full	top-0 h-20 z-50 bg-gray-800
        flex flex-wrap text-white p-4 items-center shadow-lg justify-center">
          <img src={`${process.env.PUBLIC_URL}/valorantlogo.png`} alt='logo' className="h-full" />
        </header>
        <section className="main_wrapper pb-20 pt-20 bg-gray-800 min-h-screen
          flex flex-wrap text-white items-center justify-center">
          <Routes>
            <Route exact path='/agents/:agentId' element={ <AgentDetail /> } />
            <Route exact path='/agents' element={ <ListOfAgents/> } />
            <Route path='/weapons' element={ <ListOfWeapons/> } />
            <Route path='/maps' element={ <ListOfMaps/> } />
            <Route path='/bundles' element={ <ListOfBundles/> } />
            <Route exact path='/' element={ <MainPage/> } />
          </Routes>
        </section>
        <BottomNav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
