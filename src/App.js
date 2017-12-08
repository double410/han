import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import { Container, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container column='2'>
        <Header as='h2'>
          Stock
        </Header>
        <FilterableProductTable />
      </Container>
    );
  }
}

export default App;
