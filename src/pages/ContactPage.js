import React from 'react';

export const ContactPage = () => {
  return (
    <div className="content contact-page">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="container d-lg-flex align-items-center h-100 flex-wrap text-center mt-5">
        <a
          href="https://www.linkedin.com/in/alexander-afanasjev/"
          target={'_blank'}
          rel="noreferrer"
          className="saturn linked"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            alt="LinkedIn"
            className="icons m-5"
          />
        </a>
        <a href="mailto:tarakan.begemot@gmail.com?subject=Hello%20Alex" className="saturn mail">
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888853.png"
            alt="Mail"
            className="icons m-5"
          />
        </a>
        <a href="https://github.com/Tarakan-Begemot" className="saturn github">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
            alt="GitHub"
            className="icons m-5"
          />
        </a>
      </div>
    </div>
  );
};
