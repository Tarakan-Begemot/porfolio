import React from 'react';
import { webSites } from '../data/webSites';

export const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      {webSites
        .sort((a, b) => 0.5 - Math.random())
        .map((site, index) => (
          <div className="slide">
            <div className="container p-2 portfolio-block d-lg-flex">
              <div className="col-lg-6 col-sm-12 px-5 py-5">
                <img src={site.img} alt={site.name} className="rounded shadow-sm w-100" />
              </div>
              <div className="discription col-lg-6 col-sm-12 align-self-center px-5">
                <div className="col-col w-25 m-2 mx-auto"></div>
                <div className="col-col w-50 m-2 mx-auto"></div>
                <div className="col-col w-75 m-2 mx-auto"></div>
                <div className="col-col w-100 m-2 mx-auto"></div>
                <div className="d-flex justify-content-between w-100">
                  <p>Name:</p>
                  <p>{site.description.name}</p>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <p>Role:</p>
                  <p>{site.description.role}</p>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <p>Stack:</p>
                  <p style={{ marginLeft: '30px', textAlign: 'right' }}>{site.description.stack}</p>
                </div>
                <div className="d-flex justify-content-between w-100 align-right">
                  <p>Info:</p>
                  <p style={{ marginLeft: '30px', textAlign: 'right' }}>{site.description.more}</p>
                </div>

                <div className="d-flex justify-content-between w-100 align-right site-link">
                  <p>Link:</p>
                  <p style={{ marginLeft: '30px', textAlign: 'right' }}>
                    <a href={site.url}>{site.url.split('https://')}</a>
                  </p>
                </div>
                <div className="col-col w-100 m-2 mx-auto"></div>
                <div className="col-col w-75 m-2 mx-auto"></div>
                <div className="col-col w-50 m-2 mx-auto"></div>
                <div className="col-col w-25 m-2 mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
    // <h1>Hi</h1>
  );
};
