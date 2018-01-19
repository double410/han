import React, { Component } from 'react';
import { Form, Table, Container } from 'semantic-ui-react';

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.handleQuery = this.handleQuery.bind(this);
        this.state = {
            qry_str:{
                prodName:'', 
                hasStock:false
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
                <Form.Input id='search_prod' type='text' placeholder='Search...' width='4' value={prodName} onChange={this.handleChange}/>
                <Form.Checkbox id='search_stock' name='stock' label='Only show products in stock' checked={hasStock} onChange={this.handleClick} />
            </Form>
        );
    }
}

class ProductTable extends Component {

    render() {
        const details = this.props.value;

        var category = '';
        var showCategory = false;

        const listItems = details.map((detail, index) => {
            if (detail.category !== category) {
                showCategory = true;
                category = detail.category;
            } else {
                showCategory = false;
            }
            return <ProductRow key={index} value={detail} showCategory={showCategory}/>
        });
        

        return(
            <Table celled color='red'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {listItems}
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
        const showCategory = this.props.showCategory;
        const {name, price, category} = this.props.value;
        return(
            (showCategory)?
                <Table.Body>
                    <Table.Row>
                        <Table.Cell colSpan="2">
                            <ProductCategoryRow value={category}/>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{price}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            :
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{name}</Table.Cell>
                        <Table.Cell>{price}</Table.Cell>
                    </Table.Row>
                </Table.Body>
        );
    }
}