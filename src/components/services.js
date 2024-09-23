import React from 'react';
import '../css/services.css';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5">
        <div className="container">
          <h1 className="display-4 fw-bold shadow">We're Leading Land Market</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section py-5 bg-dark text-light">
        <div className="container text-center">
          <h2 className="mb-4">Buying & Selling Property In An Easy Way</h2>
          <p className="lead">
            Distinctively re-engineer revolutionary meta-services and premium content.
            We've gathered some beautiful images of the place here. If you would like to see more, get in touch.
          </p>
        </div>
      </section>

      {/* Focus Section */}
      <section className="focus-section py-5">
        <div className="container text-center">
          <h2>Our Main Focus</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Planning Stage</h5>
                  <p className="card-text">High-level overviews, approaches, and value propositions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Development</h5>
                  <p className="card-text">Holistic and organically grown overviews for better living.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">New Way of Living</h5>
                  <p className="card-text">Revolutionizing real estate with modern approaches.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <div className="container text-center">
          <h2>See How We Can Help</h2>
          <div className="row">
            <div className="col-lg-2 col-md-4 mb-4">
              <div className="icon-box shadow-sm p-4">
                <i className="bi bi-house"></i>
                <h5>Rent a Home</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <div className="icon-box shadow-sm p-4">
                <i className="bi bi-house-door"></i>
                <h5>Sell Home</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <div className="icon-box shadow-sm p-4">
                <i className="bi bi-house-fill"></i>
                <h5>Buy a Home</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <div className="icon-box shadow-sm p-4">
                <i className="bi bi-person"></i>
                <h5>Experienced Agent</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4">
              <div className="icon-box shadow-sm p-4">
                <i className="bi bi-telephone"></i>
                <h5>Member Support</h5>
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-4">More Property</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
