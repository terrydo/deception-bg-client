import React from 'react';

export default class Player extends React.Component {
  render() {
    return (
      <div className="player player--0">
        <div className="player__cards row gutters-5">
          <div className="col">
            <div className="player__card player__card--clue">
              <div className="player__card-wrap">
                <img src="/images/cards/clue/apple.png" alt="" />
                <span className="player__card-name">Apple</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="player__card player__card--clue">
              <div className="player__card-wrap">
                <img src="/images/cards/clue/apple.png" alt="" />
                <span className="player__card-name">Apple</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="player__card player__card--clue">
              <div className="player__card-wrap">
                <img src="/images/cards/clue/apple.png" alt="" />
                <span className="player__card-name">Apple</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="player__card player__card--clue">
              <div className="player__card-wrap">
                <img src="/images/cards/clue/apple.png" alt="" />
                <span className="player__card-name">Apple</span>
              </div>
            </div>
          </div>
        </div>

        <div className="player__cards row gutters-5">
          <div className="col">
            <div className="player__card player__card--means"></div>
          </div>
          <div className="col">
            <div className="player__card player__card--means"></div>
          </div>
          <div className="col">
            <div className="player__card player__card--means"></div>
          </div>
          <div className="col">
            <div className="player__card player__card--means"></div>
          </div>
        </div>

        <div className="player__name"></div>
      </div>
    );
  }
}
