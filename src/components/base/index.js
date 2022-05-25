import React from "react";
import { BrowserRouter, Routes, Route, MemoryRouter, HashRouter } from 'react-router-dom';
import {Gate, Docs } from '../lib';
import { ProfileWidget, LaunchWidget} from '../widgets';

function FreshHarvest(){
    return (
        <HashRouter basename="" hashType='slash'>
            <Routes>
                <Route path="/" element={<Gate/> }/>
                <Route path="/docs" element={<Docs/>}>
                    <Route path="profile" element={<ProfileWidget/>}/>
                    <Route path="launch" element={<LaunchWidget/>}/>
                </Route>
            </Routes>        
        </HashRouter>
    );
}


export default FreshHarvest;