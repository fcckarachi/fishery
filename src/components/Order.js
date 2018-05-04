import React, { Component } from 'react';

export default class Order extends Component {

    constructor() {
        super();

        this.state = {
            orders: [],
            fish: "",
            quantity: "",
            total: "0"
        }
    }

    getFishOptions() {
        let arr = [], fishes;
        fishes = this.props.fishes;

        for (let key in fishes) {
            let fish;
            fish = fishes[key];
            arr.push(<option key={key} value={key} >{fish.name}</option>)
        }
        arr.unshift(<option key="-1" value="">Select</option>)

        return arr;
    }

    onChange(e) {
        let senderID, senderValue;
        senderID = e.target.id;
        senderValue = e.target.value;
        this.setState({ [senderID]: senderValue });
    }

    onSubmit(e) {
        e.preventDefault();
        let fishKey, quantity, order = {}, orders, total,fishes,fish;
        fishes = this.props.fishes;
        orders = this.state.orders;        
        fishKey = this.state.fish;
        quantity = this.state.quantity;
        total = parseFloat(this.state.total);
        order = { fishKey: fishKey, quantity: quantity };
        orders.push(order);

        fish = fishes[fishKey];

        total += (parseFloat(fish.price) * parseInt(quantity));

        this.setState({ fish: "", quantity: "", total: total });
    }

    getListItems() {
        let fishes, orders, arrListItems = [];
        fishes = this.props.fishes;
        orders = this.state.orders;

        for (let key in orders) {
            let order, fish, name, quantity, amount;
            order = orders[key];
            quantity = order.quantity;
            fish = fishes[order.fishKey];
            name = fish.name;
            amount = quantity * parseFloat(fish.price);
            arrListItems.push(<ListItem key={key} name={name} quantity={quantity} amount={amount} />);
        }

        return arrListItems;
    }

    render() {
        let fishOptions, fish, quantity, listItems, total;
        fishOptions = this.getFishOptions();
        fish = this.state.fish;
        quantity = this.state.quantity;
        listItems = this.getListItems();
        total = this.state.total;

        return (
            <div className="col-md-4">
                <h3>Order</h3>
                <form onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="fish">Fish</label>
                        <select id="fish" value={fish} className="form-control" placeholder="Fish" required>
                            {fishOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input id="quantity" value={quantity} type="number" className="form-control"
                            placeholder="Quantity" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Fish</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2"><b>Total</b></td>
                            <td ><b>{total}</b></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

function ListItem(props) {
    let name, quantity, amount;
    name = props.name;
    quantity = props.quantity;
    amount = props.amount;
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{amount}</td>
        </tr>
    );
}