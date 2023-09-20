import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faArrowRightFromBracket, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Portofolio from './assets/data/Portofolio'
import './App.css';

function App(props) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container border-bottom px-4 pb-2">
            <a className="navbar-brand fw-bold font-nunito" href="/" id='top'>DamaiPs</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link font-nunito active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-nunito" href="#tentangsaya">Tentang Saya</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-nunito" href="#portofolio">Portofolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link font-nunito" href="#kontaksaya">Kontak Saya</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className='container-fluid'>
        <div className='mb-md-0 mb-5 px-lg-5 px-md-0 px-0 pb-md-0 pb-5'>
          <div className='row justify-content-evenly align-items-center px-lg-5 px-md-0 px-0 height-full'>
            <div className='col-lg-7 col-md-6 col-12 order-md-1 order-2'>
              <div className='row'>
                <div className='col-2'></div>
                <div className='col-10'>
                  <p className='text-secondary mb-0 fs-6'>Selamat Datang</p>
                </div>
              </div>
              <div className='row mb-1'>
                <div className='col-2'></div>
                <div className='col-10'>
                  <h1 className='fw-bold text-uppercase text-dark mb-0'>Hi, Saya Damai</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-2'>
                  <ul className='nav flex-column'>
                    <li className='mb-3 text-center fs-6'>
                      <a href="https://www.linkedin.com/in/damai-patria-suyana/" target='blank' className='text-secondary'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </li>
                    <li className='mb-3 text-center fs-6'>
                      <a href="https://github.com/Damaipatria" target='blank' className='text-secondary'>
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className='text-center fs-6'>
                      <a href='/' className='text-dark'>
                        <FontAwesomeIcon icon={faGlobe} />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-10'>
                  <p className='mb-0 fs-6 text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col-2'></div>
                <div className='col-10'>
                  <a href='mailto:damaipatriasuyana10@gmail.com' className='text-dark fs-5 fw-semibold font-nunito'>
                    Kontak Saya<FontAwesomeIcon icon={farEnvelope} className='ms-2' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-5 col-12 order-md-2 order-1'>
              <div className='blob shadow m-auto'>
                <img src={require('./assets/img/personal_image.jpg')} alt='img-person' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>

        <div className='mb-5 px-lg-5 px-md-4 px-0 pb-5' id='tentangsaya'>
          <div className='row justify-content-center'>
            <div className='col-xl-4 col-lg-5 col-md-5 col-12 mb-md-0 mb-3'>
              <div className='text-center'>
                <img src={require('./assets/img/coding_image.jpg')} alt='img-code' className='img-size object-fit-cover shadow rounded-3' />
              </div>
            </div>
            <div className='col-xl-6 col-lg-7 col-md-7 col-12 ps-3'>
              <h3 className='fw-semibold mb-md-3 mb-1 text-md-start text-center'>
                Tentang Saya
              </h3>
              <p className='text-justify'>
                Hi, Saya berpengalaman dalam membuat Website mulai dari bagian Front-end hingga Back-end. Pada bagian Front-end saya mempelajari HTML, CSS, Javasrcipt hingga React JS maupun Vue JS, sedangkan Back-end belajar Laravel, database SQL maupun No-SQL. Saya juga belajar Python dan librarynya, seperti Pandas, Numpy, Sckit-learn, Matplotlib dan Seabron. Saya juga berpengalaman dalam Data Cleaning, Data Visualisation dan Machine Learning oleh sebab itu saya juga tertarik pada dunia Data Analyst serta Data Scientist.
              </p>
              <div className='row align-items-end'>
                <div>
                  <div className='row align-items-center mb-auto'>
                    <div className='col-xl-4 col-lg-4 col-md-3 col-3'>
                      <p className='mb-0 text-center fw-semibold fs-6'>Tech Stack</p>
                    </div>
                    <div className='col-xl-8 col-lg-8 col-md-9 col-9 text-lg-center text-md-center border-start border-2 border-dark-subtle'>
                      <a href="http://www.w3.org/html/logo/" className='me-xl-4 me-lg-3 me-md-3 me-3'>
                        <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" className='img-shadow' width="30" height="30" alt="HTML5 Powered" title="HTML5" />
                      </a>
                      <a href="https://www.w3.org/Style/CSS/Overview.en.html" className='me-xl-4 me-lg-3 me-md-3 me-3'>
                        <img src={require("./assets/img/css_logo.png")} className='img-shadow' width="30" height="30" alt="CSS3 logo" title="CSS3" />
                      </a>
                      <a href="https://react.dev/" className='me-xl-4 me-lg-3 me-md-3 me-3'>
                        <img src={require("./assets/img/react_logo.png")} className='img-shadow' width="30" height="30" alt="React JS logo" title="React JS" />
                      </a>
                      <a href="https://getbootstrap.com/" className='me-xl-4 me-lg-3 me-md-3 me-3'>
                        <img src={require("./assets/img/bootstrap_logo.png")} className='img-shadow' width="30" height="30" alt="Bootstrap logo" title="Bootstrap" />
                      </a>
                      <a href="https://laravel.com/" className='me-xl-4 me-lg-2 me-md-3 me-3'>
                        <img src={require("./assets/img/laravel_logo.png")} className='img-shadow' width="30" height="30" alt="Laravel logo" title="Laravel" />
                      </a>
                      <a href="https://www.python.org/">
                        <img src={require("./assets/img/python_logo.png")} className='img-shadow' width="40" height="40" alt="Python logo" title="Python" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-md-5 pt-0 my-5' id='portofolio'>
          <h3 className='text-center fw-semibold mb-0'>Portofolio</h3>
          <p className='col-lg-6 col-md-10 col-12 text-center m-auto mb-5'>
            Setiap project dibuat untuk melampui kemampuan tertinggi saya, sehingga saya terus belajar dan mengembangkan ilmu saya.
          </p>
          {Portofolio.map((item) => {
            return (
              <>
                <div key={item.id} className='row justify-content-center px-lg-5 px-md-3 px-2 mb-3 pb-3'>
                  <div className='col-xl-4 col-lg-5 col-md-6 col-12 mb-4'>
                    <img src={require(`./assets/img/${item.img}.png`)} alt='nama web' className='img-full object-fit-cover object-position-center-top shadow rounded-3' />
                  </div>
                  <div className='col-xl-4 col-lg-5 col-md-6 col-12 ps-4'>
                    <h3 className='fw-bold mb-1'>
                      {item.judul}
                    </h3>
                    <div className='mb-1'>
                      <ul className='list-group list-group-horizontal'>
                        {item.teknologi.map((item, index) => {
                          return (
                            <>
                              <li className='list-group-item border-0 ps-0 pe-4 text-secondary' key={index}>{item}</li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                    <p className='text-justify'>
                      {item.deskripsi}
                    </p>
                    <div className='row align-items-end'>
                      <div className='col'>
                        <div className='row justify-content-evenly'>
                          <div className='col-4 text-center'>
                            <a href={item.code} target='blank' className='text-decoration-none text-dark'>
                              <span className='me-3 fs-5'>
                                Code
                              </span>
                              <FontAwesomeIcon icon={faGithub} className='fs-5' />
                            </a>
                          </div>
                          <div className='col-4 text-center'>
                            <a href={`/My-Protofolio/${item.demo}`} target='blank' className='text-decoration-none text-dark'>
                              <span className='me-3 fs-5'>
                                Demo
                              </span>
                              <FontAwesomeIcon icon={faArrowRightFromBracket} className='fs-5' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <footer id='kontaksaya'>
        <div className='container-fluid bg-light mt-5'>
          <div className='row justify-content-between align-items-center mx-3 px-2 border-bottom'>
            <div className='col-md-2 col-4 order-1'>
              <a href='/' className='text-decoration-none text-dark fs-5 fw-bold font-nunito'>
                DamaiPs
              </a>
            </div>
            <div className='col-md-8 col-12 order-md-2 order-3 px-0'>
              <ul className="nav justify-content-md-center justify-content-evenly">
                <li className="nav-item">
                  <a className="nav-link px-md-3 px-1 text-dark font-nunito" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-md-3 px-1 text-dark font-nunito" href="#tentangsaya">Tentang Saya</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-md-3 px-1 text-dark font-nunito" href='#portofolio'>Portofolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link px-md-3 px-1 text-dark font-nunito" href="#kontaksaya">Kontak Saya</a>
                </li>
              </ul>
            </div>
            <div className='col-md-2 col-3 order-md-3 order-2 text-end'>
              <a href='#top' className='text-dark fw-bold font-nunito'>
                Top <i><FontAwesomeIcon icon={faArrowUp} className='ms-1' /></i>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <ul className="nav justify-content-center">
                <li className="nav-item" >
                  <a className="nav-link text-dark font-nunito" href="mailto:damaipatriasuyana10@gmail.com">
                    <FontAwesomeIcon icon={farEnvelope} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark font-nunito" href="https://www.linkedin.com/in/damai-patria-suyana/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark font-nunito" href="https://github.com/Damaipatria">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer >
    </>
  );
}

export default App;
