import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import HomeworkTable from './components/HomeworkTable';
import { Container, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container column="2">
        <Header as="h2">
          Homework
        </Header>
        {/* <FilterableProductTable /> */}
        <HomeworkTable />
      </Container>
    );
  }
}

export default App;
