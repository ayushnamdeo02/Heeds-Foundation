import React, { Component } from 'react';
import './home.css';
import videohome from '../../assets/video/videohome.webm';
import mobilevid from '../../assets/video/Videomobile.webm'
import { yourContent } from '../about/constants';

class Home extends Component {
  state = {
    numbers: [0, 0, 0],
    windowWidth: window.innerWidth,
  };

  componentDidMount() {
    this.startCounting();
    window.addEventListener('resize', this.handleResize);
  }

  startCounting() {
    const targetNumbers = [1123, 50, 5]; // Set your target numbers here

    targetNumbers.forEach((target, index) => {
      const interval = setInterval(() => {
        this.setState((prevState) => {
          const newNumbers = [...prevState.numbers];
          if (newNumbers[index] < target) {
            newNumbers[index]++;
          }
          return { numbers: newNumbers };
        });
      }, 20);

      setTimeout(() => {
        clearInterval(interval);
      }, 1000000); // Adjust the duration of the animation (in milliseconds)
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };
  render() {
    const { windowWidth } = this.state;
  const mobileVideoSrc = mobilevid;
    return (
      <div className='home-container'>
         <div className='home-header-video'>
          {windowWidth <= 480 ? (
            <video width='100%' autoPlay loop muted playsInline>
              <source src={mobileVideoSrc} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <video width='100%' autoPlay loop muted playsInline>
              <source src={videohome} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className='home-content'>
          <div className='ournumber'>
            <h2 className='ournumber-headling'>OUR NUMBERS</h2>
            <div class="line"></div>
            <div className="counting-container">
              {this.state.numbers.map((number, index) => (
                <div className="counting-box" key={index}>
                  <div className="number">{number}+</div>
                  <div className="label">
                    {index === 0
                      ? 'We reached'
                      : index === 1
                      ? 'Our Volunteers count'
                      : 'Our partners count'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='principles-section'>
          <h3 className='principles-heading'>OUR PRINCIPLES</h3>
          <div class="line"></div>
          <div className='principles-data'>
          {yourContent.map((item, index) => (
        <div className="principles-card" key={index}>
          <h3 className="principles-card-heading">{item.title}</h3>
          <p className="principles-card-details">{item.description}</p>
        </div>
      ))}
          </div>
        </div>
        <iframe title='social' src="https://embedsocial.com/api/pro_hashtag/08e4178120426ba9c6e800a4dc389034d32c9da4" width="100%" height="650px" frameborder="0" marginheight="0" marginwidth="0"></iframe>
          <div className='involved'>
            <h3 className='involved-title'>How to Get Involved/Support Us</h3>
            <div className='line'></div>
            <div className='involved-grid'>
              <div className='involved-datai'>
                <h3>Donate</h3>
                </div>
                <div className='involved-data'>
                <p>Your donation can help us to promote education to underserved children. Your donation has the power to empower communities,education ,healthcare access, and sustainable development.</p>
                </div>
                <div className='involved-datai'>
                <h3>Volunteer</h3>
                </div>
                <div className='involved-data'>
                <p>Join our team of dedicated volunteers to help us make a difference in the lives of underserved children. Visit our website to learn more.</p>
                </div>
                <div className='involved-datai'>
                <h3>Spread the word</h3>
                </div>
                <div className='involved-data'>
                <p>Help us to raise awareness about the importance of education and the work that we do. Follow us on social media and share our posts with your network.</p>
                </div>
                </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Home;
