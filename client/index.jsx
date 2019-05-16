import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    currentItem: null
    }
  }

  componentDidMount() {
    //Get 5 items from database.
  }

  render() {
    return (
      <div>
        <h1 className="jjc-title"> You may also like</h1>
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('jjc-app'));