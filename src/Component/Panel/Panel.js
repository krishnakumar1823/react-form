import React, { Component } from "react";
import './Panel.css'
import '../Nav/Nav.css'
//import Img from '../Image/02.png'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaSkype } from "react-icons/fa";

export const Panel=class Page extends Component{
    render(){
        let arr=[<FaFacebookF/>,<FaTwitter/>,<FaLinkedinIn/>,<FaSkype/>]
        let ArrOfObj=[{h1:10,p:"Year Experience"},{h1:2000,p:"Client's Review"},{h1:100,p:"Global Awards"}]

        return(
            <div className="bg-clr" style={{height:"100vh"}}>
                <div className="container">
                    <div className="row">
                        <div className="res-div-1">
                            <img src={require('../Image/02.png')}/>
                        </div>
                        <div className="res-div-2 row">
                            <div className="col-12 div-border">
                                <h3 style={{color:"gray"}}>Hi, I am Alex Neymar</h3>
                                <h3 style={{fontWeight:"400",fontSize:"45px"}}>Capturing the beauty of your everyday life</h3>
                                <p style={{color:"gray"}}>Nisi aptent vel odio posuere mattis condimentum convallis class est egestas mi
                                dictumst leo nascetur fermentum ac taciti iaculis gravida ridiulus libero pulvinar
                                curabitur metus venenatis commodo porttitor magna</p>
                                <div className="col-12 row">
                                    <div className="col-2">
                                        <a href="" style={{padding:"15px 20px",backgroundColor:"orange",color:"black",textDecoration:"none",borderRadius:"6px"}}>Hire Me</a>
                                    </div>
                                    <div className="col-10 row jcnt gap">
                                        {
                                            arr.map((val)=>{
                                                return(
                                                    <div className="icons col-1">
                                                        <span style={{color:"red"}}>
                                                            {val}
                                                        </span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 row gap-2">
                                {
                                    ArrOfObj.map((val) =>{
                                        return(
                                        <div className="col-4 panel-last-bg">
                                            <h1>{val.h1}</h1>
                                            <p>{val.p}</p>
                                        </div>
                                        )
                                    })
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}