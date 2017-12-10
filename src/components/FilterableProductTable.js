import React, { Component } from 'react';
import { Form, Table, Container } from 'semantic-ui-react';

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.handleQuery = this.handleQuery.bind(this);
        this.state = {
            qry_str:{
                prodName:'', 
                hasStock:true
            }
        };
    }

    handleQuery (qry_str) {
        this.setState({qry_str: qry_str});
    }

    render() {
        const lst_stock_1 = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ];

        const lst_stock_2 = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];
        
        const hasStock = this.state.qry_str.hasStock;
        const prodName = this.state.qry_str.prodName;
        
        var qry_stock = [];
        if (hasStock) {
            qry_stock = lst_stock_2;
        } else {
            qry_stock = lst_stock_1;
        }
        

        return(
            <Container>
                <SearchBar qry_str={this.state.qry_str} onQuery={this.handleQuery}/>
                <ProductTable value={qry_stock}/>
            </Container>
        );
    }
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        const qry_str = this.props.qry_str;
        qry_str.hasStock = !this.props.qry_str.hasStock;
        this.props.onQuery(qry_str);
    }

    handleChange = (e) => {
        const qry_str = this.props.qry_str;
        qry_str.prodName = e.target.value;
        this.props.onQuery(qry_str);
    }

    render() {
        const hasStock = this.props.qry_str.hasStock;
        const prodName = this.props.qry_str.prodName;
        return(
            <Form>
                <Form.Input type='text' placeholder='Search...' width='4' value={prodName} onChange={this.handleChange}/>
                <Form.Checkbox label='Only show products in stock' checked={hasStock} onChange={this.handleClick} />
            </Form>
        );
    }
}

class ProductTable extends Component {

    render() {
        const details = this.props.value;
        // const listItems = details.map((detail, index) => 
        //     <ProductRow key={index} value={detail}/>
        // );
        var category = '';
        const listItems = details.map(function(detail, index) {
            if (detail.category !== category) {
                category = detail.category;
                return (
                    <Table.Row>
                        <Table.Cell colSpan="2">
                            <ProductCategoryRow value={category}/>
                        </Table.Cell>
                    </Table.Row>
                    // <ProductRow key={index} value={detail}/>
                )
            } 
            return <ProductRow key={index} value={detail}/>
        });

        return(
            <Table celled color='red'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {listItems}
                </Table.Body>
            </Table>
        );
    }
}

class ProductCategoryRow extends Component {
    render() {
        return(
            <div>
                {this.props.value}
            </div>
        );
    }
}

class ProductRow extends Component {
    render() {
        return(
            // <Table.Body>
            <Table.Row>
                <Table.Cell>{this.props.value.name}</Table.Cell>
                <Table.Cell>{this.props.value.price}</Table.Cell>
            </Table.Row>
            // </Table.Body>
        );
    }
}