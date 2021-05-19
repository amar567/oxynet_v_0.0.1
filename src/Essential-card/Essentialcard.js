import React, { Component } from 'react'
import './Essentialcard.css'
export default class Essentialcard extends Component {

    const = ["Hospitals","Oxygen","NGO"]
    render() {
        return (
            <div className="es-card-whole">
                <div className="es-card">
                    <div className="card-tab">
                        
                        <div className="card-data">
                            <div className="card-content">Hospitals</div>
                            <div className="card-circle"></div>
                        </div>
                        
                        <div className="card-data">
                            <div className="card-content">Hospitals</div>
                            <div className="card-circle"></div>
                        </div>
                        
                        <div className="card-data">
                            <div className="card-content">Hospitals</div>
                            <div className="card-circle"></div>
                        </div>
                        
                        <div className="card-data">
                            <div className="card-content">Hospitals</div>
                            <div className="card-circle"></div>
                        </div>
                        
                        <div className="card-data">
                            <div className="card-content">Hospitals</div>
                            <div className="card-circle"></div>
                        </div>
                        
                        <div className="card-data">
                            <div className="card-content">Hospitals</div>
                            <div className="card-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
