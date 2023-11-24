import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logobgclear.png';
import whitelogo from '../../assets/whitelogo.png';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isScrolled: false,
      submenuOpen: { resources: false, community: false, involved: false },
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolledLogo = document.querySelector('.scrolled-logo');
    if (scrolledLogo) {
      scrolledLogo.style.opacity = window.scrollY > 0 ? '1' : '0';
    }
    this.setState({ isScrolled: window.scrollY > 0 });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  handleMenuAndLinkClick = () => {
    this.closeMenu();
    this.handleLinkClick();
  };

  handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  toggleSubmenu = (menuName) => {
    this.setState(prevState => ({
      submenuOpen: {
        ...prevState.submenuOpen,
        [menuName]: !prevState.submenuOpen[menuName]
      }
    }));
  };

  render() {
    const { isMenuOpen, isScrolled, submenuOpen } = this.state;
    return (
      <div className='main'> 
      <div className="header-section">
        <div class="header-content">
            <div className="dte-code">File. No. : 1380/2023-19</div>
            <div className="social-media">
                Follow us on:
                <a href="https://facebook.com/Heedsfoundation/" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="https://instagram.com/heedsfoundation?igshid=ZDc4ODBmNjlmNQ==" className="instagram"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/heeds-foundation/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="https://youtube.com/heedsfoundation" className="youtube"><i className="fa fa-youtube"></i></a>
            </div>
            <div class="erp-info">
                <span className="contact"><a href="callto:918788411441"> 📞 +91 8668353016 </a></span>
                <span className="email"><a href="mailto:heedsfoundation.ngo@gmail.com"> ✉️ heedsfoundation.ngo@gmail.com </a> </span>
            </div>
        </div>
        </div>
      <nav className={`navbar-container ${isMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`} 
      onMouseEnter={this.handleLogoMouseEnter}
      onMouseLeave={this.handleLogoMouseLeave}>
        <div className="navbar-left">
            <Link className="navbar-brand" to="/">
              <img src={whitelogo} alt="Default Logo" className="default-logo" />
              <img src={logo} alt="Scrolled Logo" className="scrolled-logo" style={{ opacity: 0 }} />
            </Link>
          </div>
        <div className={`navbar-mid ${isScrolled ? 'scrolled' : ''}`} >
          <button className={`menu-button ${isMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={this.toggleMenu}>
            Menu
          </button>
          <ul className={`navbar-list ${isMenuOpen ? 'mobile-menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
                    <li className="dropdown">
                        <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}>
                        <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`}  >  Resources</Link>
                        </button>
                        <div className={`dropdown-content ${submenuOpen.resources ? 'open' : ''}`}>
                        <a className={`nav-link ${isScrolled ? 'scrolled' : ''}`} href="https://heedsfoundation.blogspot.com/" target="_blank" rel="noopener noreferrer" onClick={this.handleMenuAndLinkClick}>
  Blog
</a>

                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to='/about#section-reports' onClick={this.handleMenuAndLinkClick}>Reports</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}>
                        <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}> Community</Link>
                        </button>
                        <div className="dropdown-content">
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/impact" onClick={this.handleMenuAndLinkClick}>Impact</Link>
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/newsletter" onClick={this.handleMenuAndLinkClick}>Newsletter</Link>
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/successstory" onClick={this.handleMenuAndLinkClick}>Success Story</Link>
                        </div>
                    </li>
                    <li className="dropdown">
                        <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}>
                        <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleLinkClick}> Get Involved</Link>
                        </button>
                        <div className="dropdown-content">
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/internship-jobs" onClick={this.handleMenuAndLinkClick}>Internship / Jobs</Link>
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/open-positions" onClick={this.handleMenuAndLinkClick}>Carrers</Link>
                            <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/contact" onClick={this.handleMenuAndLinkClick}>Contact</Link>
                        </div>
                    </li>
            <li>
              <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleMenuAndLinkClick}>
                <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/about" onClick={this.handleMenuAndLinkClick}>
                  About
                </Link>
              </button>
            </li>
            <li>
              <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleMenuAndLinkClick}>
                <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/join" onClick={this.handleMenuAndLinkClick}>
                  Join Us
                </Link>
              </button>
            </li>
            <li>
              <button className={`nav-item ${isScrolled ? 'scrolled' : ''}`} onClick={this.handleMenuAndLinkClick}>
                <Link className={`nav-link ${isScrolled ? 'scrolled' : ''}`} to="/contact" onClick={this.handleMenuAndLinkClick}>
                  Contact
                </Link>
              </button>
            </li>
            
          </ul>
        </div>
        <div className={`navbar-right ${isScrolled ? 'scrolled' : ''}`}>
          <ul className="nav-right-button">
            <li>
            <a href='https://unstop.com/o/F819BNL?lb=nsYyVhWp'><button className='Donate-btn-nav' >Donate</button></a>
            </li>
            
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;
