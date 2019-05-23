import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container.jsx';
import axios from 'axios';

const otherItemsStyle = {
  fontFamily: "Graphik Webfont,-apple-system,BlinkMacSystemFont,Roboto,Droid Sans,Segoe UI,Helvetica,Arial,sans-serif"
}

const jjcTitleStyle = {
  color: '#212121',
  textAlign: 'center',
  paddingTop: '30px',
  fontSize: '20px',
  fontWeight: 'bold'
}

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
        console.log(res.data);
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
      <div id="other-items" style={otherItemsStyle}>
        <h1 className="jjc-title" style={jjcTitleStyle}> You may also like</h1>
        <Container items={this.state.otherItems} handleClick={this.clickItem.bind(this)}/>
        <div className="jjc-button-container">
          <button className="jjc-button">Shop more similar items</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('jjc-app'));
