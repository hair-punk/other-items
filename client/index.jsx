import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    otherItems: []
    }
  }

  componentDidMount() {
    //Get 5 items from database.
    this.fetchItems();
  }

  clickItem(){
    this.fetchItems();
  }

  fetchItems(next){
    axios.get('http://localhost:3003/items')
      .then((res) => {
        this.setState({
          otherItems: res.data
        });
        if(next){
          next();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="other-items">
        <h1 className="jjc-title"> You may also like</h1>
        <Container items={this.state.otherItems} handleClick={this.clickItem.bind(this)}/>
        <div className="jjc-button-container">
          <button className="jjc-button">Shop more similar items</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('jjc-app'));