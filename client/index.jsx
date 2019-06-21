import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container.jsx';
import axios from 'axios';

const host = location.hostname || 'localhost';
// const port = process.env.PORT || 3003;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    otherItems: [],
    buttonHovered: false
    }
  }

  componentDidMount() {
    //Get 5 items from database.
    console.log('Component Mounted');
    this.fetchItems();
  }

  clickItem() {
    this.fetchItems();
  }

  fetchItems(next) {
    console.log(`Fetching items from: http://${host}:3003/items`);

    // axios.get(`http://other-items-master.32xp9vpiyi.us-east-1.elasticbeanstalk.com/items`, {headers:{
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Accept': 'application/json'}})
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({
    //       otherItems: res.data
    //     });
    //     if(next){
    //       next();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios.get(`http://${host}:3003/items`, {headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'}})
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

  handleButtonHover() {
    this.setState({
      buttonHovered: true
    });
  }

  handleButtonUnhover() {
    this.setState({
      buttonHovered: false
    });
  }

  render() {
    return (
      <div id="other-items" style={otherItemsStyle}>
        <h1 className="jjc-title" style={jjcTitleStyle}> You may also like</h1>
        <Container items={this.state.otherItems} handleClick={this.clickItem.bind(this)}/>
        <div className="jjc-button-container" style={jjcButtonContainerStyle} onMouseEnter={this.handleButtonHover.bind(this)} onMouseLeave={this.handleButtonUnhover.bind(this)}>
          <button className="jjc-button" style={this.state.buttonHovered ? jjcButtonHoverStyle : jjcButtonStyle}>Shop more similar items</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('jjc-app'));



const otherItemsStyle = {
  fontFamily: "Graphik Webfont,-apple-system,BlinkMacSystemFont,Roboto,Droid Sans,Segoe UI,Helvetica,Arial,sans-serif"
};

const jjcTitleStyle = {
  color: '#212121',
  textAlign: 'center',
  paddingTop: '30px',
  fontSize: '20px',
  fontWeight: 'bold'
};

const jjcButtonContainerStyle = {
  marginBottom: '36px',
  textAlign: 'center',
  boxSizing: 'border-box'
};

const jjcButtonStyle = {
  backgroundColor: '#222222',
  borderColor: '#e6e6e6',
  color: '#FFF',
  borderRadius: '3px',
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'inline-block',
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: 'bold',
  height: '38px',
  'lineHeight': '1.4',
  padding: '8px 12px'
};

const jjcButtonHoverStyle = {
  backgroundColor: '#3c3c3c',
  borderColor: '#e6e6e6',
  color: '#FFF',
  borderRadius: '3px',
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'inline-block',
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: 'bold',
  height: '38px',
  'lineHeight': '1.4',
  padding: '8px 12px'
};