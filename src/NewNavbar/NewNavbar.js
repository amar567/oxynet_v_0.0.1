import React, { Component } from 'react'
import './NewNavbar.css'

export default class NewNavbar extends Component {
    render() {
        return (
            <div className="new-nav-whole">
                <div className="nav-inside">
                    <div className="nav-inside-left">
                        Oxynet
                    </div>
                    <div className="nav-inside-right">
                        <div className="list">Home</div>
                        <div className="list">About Us</div>
                        <div className="list">Important</div>
                        <div className="list">Seller</div>
                    </div>
                </div>
            </div>
        )
    }
}
