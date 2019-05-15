import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    currentItem: null
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Team 2 FEC Project</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));