import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Col, Row } from 'react-bootstrap';

require('./Footer.css');

function Footer() {
  return (
    <>
      <div className='px-5' style={{ backgroundColor: '#2B2B2B' }}>
        <Row className='px-3 justify-content-between align-items-center py-2' >
          <Col xs={12} md={6} lg={3}>
            <div className='text-center text-md-center'>
              <span className="fw-medium fs-4 text-uppercase text-white">RM.Sepuasnya</span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <ul className="list-group list-group-horizontal d-flex justify-content-center fw-medium">
              <li className="list-group-item border-0 rounded-0 bg-transparent d-inline-block">
                <span className='text-white'>Beranda</span>
              </li>
              <li className="list-group-item border-0 bg-transparent d-inline-block">
                <span className='text-white'>Pesan</span>
              </li>
              <li className="list-group-item border-0 rounded-0 bg-transparent d-inline-block">
                <span className='text-white'>Kontak Kami</span>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={12} lg={3}>
            <div className='text-center text-md-center'>
              <span className='text-white mx-2 px-1'>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
              <span className='text-white mx-2 px-1'>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span className='text-white mx-2 px-1'>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              <span className='text-white mx-2 px-1'>
                <FontAwesomeIcon icon={faTiktok} />
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className='text-center py-1' style={{ backgroundColor: '#202020' }}>
        <span className='text-white fw-regular' style={{ fontSize: '12px' }}>&copy; 2023 Warung Makan Sepuasnya</span>
      </div>
    </>
  );
}

export default Footer;