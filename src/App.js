import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Skill} from "./skills/skill/skill";
import React from "react";
import {Works} from "./works/Works";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
