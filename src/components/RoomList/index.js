import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRoomList } from './actions';

function RoomList({socket, token, doGetRoomList}) {
  console.log(socket);

  socket.on('sv_room.createCb', (response) => {
    socket.emit('room.list');
  })

  socket.on('sv_room.listCb', response => {
    doGetRoomList();
  })

  const createRoom = () => {
    socket.emit('room.create', {
      token
    });
  }

  return (
    <div className="room-list">
      <h2 className="title">Available rooms</h2>

      <div className="room">
        <p>
          Phòng 1 (Trung)
          <Link to="/">Let's roll</Link>
        </p>
      </div>

      <button onClick={createRoom} className="room-list__btn btn btn--type-1 font-1">
        CREATE ROOM
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  token: state.token,
  socket: state.socket
});

function mapDispatchToProps(dispatch) {
  return {
    doGetRoomList: token => dispatch(getRoomList(token)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomList);
