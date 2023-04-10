import React from 'react';
import Avatar from '../images/avatar.jpeg';

export const MainPage = () => {
  return (
    <div
      className="text-center bg-gradient"
      style={{
        minHeight: '100vh',
        background: '#eee',
        opacity: 1,
      }}
    >
      <div className="container d-lg-inline-flex  main-block">
        <div className="col main-text">
          <h1>Hello, I'm Alex</h1>
          <p
            className="developer"
            style={{ fontSize: '4rem', fontWeight: 700, lineHeight: '4rem' }}
          >
            Full-Stack <br /> Developer
          </p>
        </div>
        <div className="col">
          <img className="rounded avatar shadow-lg" src={Avatar} alt="" />
        </div>
      </div>
    </div>
  );
};
