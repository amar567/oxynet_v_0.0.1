import React, { Component } from 'react'
import './NewHomePage.css'
import NewNavbar from '../NewNavbar/NewNavbar';
import Hp93vh from '../Homepage93vh/Hp93vh';

export default class NewHomePage extends Component {
    render() {
        return (
            <div>
                <div className="home-top"><NewNavbar></NewNavbar></div>
                <div className="hp-93vh"><Hp93vh></Hp93vh></div>
            </div>
        )
    }
}
