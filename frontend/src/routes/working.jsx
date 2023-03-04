import Container from "../components/Container";
import Axios from "axios";
import rudransh from "../img/rudransh.png"
import chayan from "../img/chayan.png"
import kartik from "../img/Kartik.png"
import arjun from "../img/Arjun.png"
import "../../src/index.css"
import arc from "../img/arc.png"
<script src="https://kit.fontawesome.com/b972bf4b3e.js" crossorigin="anonymous"></script>
const Working = () => {
  return (
    <div data-aos="fade-left">
      <Container fluid>
        <div className="total-about">
          <div className="about-heading">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-300">
          Team BitLock
          </h1>
            <div className="about-card-container">
              <div className="about-card">
                <img id="dev"
                  src={rudransh}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
                <h4 id="name">Rudransh Bansal</h4>
                <p> NLP Expert /ML DEV</p>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/rudransh-bansal/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                  </a>
                   <a href="https://github.com/rudranshbansal" target="_blank">
                      <i className="fab fa-github"></i>
                      </a>
                    </div>
              </div>

              <div className="about-card">
                <img id="dev"
                  src={kartik}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
                <h4 id="name">Kartik Srivastava</h4>
                <p>ML Developer</p>
              </div>

              <div className="about-card">
                <img id="dev"
                  src={chayan}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
                <h4 id="name">Chayan Sinha</h4>
                <p> Frontend Developer</p>
              </div>
              
              <div className="about-card">
                <img id="dev"
                  src={arjun}
                  style={{ width: "200px", height: "200px" }}
                  alt=""
                />
                <h4 id="name">Arjun Dhawan</h4>
                <p> Backend Core Engineer</p>
              </div>
            </div>
          </div>
        </div>
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-300">
          OUR PROJECT
          </h3>
          <br></br>
          <b>
          <ul>
            <li>1.    The project involves dynamic forecasting of AQI (Air Quality Index) and temperature data, which implies that the predictions are updated in real-time as new data becomes available.</li>
            <li>2.    The team has performed exploratory data analysis (EDA) and various statistical analyses, and created visualizations to demonstrate the effectiveness and scalability of their predictions. This suggests that the team has taken a rigorous and data-driven approach to their project.</li>
            <li>3.    Visualization is mentioned as a separate point, which could mean that the team has created compelling and informative visualizations to communicate their findings to stakeholders. </li>
            <li>4.    The team has applied several different models to their data, including SARIMAX, XGBOOST, and SeasonalETS. This suggests that they have experimented with different modeling techniques to find the most accurate and robust approach.</li>
          
          </ul>
          </b>
          <br></br>
          <hr></hr>
          <br></br>
          <img src={arc} width="2000px" height="2000px"></img>
          <hr></hr>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-300">
          STARTUP PLAN
          </h3>
          <br></br>
          <b>
          <ul>
            <li>1.    The project involves dynamic forecasting of AQI (Air Quality Index) and temperature data, which implies that the predictions are updated in real-time as new data becomes available.</li>
            <li>2.    The team has performed exploratory data analysis (EDA) and various statistical analyses, and created visualizations to demonstrate the effectiveness and scalability of their predictions. This suggests that the team has taken a rigorous and data-driven approach to their project.</li>
            <li>3.    Visualization is mentioned as a separate point, which could mean that the team has created compelling and informative visualizations to communicate their findings to stakeholders. </li>
            <li>4.    The team has applied several different models to their data, including SARIMAX, XGBOOST, and SeasonalETS. This suggests that they have experimented with different modeling techniques to find the most accurate and robust approach.</li>
          
          </ul>
          </b>
      </Container>
    </div>
  );
};

export default Working;


