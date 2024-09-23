import React, { useState } from 'react';
import '../css/contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);

  };

  return (
    <div>
      {/* Contact */}
      <section className="contact-us py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Contact us For More Information</h2>
              <p>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
              <p><strong>Email:</strong> <a href="mailto:stephen@wereiot.com">stephen@wereiot.com</a></p>
              <p><strong>Phone:</strong> +62 812-3456-7890</p>

              <div className="location">
                <h3>Location</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="location-item">
                      <p>Malang</p>
                      <p>Jalan Lalapan Doa Ibu 26, Blimbing</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="location-item">
                      <p>Jayapura</p>
                      <p>Jalan Lari Marathon 12, Bernard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card p-4">
                <h3 className="text-dark">Quick Contact</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-dark">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-dark">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label text-dark">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-dark">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Enter your message"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq py-5 bg-dark text-light">
        <div className="container">
            <h2>Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How to buy a cat?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How are you?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            I am a new human. How should I start?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Contact;
