import React, {Component} from 'react';
import axios from 'axios';


class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItem: []
        }
    }

    componentDidMount() {
        axios.get(`/menu/${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data);
            this.setState({ menuItem: response.data })
        });
    }

    render() {
        console.log(this.state.foodItem);
     const foodItem = this.state.menuItem.map((items, index) => {
         return(
             <div key={index} >
                {items.name}
                {items.price}
                {items.details}
             </div>
         )
     })
        return (
            <div> 
                <h1> Details </h1>
                {foodItem} 
            </div>
            
        )
    }


}
export default Details;