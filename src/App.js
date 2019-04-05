import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import triangle from './triangle.svg'
import purpcircle from './purpcircle.png'
import bluecircle from './bluecircle.png'
import greencircle from './greencircle.png'
import pucircle from './pucircle.png'
import purpflat from './purpflat.png'
import seacircle from './seacircle.png'
import greycircle from './greycircle.png'
import knudgelogo from './knudgelogo.png'


class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*className="App-link"*/}
                {/*href="https://reactjs.org"*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
                {/*>*/}
                {/*Learn React*/}
                {/*</a>*/}
                {/*</header>*/}
                <Particles
                    className="particles"
                    params={{
                        particles: {
                            number: {
                                value: 40,
                                density: {
                                    enable: true,
                                    value_area: 300
                                }
                            },
                            shape: {
                                type: 'images',
                                images: [{
                                    src: triangle,
                                    height: 100,
                                    width: 100
                                },
                                    {
                                        src: purpcircle,
                                        height: 100,
                                        width: 100
                                    },
                                    {
                                        src: bluecircle,
                                        height: 100,
                                        width: 100
                                    },
                                    {
                                        src: greencircle,
                                        height: 100,
                                        width: 100
                                    },
                                    {
                                        src: pucircle,
                                        height: 100,
                                        width: 100
                                    },
                                    {
                                        src: purpflat,
                                        height: 100,
                                        width: 100
                                    },
                                    {
                                        src: seacircle,
                                        height: 100,
                                        width: 100
                                    },
                                    {
                                        src: greycircle,
                                        height: 100,
                                        width: 100
                                    }
                                ]
                            },
                            size: {
                                value: 120,
                                random: true
                            },
                            move: {
                                enable: true,
                                speed: 4,
                                direction: "none",
                                random: true,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: true,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }

                        }
                    }}/>
                <div className="introbox">
                    <img className="knulogo" src={knudgelogo}></img>
                    <div className="hometext">The Pleasant People Planner</div>
                    <button className="addbutton">Add friends via Google</button>
                </div>

            </div>
        );
    }
}

export default App;
