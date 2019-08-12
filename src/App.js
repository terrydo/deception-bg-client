import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Loading assets
 */
import 'assets/scss/app.scss';
import Home from './pages/Home';

class App extends React.Component {
  constructor(props){
    super(props);
    const { socket } = props;
    socket.on('welcome', data => {
      console.log(data.message);
    })
  }
  render(){
    return (
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  socket: state.global.socket,  
});

export function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
