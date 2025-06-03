import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="f-top">
        <select name="pages" id="pages-select">
          <option value="">welcome bonus Terms & Conditions</option>
        </select>
      </div>
      <div className="f-middle">
        <div className="f-middle-wrap">
          <div className="logo-wrapper logo-colorful">
            <img
              src="/pp-fe-test/assets/footer/icon-1.svg"
              alt="Logo 1"
              className="logo"
            />
            <div className="l-text">
              <p className="lt-title">Official Regional Partner</p>
              <p className="lt-year">2020 - 2024</p>
            </div>
          </div>
          <div className="non-colorful-logos">
            <div className="logo-wrapper">
              <img
                src="/pp-fe-test/assets/footer/icon-2.svg"
                alt="Logo 2"
                className="logo"
              />
              <div className="l-text">
                <p className="lt-title">AFC Bournemouth</p>
                <p className="lt-year">2016 - 2020</p>
              </div>
            </div>
            <div className="logo-wrapper">
              <img
                src="/pp-fe-test/assets/footer/icon-3.svg"
                alt="Logo 3"
                className="logo"
              />
              <div className="l-text">
                <p className="lt-title">Crystal Palace</p>
                <p className="lt-year">2015 - 2017</p>
              </div>
            </div>
            <div className="logo-wrapper">
              <img
                src="/pp-fe-test/assets/footer/icon-4.svg"
                alt="Logo 4"
                className="logo"
              />
              <div className="l-text">
                <p className="lt-title">Manchester City</p>
                <p className="lt-year">2011 - 2012</p>
              </div>
            </div>
            <div className="logo-wrapper">
              <img
                src="/pp-fe-test/assets/footer/icon-5.svg"
                alt="Logo 5"
                className="logo"
              />
              <div className="l-text">
                <p className="lt-title">Tottemham Hotspurs</p>
                <p className="lt-year">2006 - 2010</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <div className="fb-head">
          <p className="commitment">
            We are committed to supporting <a href="#">Responsible Gambling</a>
          </p>
          <div className="logos">
            <img src="/pp-fe-test/assets/footer/logo-1.svg" alt="Logo 1" />
            <img src="/pp-fe-test/assets/footer/logo-2.svg" alt="Logo 2" />
            <img src="/pp-fe-test/assets/footer/logo-3.svg" alt="Logo 3" />
            <img src="/pp-fe-test/assets/footer/logo-4.svg" alt="Logo 4" />
            <p>LoremLogo.com 2025</p>
          </div>
        </div>
        <div className="fb-foot">
          <p>
            Terms and Conditions apply. Please refer to the promotions page for
            more details.
          </p>
          <p>
            LoremLogo.com uses certain browser cookies to ensure you receive the
            best gaming experience. By accessing and continuing to use the site
            you accept the use of these cookies. For information on our use of
            cookies and how to prevent them please refer to{" "}
            <a href="#">terms of use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
