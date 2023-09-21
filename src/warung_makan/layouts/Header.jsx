import { Container, Nav, Navbar } from "react-bootstrap";
import headerImg from '../../assets/img/warung_makan/header.jpg';
import MyButton from "../components/MyButton";
import './Header.css';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div>
        <Navbar expand="lg" data-bs-theme="dark" className="p-0 z-2" style={{ backgroundColor: '#202020' }}>
          <Container>
            <Navbar.Brand >
              <Link to='/warung-makan/beranda' className="fw-medium fs-4 text-uppercase text-white text-decoration-none">RM.Sepuasnya</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-white">
              <Nav >
                <Nav.Link>
                  <Link to='/warung-makan/beranda' className="text-white mx-3 text-decoration-none">Beranda</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/warung-makan/pesan' className="text-white mx-3 text-decoration-none">Pesan</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/warung-makan/kontak-kami' className="text-white mx-3 text-decoration-none">Kontak Kami</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="position-relative z-1 mt-n-100 ">
          <img src={headerImg} alt="Gambar Makanan" className="img-width" style={{ height: props.imgHeight }} />
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center mt-5 max-width">
            <h1 className="text-uppercase fw-semibold mb-3" style={{ fontSize: '40px' }}>{props.judulHeader}</h1>
            <div className="line-header mb-3"></div>
            <p className="pb-3">{props.paragrafHeader}</p>
            <div className="mt-5" style={{ display: props.displayButton }}>
              <MyButton href='#pesanSekarang' namaButton='Pesan sekarang' />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Header;