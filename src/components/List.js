import React, { Component } from 'react';

export default class List extends Component {

    getListItems(){
        let arr = [],fishes;
        fishes = this.props.fishes;

        for(let key in fishes){
            let fish;
            fish = fishes [key];
            arr.push(<ListItem key={key} fish={fish} />)
        }

        return arr;
    }

    render() {
        let arrListItems;
        arrListItems = this.getListItems();

        return (
            <div className="col-md-4">
                <h3>List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Desc</th>
                        </tr>
                    </thead>

                    <tbody>
                        {arrListItems}
                    </tbody>
                </table>
            </div>
        )
    }
}

function ListItem(props) {
    let fish = props.fish;
    return (
        <tr>
            <td>{fish.name}</td>
            <td>{fish.price}</td>
            <td>{fish.desc}</td>
        </tr>
    )
}