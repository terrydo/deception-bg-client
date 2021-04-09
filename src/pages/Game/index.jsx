import React from 'react';
import { connect } from 'react-redux';
import PlayerList from 'components/Player/list';
import Player from 'components/Player';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    const { socket, gameId } = props;
    console.log(gameId);
    socket.emit('game.getPlayersInRoom', gameId);
  }
  render() {
    return (
      <div id="game" className="page">
        <PlayerList>
          <Player />
        </PlayerList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.global.token,
  players: state.game.players,
  socket: state.global.socket,
});

export function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
