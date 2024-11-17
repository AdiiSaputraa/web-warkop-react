import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GoogleMap = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3967.0604512964433!2d106.21153907498959!3d-6.122566593864129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMDcnMjEuMiJTIDEwNsKwMTInNTAuOCJF!5e0!3m2!1sid!2sid!4v1731853322173!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Warkop Zero</h3>
            <div className="desc">
              <GoogleMap />
            </div>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none" to="#">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">0882-9954-8956</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none" to="#">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">franafebryan@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-5">Ikuti Kami</h5>
            <div className="social mt-3">
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/frnfebryn_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Adi Saputra @addictivee__</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
