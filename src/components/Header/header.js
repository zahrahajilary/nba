import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import SideNav from './SideNav/sideNav'

import FontAwesome from 'react-fontawesome'
const Header = (props) => {
    const  logo = () => {
        return (
            <Link to="/" className="logo">
                <img alt="nba logo" src ="/images/nba_logo.png"/>
            </Link>
        )
    }

    const navBars = () => {
        return (
            <div className="bars">
                    <SideNav  {...props}/>
                <FontAwesome name="bars" 
                onClick = {props.onOpenNav}
                style={{
                    color:'white',
                    padding:'10px',
                    cursor:'pointer'

                }} />
            </div>
        )
    }
    return (
        <header className="header">
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>

        </header>
    )
}
export default Header