import React, { Component } from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './Loadingbar.css'
import image from '../ImageFolder/image.png'
import imageLogo from '../ImageFolder/imageLogo.png'
import logo from '../ImageFolder/logo.png'

 
export function Loadingbar() {
    
    const [name, setName] = useState([]);
    
        useEffect(() => {
        axios
        .get(`https://dev.sgj3.peryloth.com/api/getdata`)
        .then((res) => {
            setName(res.data);
        })
        }, [name.value]);   

        return (
            <div className='landingPage'>
                <div className='title'><img className='imgLogo' src={imageLogo} ></img></div>
                <div className='machineContainer'>
                    <div><img src={image} className='machineCapture'></img></div>
                    <div className='percentage'><div className='value'>{name.value}<div>%</div></div> del total de energía acumulada</div>
                </div>
                <div><progress className='progressBar' id="file" value={name.value} max="100"> 32% </progress></div>
                <div className='footerText'>
                    <div>{name.count} personas se han unido para salvar el mundo!</div>
                    <div>Ayúdanos a alcanzar el 100%</div>
                </div>
                <div className='callToAction'>LINK</div>
                <img src={logo} className='logo'></img>

            </div>
        )
}

export default Loadingbar
