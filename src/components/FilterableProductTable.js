import React, { Component } from 'react';
import { Form, Checkbox, Table, Container } from 'semantic-ui-react';

export default class FilterableProductTable extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const lst_stock = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ];

        return(
            <Container>
                <SearchBar />
                <ProductTable value={lst_stock}/>
            </Container>
        );
    }
}

class SearchBar extends Component {
    render() {
        return(
            <Form>
                <Form.Input type='text' placeholder='Search...' width='4' />
                <Form.Checkbox label='Only show products in stock' />
            </Form>
        );
    }
}

class ProductTable extends Component {
    // constructor(props) {
    //     super(props);  
    // }
    
    render() {

        const category = this.props.value[0].category;
        const details = this.props.value;
        const listItems = details.map((detail, index) => 
            <ProductRow key={index} value={detail}/>
        );

        return(
            <Table celled color='red'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell colSpan="2">
                            <ProductCategoryRow value={category}/>
                        </Table.Cell>
                    </Table.Row>
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
            <Table.Row>
                <Table.Cell>{this.props.value.name}</Table.Cell>
                <Table.Cell>{this.props.value.price}</Table.Cell>
            </Table.Row>
        );
    }
}