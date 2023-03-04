import Container from "../components/Container";
import Axios from "axios";
import rudransh from "../img/rudransh.png"
import chayan from "../img/chayan.png"
import kartik from "../img/manik.png"
import arjun from "../img/Arjun.png"

const Working = () => {
  return (
            <div data-aos="fade-left">
                  <Container fluid>
                    <div className="total-about">
                      <div className="about-heading">
                        <h6 className="section-heading">Our Team</h6>
                      </div>
                      <div className="about-card">
                        <div>
                          <img id="dev"
                            src={rudransh}
                            style={{ width: "200px", height: "200px" }}
                            alt=""
                          />
                          <h4 id="name">Rudransh Bansal</h4>
                          <p>Expertise in:
                              Data Analysis,
                              Nature Language Processing</p>
                        </div>
                        </div>
                        </div>
                  
                  </Container>
                  </div>
  );
};

export default Working;
