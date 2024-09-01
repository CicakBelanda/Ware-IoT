import instagramImg from "../icons/instagram.svg";
import facebookImg from "../icons/facebook.svg";
import xImg from "../icons/twitter-x.svg";
import linkedinImg from "../icons/linkedin.svg";
import youtubeImg from "../icons/youtube.svg";

function Footer() {
  return (
    <footer>
      <div className="container-fluid text-center bg-dark text-light px-5 pt-4">
        <div className="row">
          <section className="col-5 border-top border-bottom border-end p-3">
            <h4>WareIoT</h4>
            <a href="https://www.instagram.com/" aria-label="instagram" className="px-2">
              <img src={instagramImg} alt="Instagram"></img>
            </a> 
            <a href="https://www.facebook.com/" aria-label="facebook" className="px-2">
              <img src={facebookImg} alt="Facebook"></img>
            </a>
            <a href="https://www.x.com/" aria-label="x" className="px-2">
              <img src={xImg} alt="X"></img>
            </a>
            <a href="https://www.linkedin.com/" aria-label="linkedin" className="px-2">
              <img src={linkedinImg} alt="LinkedIn"></img>
            </a>
            <a href="https://www.youtube.com/" aria-label="youtube" className="px-2">
              <img src={youtubeImg} alt="Youtube"></img>
            </a>
          </section>

          <section className="col border-top border-bottom border-start p-3">
            <h4>Newsletter</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dignissimos obcaecati, possimus doloremque veniam fugiat nihil molestiae aspernatur aliquid? Fugit alias eum provident quasi maxime dolorum tenetur, earum et quia!</p>
            <form className="row g-3 justify-content-center">
              <div className="col-auto">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email address here"></input>
              </div>
              <div className="col-auto">
                <button type="submit" class="btn btn-secondary mb-3">Subscribe Now</button>
              </div>
            </form>
          </section>
        </div>

        <div className="row">
          <section className="col-8 border-top border-bottom border-end d-flex justify-content-evenly p-3">
            <nav className="nav flex-column">
              <h5>Company</h5>
              <a href="#" className="link-light link-underline link-underline-opacity-0">About</a>
              <a href="#" className="link-light link-underline link-underline-opacity-0">Blog</a> 
              <a href="#" className="link-light link-underline link-underline-opacity-0">Properties</a> 
              <a href="#" className="link-light link-underline link-underline-opacity-0">Agents</a>
              <a href="#" className="link-light link-underline link-underline-opacity-0">Services</a> 
              <a href="#" className="link-light link-underline link-underline-opacity-0">Contact Us</a> 
            </nav>

            <nav className="nav flex-column">
              <h5>Services</h5>
              <a href="#" className="link-light link-underline link-underline-opacity-0">Lorem</a>
              <a href="#" className="link-light link-underline link-underline-opacity-0">ipsum</a>
              <a href="#" className="link-light link-underline link-underline-opacity-0">dolor</a>
              <a href="#" className="link-light link-underline link-underline-opacity-0">sit</a> 
              <a href="#" className="link-light link-underline link-underline-opacity-0">amet</a> 
              <a href="#" className="link-light link-underline link-underline-opacity-0">consectetur</a>
            </nav>
          
            <nav className="nav flex-column">
              <h5>Utility</h5>
              <a href="#" className="link-light link-underline link-underline-opacity-0">Style Guide</a>  
              <a href="#" className="link-light link-underline link-underline-opacity-0">Licences</a>  
              <a href="#" className="link-light link-underline link-underline-opacity-0">Changelog</a>  
              <a href="#" className="link-light link-underline link-underline-opacity-0">Password</a> 
              <a href="#" className="link-light link-underline link-underline-opacity-0">Lorem</a>
              <a href="#" className="link-light link-underline link-underline-opacity-0">ipsum</a>
            </nav>
          </section>

          <section className="col border-top border-bottom border-start p-3">
            <h5>Contact Us</h5>
            <nav className="nav flex-column">
              <a href="#" className="link-light link-underline link-underline-opacity-0">Jalan Lalapan Doa Ibu 26, Blimbing, Malang, Jawa Timur, Indonesia.</a>
              <a href="#" className="link-light link-underline link-underline-opacity-0">0812 3456 7890</a>
              <a href="#" className="link-light link-underline link-underline-opacity-0">stephen@wareiot.com</a>
            </nav>
          </section>
        </div>

        <section className="pt-3 pb-1">
          <p>&copy; Copyright 2024, Ware-IoT. All Rights Reserved.</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;