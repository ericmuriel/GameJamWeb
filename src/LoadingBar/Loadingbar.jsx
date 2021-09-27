import React, { Component } from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './Loadingbar.css'
import image from '../ImageFolder/image.png'
import imageLogo from '../ImageFolder/imageLogo.png'
import logo from '../ImageFolder/logo.png'

 
export function Loadingbar() {
    
    const [name, setName] = useState([]);
    const [urls, setUrls] = useState([]);
    
        useEffect(() => {
        axios
        .get(`https://dev.sgj3.peryloth.com/api/getdata`)
        .then((res) => {
            setName(res.data);
        })
        }, [name.value]);
    
        useEffect(() => {
        axios
        .get(`https://dev.sgj3.peryloth.com/api/getConf/url_cinematica_inicial`)
        .then((res) => {
            setUrls(res.data);
        })
        }, [urls?.valor]);
    
    const videoOrNot = () => {
        return (
            name.value=== 100 && urls?.valor  ?
                <video width="500" controls>
                    <source src={urls?.valor} type="video/mp4"/>
                </video> :
                <div className='machineContainer'>
                        <div><img src={image} className='machineCapture'></img></div>
                        <div className='percentage'><div className='value'>{name.value}<div>%</div></div> del total de energía acumulada</div>
                </div>
        )

    }
        return (
            <div className='landingPage'>
                <div className='title'><img className='imgLogo' src={imageLogo} ></img></div>
                {videoOrNot()}
                <div><progress className='progressBar' id="file" value={name.value} max="100"> 32% </progress></div>
                <div className='footerText'>
                    <div>{name.count} personas se han unido para salvar el mundo!</div>
                    <div>Ayúdanos a alcanzar el 100%</div>
                </div>
                <div className='callToAction'><a href={'https://peryloth.itch.io/thelasthope'} target="_blank" style={{ fontSize: '18px', color:'white'}}>LINK</a></div>
                <img src={logo} className='logo'></img>

            </div>
        )
}

export default Loadingbar
