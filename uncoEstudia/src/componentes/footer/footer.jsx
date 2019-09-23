import React from 'react';
// import logo from '../../logo.svg'; 
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
        <footer className="footer-classic-dark bg-extra-dark-gray">
            <div className="bg-dark-footer padding-50px-tb sm-padding-30px-tb">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-5 text-center alt-font sm-margin-15px-bottom">
                            Construye tu camino
                        </div>
                        <div className="col-lg-4 col-md-2 text-center sm-margin-10px-bottom">
                            <a href="index.html">UncoEDUCA</a>
                        </div>
                        <div className="col-lg-4 col-md-5 text-center">
                            <span className="alt-font margin-20px-right">On social networks</span>
                            <div className="social-icon-style-8 d-inline-block vertical-align-middle">
                                <ul className="small-icon mb-0">
                                    <li><a className="facebook text-white-2" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                    <li><a className="twitter text-white-2" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                    <li><a className="google text-white-2" href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a></li>
                                    <li><a className="instagram text-white-2" href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram no-margin-right" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;