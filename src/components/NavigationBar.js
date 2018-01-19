import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class NavigationBar extends Component {
    state = {activeItem: 'home'};

    handleClick=(e, { name })=>{
        this.setState({activeItem: name});
        switch(name){
            case 'home':
                console.log('home is clicked.');
                break;
            case 'stock':
                console.log('stock is clicked.')
                break;
            default:
                console.log('default is clicked.');
        }
    }

    render(){
        const { activeItem } = this.state; 
        return(
            <Menu>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>Home</Menu.Item>
                <Menu.Item name='stock' active={activeItem === 'stock'} onClick={this.handleClick}>Stock</Menu.Item>
                <Menu.Item onClick={this.handleClick}>Product</Menu.Item>
                <Menu.Item onClick={this.handleClick}>About</Menu.Item>
            </Menu>
        );
    }
}


