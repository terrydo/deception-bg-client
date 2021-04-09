import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoomList } from './actions';

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    const { socket, doGetRoomList } = props;

    socket.on('sv_room.createCb', () => {
      socket.emit('room.list');
      doGetRoomList();
    });

    socket.on('sv_room.listCb', (rooms) => {
      this.setState((state) => {
        if (!rooms) return;

        const newRooms = [...state.rooms, rooms];

        return { rooms: newRooms };
      });

      console.log(this.state);
    });

    this.state = {
      rooms: [],
    };
  }
  createRoom = () => {
    this.props.socket.emit('room.create', {
      token: this.props.token,
    });
  };
  renderRooms() {
    return this.state.rooms.map((room) => {
      return (
        <p key={room._id}>
          Phòng {room._id} (Trung)
          <Link to={`/game/${room._id}`}>Let's roll</Link>
        </p>
      );
    });
  }
  render() {
    return (
      <div className="room-list">
        <h2 className="title">Available rooms</h2>
        <div className="room">{this.renderRooms()}</div>

        <button
          onClick={this.createRoom}
          className="room-list__btn btn btn--type-1 font-1"
        >
          CREATE ROOM
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.global.token,
  socket: state.global.socket,
});

function mapDispatchToProps(dispatch) {
  return {
    doGetRoomList: (token) => dispatch(getRoomList(token)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
