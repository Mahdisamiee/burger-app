import React, { Component } from 'react'
import Layout from './components/Layout/TabLayer';
import BurgerBuilder from './containers/Burger/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder/>
      </Layout>
    )
  }
}

export default App;