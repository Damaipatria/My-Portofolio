import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { MapContainer, TileLayer } from 'react-leaflet'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as farEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import './index.css'
import 'leaflet/dist/leaflet.css';
import { useEffect } from "react";


function KontakKami(props) {
  useEffect(() => {
    document.title = props.title
  }, [props.title])

  return (
    <>
      <Header judulHeader={'Kontak Kami'} paragrafHeader={'Tanyakan pada kami mengenai ketersedian reservasi dan layanan Jasa Boga (Catering) Kami melalui kontak kami berikut ini. '} imgHeight='335px' displayButton='none' />

      <Container className="mt-5 mb-4">
        <Row className="justify-content-start align-items-center mb-3">
          <Col lg={4} md={6} sm={12} className="mb-3">
            <Card className="px-3 py-2 border-0 shadow rounded-1" style={{ height: "95px" }}>
              <Row className="justify-content-center align-items-top">
                <Col sm={2} xs={2} className="p-0">
                  <div className="text-center fs-3 text-dark-gray">
                    <i><FontAwesomeIcon icon={faLocationDot} /></i>
                  </div>
                </Col>
                <Col sm={9} xs={9} className="p-0">
                  <p className="mb-0 fs-5 fw-bold text-dark-gray">
                    Alamat
                  </p>
                  <p className="mb-0 fw-medium text-gray">
                    JL. Rumah Makan Sepuasnya No.01, Jakarta Pusat.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3">
            <Card className="px-3 py-2 border-0 shadow rounded-1" style={{ height: "95px" }}>
              <Row className="justify-content-center align-items-top">
                <Col sm={2} xs={2} className="p-0">
                  <div className="text-center fs-3 text-dark-gray">
                    <i><FontAwesomeIcon icon={farEnvelope} /></i>
                  </div>
                </Col>
                <Col sm={9} xs={9} className="p-0">
                  <p className="mb-0 fs-5 fw-bold text-dark-gray">
                    Email
                  </p>
                  <p className="mb-0 fw-medium text-gray">
                    rumahmakansepuasnya.support@gmail.com
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3">
            <Card className="px-3 py-2 border-0 shadow rounded-1" style={{ height: "95px" }}>
              <Row className="justify-content-center align-items-top">
                <Col sm={2} xs={2} className="p-0">
                  <div className="text-center fs-3 text-dark-gray">
                    <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                  </div>
                </Col>
                <Col sm={9} xs={9} className="p-0">
                  <p className="mb-0 fs-5 fw-bold text-dark-gray">
                    Whatsapp
                  </p>
                  <p className="mb-0 fw-medium text-gray">
                    +62-854211990
                    <br />
                    +62-854313310
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="">
          <Col lg={6} className="mb-3">
            <Card className="p-1 shadow rounded-1 border-0" style={{ Height: '395px' }}>
              <Card.Title className="px-3 mt-3 mb-2 fw-medium fs-4 text-gray">
                Kirimkan pesanmu disini
              </Card.Title>
              <Form className="px-3">
                <Form.Group className="mb-3">
                  <Form.Label className="ms-1 text-dark-gray">Nama</Form.Label>
                  <Form.Control type="text" placeholder="Nama" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="ms-1 text-dark-gray">Email</Form.Label>
                  <Form.Control type="email" placeholder="email@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="ms-1 text-dark-gray">Pesan</Form.Label>
                  <Form.Control as="textarea" placeholder="Pesan" />
                </Form.Group>
                <button type="submit" className="border-0 rounded-1 btn-dark-red mb-3">Kirim</button>
              </Form>
            </Card>
          </Col>
          <Col lg={6} className="mb-3">
            <Card className="p-1 shadow rounded-1 border-0" style={{ height: '395px' }}>
              <MapContainer style={{ height: '100%' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </Card>
          </Col>
        </Row>
      </Container >

      <Footer />
    </>
  );
}

export default KontakKami;