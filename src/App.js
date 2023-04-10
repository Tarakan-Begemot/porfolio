import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { MainPage, AboutPage, PortfolioPage, ContactPage } from './pages/index';
import '../src/styles/style.css';

function App() {
  const anchors = ['Home', 'About', 'Portfolio', 'Contact'];

  return (
    <div className="App">
      <ReactFullpage
        licenseKey={'gplv3-license'}
        scrollingSpeed={1000}
        navigation
        navigationTooltips={anchors}
        onLeave={(origin, destination, direction) => {
          console.log('onLeave event', { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <MainPage />
              </div>
              <div className="section">
                <AboutPage />
              </div>
              <div className="section">
                <PortfolioPage />
              </div>
              <div className="section">
                <ContactPage />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
