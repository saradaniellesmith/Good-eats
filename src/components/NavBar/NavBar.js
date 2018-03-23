import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div className="nav">
                <img className="nav-logo" src={require('./logo.svg')} />
                <div className="nav-menu"> 
                    <p> Menu </p>
                    <img className="icon" src={require('./menu.svg')} />
                </div>
                <div className="nav-cart"> 
                    <p> Cart </p>
                    <img className="icon" src={require('./shoppingcart.svg')} />
                </div>
                <div className="logout">
                    <p> Logout </p>
                    <img className="icon" src={require('./logout.svg')} />
                </div>
            </div>
        )
    }
}
export default NavBar;