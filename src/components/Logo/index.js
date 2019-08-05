import React from 'react';
import ImgChain from 'assets/images/chain.png';
import ImgBoard from 'assets/images/boardlogo.png';

function Logo(){
  return (
    <div className="logo">       
      <img alt="Chain 1" src={ImgChain} className="chain chain-1"/>
      <img alt="Chain 2" src={ImgChain} className="chain chain-2"/>
      <img src={ImgBoard} className="board" alt="Deception: Murder in Hong Kong Online"/>
    </div>
  )
}

export default Logo;