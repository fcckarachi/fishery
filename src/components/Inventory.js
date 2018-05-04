import React, { Component } from 'react';

export default class Inventory extends Component {
    constructor(){
        super();

        this.state = {
            name : "",
            price : '',
            desc : ""
        };
    }

    onChange(e){
        let senderID,senderValue;
        senderID = e.target.id;
        senderValue = e.target.value;
        this.setState({[senderID] : senderValue});
    }

    onSubmit(e){
        e.preventDefault();

        let obj = {},name,price,desc;
        name = this.state.name;
        price = this.state.price;
        desc = this.state.desc;

        obj = {name,price,desc};

        this.props.addFish(obj);

        this.setState({
            name : "",
            price : "",
            desc : ""
        });
    }

    render() {
        let  name,price,desc;
        name = this.state.name;
        price = this.state.price;
        desc = this.state.desc;
        return (
            <div className="col-md-4">
                <h3>Inventory</h3>
                <form onSubmit = {this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" value={price} className="form-control" id="price" placeholder="Price" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <textarea className="form-control" value={desc} id="desc" placeholder="Description"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
}