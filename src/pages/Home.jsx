import React from 'react';
import Login from 'components/Login';
import RoomList from 'components/RoomList';

import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <div id="home" className="page">
        {this.props.token ? <RoomList /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.global.token,
});

export function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
