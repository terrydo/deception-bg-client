import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Loading assets
 */
import 'assets/scss/app.scss';
import 'assets/scss/custom-bootstrap.scss';

import Home from './pages/Home';
import Game from './pages/Game';
import Page404 from './pages/404';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { socket } = props;
    socket.on('welcome', (data) => {
      console.log(data.message);
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/game/:id"
            render={(props) => <Game gameId={props.match.params.id} />}
          />
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  socket: state.global.socket,
});

export function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
