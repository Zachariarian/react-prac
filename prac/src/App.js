import React from 'react'
import ReactDOM from 'react'
import './App.css'
export default App

function App() {
  class ProductList extends React.Component {
    render() {
    return (
    <div className='ui unstackable items'>
    Hello, friend! I am a basic React component.
    </div>
    );
    }
    }
ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
    );
}