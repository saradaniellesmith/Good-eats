import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import NavBar from './../NavBar/NavBar';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: []
        }

    }

    componentDidMount() {
        axios.get('/menu').then(response => {
          console.log(response);
          this.setState({ menuList: response.data });
        }).catch(console.log);
    }

    render(){
        var menu = this.state.menuList.map((items, index) => {
            return (
                <div className="menu" key={index}> 
                    <div className="menu-items" >
                    <Link to={`/menu/${items.id}`} key={index} >
                        {items.name}
                    </Link>
                        <button>  Details  </button>
                    </div>
                </div>
            ) 
        })

        return(
            <div className="menu-container">
                <NavBar />
                 <div className="title" > Menu </div>
                 <div> {menu} </div>
            </div>
        )
        
    }

}
export default Menu;