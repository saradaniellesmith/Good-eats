import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


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
                        {items.name}
                        <button> <Link to={`/menu/${items.id}`} key={index} > Details </Link> </button>
                    </div>
                </div>
            ) 
        })

        return(
            <div className="menu-container">
                 <div className="title" > Menu </div>
                 <div> {menu} </div>
            </div>
        )
        
    }

}
export default Menu;