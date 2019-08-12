import React, { Component } from 'react';
import './style.css';
import logoImg from './img/logo.png';


class Header extends Component {
    render() {
        return (
            <a className="logo" href=""><img src={logoImg} alt=""/></a>
        )
    }
}

export default Header;