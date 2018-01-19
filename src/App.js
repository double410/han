import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import NavigationBar from './components/NavigationBar';
import HomeworkTable from './components/HomeworkTable';
import { Container, Header } from 'semantic-ui-react';

class App extends Component {
  

  render() {
    // const {activeItem} = this.state;
    return (
      <Container column={2}>
        <NavigationBar />
        <Header as='h2'>
          Homework
        </Header>
        {/* <FilterableProductTable /> */}
        <HomeworkTable />
      </Container>
    );
  }
}

export default App;
