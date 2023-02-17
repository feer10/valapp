/* eslint-disable no-undef */
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../styles/App.css';
import AgentDetail from '../views/Agents/AgentDetail';
import BottomNav from '../components/BottomNav';
import ScrollToTop from '../components/ScrollToTop';
import ListOfAgents from '../views/Agents/ListOfAgents';
import Home from '../views/Home/Home';
import ListOfWeapons from '../views/Weapons/ListOfWeapons';
import ListOfMaps from '../views/Maps/ListOfMaps';
import WeaponsDetail from '../views/Weapons/WeaponsDetail';
import ListOfBundles from '../views/Bundles/ListOfBundles';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
            <Route path='/weapons/:weaponId' element={ <WeaponsDetail/> } />
            <Route path='/weapons' element={ <ListOfWeapons/> } />
            <Route path='/maps' element={ <ListOfMaps/> } />
            <Route path='/bundles' element={ <ListOfBundles/> } />
            <Route exact path='/' element={ <Home/> } />
          </Routes>
        </section>
        <BottomNav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
