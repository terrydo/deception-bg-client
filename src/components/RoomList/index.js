import React from 'react';
import { Link } from 'react-router-dom';

function RoomList() {
  return (
    <div className="room-list">
      <h2 className="title">Available rooms</h2>

      <div className="room">
        <p>
          Phòng 1 (Trung)
          <Link to="/">Let's roll</Link>
        </p>
      </div>
    </div>
  )
}

export default RoomList;