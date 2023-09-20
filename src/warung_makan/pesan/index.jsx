import { useEffect, useReducer, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBowlFood, faMugSaucer, faIceCream } from '@fortawesome/free-solid-svg-icons';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import RatingStars from "../components/RatingStars";
import Cart from './Cart';
import Menu from '../../assets/data/Menu';
import './index.css';

function reducer(pesanan, action) {
  switch (action.type) {
    case "ADD": {
      if (pesanan.some((data) => data.nama === action.nama)) {
        return pesanan.map((item) => {
          if (item.nama === action.nama) {
            return { ...item, jumlah: item.jumlah + 1 };
          }
          return item
        })
      } else {
        return [...pesanan, {
          nama: action.nama,
          harga: action.harga,
          img: action.img,
          jumlah: 1
        }]
      }
    }
    case "INCREMENT": {
      return pesanan.map((item) => {
        if (item.nama === action.nama) {
          return { ...item, jumlah: item.jumlah + 1 };
        }
        return item
      })
    }
    case "DECREMENT": {
      if (pesanan.some((data) => data.jumlah === 1)) {
        return pesanan.filter((item) => {
          return item.nama !== action.nama
        })
      } else {
        return pesanan.map((item) => {
          if (item.nama === action.nama) {
            return { ...item, jumlah: item.jumlah - 1 };
          }
          return item
        })
      }
    }
    default:
      return pesanan
  }
}

function Pesan() {

  const [filter, setFilter] = useState([])
  const [pesanan, dispatch] = useReducer(reducer, [])
  const [kategori, setKategori] = useState('semua')
  const [cartHideShow, setCartHideShow] = useState('hide')

  useEffect(() => {
    document.title = 'WM Sepuasnya | Pesan'
    if (kategori === 'semua') {
      setFilter(Menu)
    } else {
      setFilter(Menu.filter((item) => {
        return item.kategori === kategori
      }))
    }
  }, [kategori])

  return (
    <>
      <Header judulHeader={'Pesan dan nikmati menu terbaik dari kami'} imgHeight='335px' displayButton='none' />

      {/* Cart button */}
      <div className='position-fixed bottom-0 end-0 z-1'>
        <button className='position-relative mx-5 my-4 floating-button rounded-circle border-0' onClick={() => setCartHideShow('show')}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-yellow">
            {pesanan.length !== 0 ? pesanan.length : ''}
          </span>
        </button>
      </div>

      <Container className='my-4'>
        {/* Button kategori */}
        <div>
          <div className='d-flex justify-content-center mb-3'>
            <div>
              <button onClick={() => setKategori('semua')} className={'btn-tab rounded-bottom-0 px-2 px-md-4 px-lg-5 border-button' + (kategori === 'semua' || kategori === '' ? '-active' : '')}>Semua</button>
              <button onClick={() => setKategori('makanan')} className={'btn-tab rounded-bottom-0 px-2 px-md-4 px-lg-5 border-button' + (kategori === 'makanan' ? '-active' : '')}>
                <FontAwesomeIcon icon={faBowlFood} className='me-2' />
                Makanan
              </button>
              <button onClick={() => setKategori('minuman')} className={'btn-tab rounded-bottom-0 px-2 px-md-4 px-lg-5 border-button' + (kategori === 'minuman' ? '-active' : '')}>
                <FontAwesomeIcon icon={faMugSaucer} className='me-2' />
                Minuman
              </button>
              <button onClick={() => setKategori('snack')} className={'btn-tab rounded-bottom-0 px-2 px-md-4 px-lg-5 border-button' + (kategori === 'snack' ? '-active' : '')}>
                <FontAwesomeIcon icon={faIceCream} className='me-2' />
                Snack
              </button>
            </div>
          </div>
        </div>
        {/* List menu */}
        <Row>
          {filter.map((item, index) => {
            return (
              <Col xxl={3} xl={4} lg={4} md={6} sm={12} className='py-xl-3 py-lg-1 py-md-3 py-2' key={index}>
                <Card className='shadow border-0' style={{ height: '100%', width: '315px', margin: 'auto' }}>
                  <Card.Body className='py-2 px-2'>
                    <img src={require(`../../assets/img/warung_makan/menu/${item.img}.jpg`)} alt="menu" className='img-fluid rounded-2' />
                  </Card.Body>
                  <Card.Body className='pt-0 pb-2 px-3'>
                    <Card.Title>
                      <Row className='justify-content-between align-items-center'>
                        <Col className='col-6'>
                          <div>
                            <h5 className='fw-bold mb-1 text-dark-gray'>{item.nama}</h5>
                          </div>
                          <div>
                            <RatingStars rating={item.rating} />
                          </div>
                        </Col>
                        <Col className='col-6'>
                          <div className='text-center'>
                            <h4 className='fw-normal mb-0 text-dark-gray'>Rp {new Intl.NumberFormat('id').format(item.harga)}</h4>
                          </div>
                        </Col>
                      </Row>
                    </Card.Title>
                    <Card.Text className='text-justify text-gray mb-1' style={{ minHeight: '75px' }}>
                      {item.deskripsi}
                    </Card.Text>
                    <Row>
                      <Col className='text-center'>
                        <button className='button border-0 rounded-1' onClick={() => dispatch({ type: 'ADD', nama: item.nama, harga: item.harga, img: item.img })}>
                          Pesan
                        </button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        {/* Keranjang belanja */}
        <div className={cartHideShow === 'hide' ? 'd-none' : ''}>
          <Cart pesanan={pesanan} dispatch={dispatch} hide={() => setCartHideShow('hide')} />
        </div>
      </Container >

      <Footer />
    </>
  );
}

export default Pesan
