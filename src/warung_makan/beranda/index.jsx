import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTowerBroadcast, faGuitar, faSmoking, faSnowman } from "@fortawesome/free-solid-svg-icons";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer"
import MyButton from "../components/MyButton";
import RatingStars from "../components/RatingStars";
import { useEffect } from "react";
require('./index.css');

const pelayananKami = [
  {
    icon: faTowerBroadcast,
    judul: 'Free Wifi',
    isi: 'Kami meyediakan koneksi gratis untuk setiap pelangga kami, dengan password dapat dillihat pada nota pembayaran.'
  },
  {
    icon: faGuitar,
    judul: 'Live Music',
    isi: 'Kami meyediakan hiburan gratis untuk setiap pelangga kami, yaitu live music yang dilaksanakan setiap hari.'
  },
  {
    icon: faSmoking,
    judul: 'Smoking Area',
    isi: 'Kami meyediakan tempat khusus untuk merokok demi kenyamanan bersama.'
  },
  {
    icon: faSnowman,
    judul: 'Kids Playground',
    isi: 'Kami meyediakan tempat bermain bagi anak untuk  kenyaman bagi pelanggan yang membawa anak.'
  }
]

const makananTerbaik = [
  {
    namaMakanan: 'Hamburger',
    deskripsi: 'Burger daging sapi dengan bumbu spesial dan kentang goreng.',
    rating: 5.0,
    img: 'hamburger'
  },
  {
    namaMakanan: 'Pizza',
    deskripsi: 'Pizza daging sapi dengan saus tomat, keju, dan berbagai bahan - bahan lainnya.',
    rating: 4.5,
    img: 'pizza'
  },
  {
    namaMakanan: 'Hot Dog',
    deskripsi: 'Sosis daging sapi dengan suas spesial dan acar.',
    rating: 4.0,
    img: 'hotdog'
  }
]

function BerandaWarungMakan() {
  let judulHeader = "warung makan sepuasnya"
  let paragrafHeader = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto exercitationem similique corporis, numquam vel ut alias incidunt molestias. Nam itaque repellendus quam laudantium dolorem ullam mollitia porro laboriosam corporis."

  useEffect(() => {
    document.title = 'WM Sepuasnya | Beranda'
  }, [])

  return (
    <>
      <Header judulHeader={judulHeader} paragrafHeader={paragrafHeader} imgHeight='620px' displayButton='block' />

      <Container fluid>
        <div>
          <div className="text-center mt-4">
            <h2 className="fw-bold m-0 text-dark-gray">Pelayanan Kami</h2>
            <div className="line-red my-2" ></div>
            <p className="text-gray mb-4" style={{ lineHeight: '18px' }}>Kami meyediakan pelayanan tambah demi keyamanan pada <br /> pelanggan saat berkunjung.</p>
          </div>
          <div className="px-xl-5 pb-2">
            <Row className="justify-content-start">
              {pelayananKami.map((item, index) => {
                return (
                  <Col xl={3} lg={4} md={6} className="mb-3" key={index}>
                    <Card className="border-0 shadow text-center" style={{ height: '240px' }}>
                      <div className="mt-4">
                        <FontAwesomeIcon icon={item.icon} size="3x" className="text-gray" />
                      </div>
                      <Card.Body>
                        <Card.Title className="fs-4 fw-semibold text-dark-red mb-1">{item.judul}</Card.Title>
                        <Card.Text className="text-gray">{item.isi}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </div>
        </div>

        <div>
          <div className="mt-2 mb-4">
            <Row className="bg-light justify-content-center align-items-center pb-4">
              <Col xl={5} lg={5} md={6}>
                <div className="text-center mb-md-0 mb-3">
                  <span>
                    <img src={require("../../assets/img/warung_makan/grocery.jpg")} alt="gocery" className="img-custom object-fit-cover rounded-2" />
                  </span>
                </div>
              </Col>
              <Col xl={5} lg={5} md={6}>
                <h1 className="text-dark-red mb-3 fw-semibold text-md-start text-center">Dibuat dengan <br />Bahan Berkualitas</h1>
                <div className="d-flex justify-content-md-start justify-content-center mb-3">
                  <div className="line-yellow"></div>
                </div>
                <p className="text-dark-gray mb-md-5 mb-3 text-md-start text-center">Setiap makanan yang disajikan dibuat dengan bahan - bahan pilihan dan berkualitas, untuk menghasilkan makanan yang terbaik bagi pelanggan kami.</p>
                <div className="pt-4 text-md-start text-center">
                  <MyButton herf='#pesanSekarang' namaButton='Pesan sekarang' />
                </div>
              </Col>
            </Row>
            <Row className="bg-light justify-content-center align-items-center">
              <Col xl={5} lg={5} md={6} className="text-md-end text-center">
                <h1 className="text-dark-red mb-3 fw-semibold">Dibuat dengan <br /> Koki Berpengalaman</h1>
                <div className="d-flex justify-content-md-end justify-content-center mb-3">
                  <div className="line-yellow"></div>
                </div>
                <p className="text-dark-gray mb-md-5 mb-3">Setiap makanan yang disajikan dibuat oleh Chef berpengalaman, untuk menghasilkan makanan yang terbaik bagi pelanggan kami.</p>
                <div className="pt-4">
                  <MyButton herf='#pesanSekarang' namaButton='Pesan sekarang' />
                </div>
              </Col>
              <Col xl={5} lg={5} md={6} className="text-end mt-md-0 mt-3">
                <div className="text-center">
                  <span>
                    <img src={require("../../assets/img/warung_makan/chef.jpg")} alt="gocery" className="img-custom object-fit-cover rounded-2" />
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div>
          <div className="text-center mt-4">
            <h2 className="fw-bold m-0 text-dark-gray">Makan Terbaik kami</h2>
            <div className="line-red my-2" ></div>
            <p className="text-gray mb-4" style={{ lineHeight: '18px' }}>Kami selalu menyedikan makanan yang berkualitas bagi  <br /> pelanggan kami.</p>
            <div className="">
              <Row className="justify-content-lg-center justify-content-start align-items-center px-4">
                {makananTerbaik.map((item, index) => {
                  return (
                    <Col sm={6} md={6} lg={4} xl={3} key={index} className="mb-3">
                      <Card className="border-0 shadow m-auto">
                        <div className="p-2">
                          <img src={require(`../../assets/img/warung_makan/menu/${item.img}.jpg`)} className="img-fluid rounded-2" alt="" />
                        </div>
                        <Card.Body className="pt-0">
                          <Card.Title>
                            <Row className="align-items-center">
                              <Col className="pe-1">
                                <h4 className="m-0 text-start text-dark-gray fw-bold">{item.namaMakanan}</h4>
                              </Col>
                              <Col className="ps-1">
                                <RatingStars rating={item.rating} />
                              </Col>
                            </Row>
                          </Card.Title>
                          <Card.Text className="text-start text-gray" style={{ height: '65px' }}>
                            {item.deskripsi}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </div>
            <div className="mb-4 mt-2">
              <MyButton herf='#pesanSekarang' namaButton='Pesan sekarang' />
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default BerandaWarungMakan;