import CV from '../dowload/cv_aa.pdf';

export const AboutPage = () => {
  return (
    <div className="about-bg">
      <div className="container d-lg-flex about-block">
        <div className="col-lg-6 col-sm-12 mx-5">
          <h1 className="text-center" style={{ paddingTop: '50px' }}>
            About me
          </h1>
          <p style={{ fontSize: '1.2rem', textAlign: 'justify' }}>
            I am currently prioritizing the development and implementation of various innovative
            ideas, utilizing my diverse skill set to positively impact the world around me. I enjoy
            experimenting with and creating unconventional approaches and algorithms.
            <br /> Some of my key personal qualities include responsibility, discipline,
            resourcefulness, honesty, the ability to work effectively both in a team and
            independently, as well as a talent for thinking outside the box.
          </p>
          <div className="text-center">
            <a href={CV} download="CV_Alex_A.pdf" className="btn btn-primary btn-lg shadow-lg">
              Download CV
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-center" style={{ paddingTop: '50px' }}>
            Skills
          </h1>
          <div
            className="border rounded d-flex flex-wrap col-lg-12 col-sm-12 justify-content-between p-2 text-center"
            style={{ background: 'white' }}
          >
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i className="devicon-html5-plain-wordmark colored" style={{ fontSize: '4rem' }}></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i className="devicon-css3-plain-wordmark colored" style={{ fontSize: '4rem' }}></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i className="devicon-javascript-plain colored" style={{ fontSize: '4rem' }}></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i
                className="devicon-react-original-wordmark colored"
                style={{ fontSize: '4rem' }}
              ></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i
                className="devicon-bootstrap-plain-wordmark colored"
                style={{ fontSize: '4rem' }}
              ></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i className="devicon-materialui-plain colored" style={{ fontSize: '4rem' }}></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i
                className="devicon-mongodb-plain-wordmark colored"
                style={{ fontSize: '4rem' }}
              ></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i
                className="devicon-tailwindcss-original-wordmark colored"
                style={{ fontSize: '4rem' }}
              ></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i
                className="devicon-wordpress-plain-wordmark colored"
                style={{ fontSize: '4rem' }}
              ></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i
                className="devicon-express-original-wordmark colored"
                style={{ fontSize: '4rem' }}
              ></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i
                className="devicon-github-original-wordmark colored"
                style={{ fontSize: '4rem' }}
              ></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i className="devicon-git-plain-wordmark colored" style={{ fontSize: '4rem' }}></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i className="devicon-python-plain-wordmark colored" style={{ fontSize: '4rem' }}></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i className="devicon-nextjs-plain-wordmark colored" style={{ fontSize: '4rem' }}></i>
            </div>
            <div className="stack-icon border rounded p-1 shadow-lg">
              <i className="devicon-nodejs-plain-wordmark" style={{ fontSize: '4rem' }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
