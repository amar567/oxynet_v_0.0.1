import React, { Component } from 'react'
import './Hp93vh.css'
import img from './png1.png'
import img1 from './medical-mask.png'
import Essentialcard from './../Essential-card/Essentialcard';

export default class Hp93vh extends Component {
    render() {
        return (
            <div className="93-vh-whole">
                <div className="row-93-vh">
                    <div className="row">
                        <div className="col-md-6 content-col">
                            <div className="col-heading-big">
                                <div className="big-head">Covid19</div>
                                <div className="big-head ">Essentials</div>
                            </div>
                            <div className="col-quote">
                              <p> An Initiative by the students IISER Kolkata , IIT Tirupati ,</p>
                              <p>and MITS Gwalior </p>
                            </div>
                        </div>
                        <div className="col-md-6 img-col">
                            <div className="img-sec">
                                <img src={img}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="esnt-card"><Essentialcard></Essentialcard></div>
            </div>
        )
    }
}
