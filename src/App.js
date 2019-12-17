import React, {Component} from 'react';
import logo from './images/logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import triangle from './images/triangle.svg'
import purpcircle from './images/purpcircle.png'
import bluecircle from './images/bluecircle.png'
import greencircle from './images/greencircle.png'
import pucircle from './images/pucircle.png'
import purpflat from './images/purpflat.png'
import seacircle from './images/seacircle.png'
import greycircle from './images/greycircle.png'
import knudgelogo from './images/knudgelogo.png'
import knudgelogoblack from './images/knudgelogoblack.png'
import mockScreen from './images/mockupScreen.png'


class App extends Component {

    particleparams = {
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
    };

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
                    params={this.particleparams}>

                </Particles>
                <div className="introbox">
                    <img className="knulogo" src={knudgelogoblack}></img>
                    <div className="hometext">The Pleasant People Planner</div>
                    <button className="addbutton">Request Access</button>
                </div>
                <div className="MoreInfo">
                    <div className="iphonePic">
                        <img className="mockScreen" src={mockScreen}/>
                    </div>
                    <div className="feature">
                        <div className="featureHeading">Features</div>
                        <div className="featureCard">1. Deepen your Relationships</div>
                        <div className="featureCard">2. Truly Harness Your Network</div>
                        <div className="featureCard">3. Reconnect Consistently</div>
                        <div className="featureCard">4. Amplify your Awesome</div>
                    </div>


                </div>


            </div>
        );
    }
}

export default App;
