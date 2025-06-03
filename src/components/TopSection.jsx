import "./TopSection.css";

const TopSection = () => {
  return (
    <section className="top-section">
      <div className="ts-top">
        <img
          style={{ zIndex: 9 }}
          src="/pp-fe-test/assets/logoipsum.svg"
          alt="logoipsum"
        />
        <div className="intro">
          <h2>celebrate SPORTSbook 300% bonus</h2>
          <h4>Welcome to World Cup</h4>
          <h4>get special bonus of 300%</h4>
          <h4>deposit 100 get 300</h4>
          <h4>easy deposit, fast withdrawal, guarateed pay</h4>
          <button>CLAIM NOW</button>
          <p>terms & conditions</p>
        </div>
      </div>
      <div className="ts-bottom">
        <div className="step">
          <img src="/pp-fe-test/assets/user.svg" alt="User icon" />
          <div className="step-info">
            <h5>JOIN US</h5>
            <p>It’s quick and easy</p>
          </div>
        </div>
        <img className="arrow" src="/pp-fe-test/assets/arrow.svg" alt="Arrow" />
        <div className="step">
          <img src="/pp-fe-test/assets/deposit.svg" alt="Deposit icon" />
          <div className="step-info">
            <h5>Deposit</h5>
            <p>Secure with 2-5min deposit time!</p>
          </div>
        </div>
        <img className="arrow" src="/pp-fe-test/assets/arrow.svg" alt="Arrow" />
        <div className="step">
          <img src="/pp-fe-test/assets/play.svg" alt="User icon" />
          <div className="step-info">
            <h5>PLay</h5>
            <p>Start your winning journey!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
