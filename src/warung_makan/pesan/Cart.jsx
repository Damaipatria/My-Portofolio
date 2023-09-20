import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

function Cart(props) {

  return (
    <>
      <div className='position-fixed end-0 bottom-0 z-2 m-3'>
        <div className='shadow p-3 border rounded-2 bg-white cart-width cart-max-height'>
          <div className="row mb-2">
            <div className="col">
              <div className='fs-3 fw-semibold'>Pesananmu</div>
            </div>
            <div className="col">
              <div className='text-end pe-1'>
                <button className='p-0 border-0 bg-body' onClick={props.hide}><FontAwesomeIcon icon={faX} /></button>
              </div>
            </div>
          </div>
          <div className='overflow-y-auto overflow-x-hidden list-cart-height'>
            {props.pesanan.map((item, index) => {
              return (
                <div className='row px-1 border-bottom py-2' key={index}>
                  <div className="col-4">
                    <img src={require(`../../assets/img/warung_makan/menu/${item.img}.jpg`)} alt="gambar" className='img-fluid rounded-2' />
                  </div>
                  <div className="col-8">
                    <div className='row'>
                      <div className="col-12 mb-2">
                        <span className='fs-5'>{item.nama}</span>
                      </div>
                      <div className="col-6">
                        <div className='bg-light rounded-1' style={{ width: 'fit-content' }}>
                          <button className='button-sm border-0 rounded-start-1' onClick={() => props.dispatch({ type: 'DECREMENT', nama: item.nama })}>
                            &#x2212;
                          </button>
                          <span className='mx-2 fw-semibold'>{item.jumlah}</span>
                          <button className='button-sm border-0 rounded-end-1' onClick={() => props.dispatch({ type: 'INCREMENT', nama: item.nama })}>
                            &#43;
                          </button>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className='text-end fw-bolder'>{item.harga * item.jumlah}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            <div className='mb-2'>
              <div className='row mx-2 pb-1 border-bottom'>
                <div className="col">
                  <p className='fw-bold mb-0'>Total</p>
                </div>
                <div className="col">
                  <p className='text-end fw-bold mb-0'>
                    {props.pesanan.reduce((total, item) => {
                      return total + (item.harga * item.jumlah)
                    }, 'tidak ada')}
                  </p>
                </div>
              </div>
            </div>
            <div className='d-grid px-2'>
              <button className='button border-0 rounded-2'>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;