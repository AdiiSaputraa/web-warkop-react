import {Container, Row, Col} from 'react-bootstrap'
import HeroImage from '../assets/Hero.png'
import {MenuAndalan} from '../data/index.js'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    let navigate = useNavigate();

    return (
        <div className="homepage">
            <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
                <Container>
                    <Row className='header-box d-flex align-items-center'>
                        <Col lg="6">
                            <h1 className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>Temukan<br/> <span>Sensasi Baru Di</span> <br/>Tempat Kami</h1>
                            <p className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>Warmindo King 0 Hadir Untuk Menemani Anda Dikala Bahagia Dan Banyak Kendala 😜</p>
                            <button className='animate__animated animate__fadeInUp animate__delay-1s btn btn-lg me-2 mb-xs-0 mb-2' onClick={() => navigate('/menu')}>Lihat Menu</button>
                            <button className='animate__animated animate__fadeInUp animate__delay-1s btn btn-lg me-2 mb-xs-0 mb-2' onClick={() => navigate('/about')}>Tentang Kami</button>
                        </Col>
                        <Col lg="6" className='pt-lg-0 pt-5'>
                            <img src={HeroImage} alt="hero-image" className='animate__animated animate__fadeInUp'></img>
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="kelas w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-center fw-bold'>Menu Kami</h1>
                            <p className='text-center'>Untuk lengkapnya bisa cek di halaman menu yaa sobat</p>
                        </Col>
                    </Row>
                    <Row>
                        {MenuAndalan.map((data) => {
                            return(
                                <Col key={data.id} data-aos="zoom-in-down">
                                    <img src={data.image} alt='google.com' className='w-100 mb-5 rounded top'/>
                                    <div className='stars mb-2 px-3'>
                                        <i className={data.stars}></i>
                                        <i className={data.stars}></i>
                                        <i className={data.stars}></i>
                                        <i className={data.stars}></i>
                                        <i className={data.stars}></i>
                                    </div>
                                    <h5 className='mb-5 px-3'>{data.name}</h5>
                                    <div className='pb-3 px-3'>
                                        <p className='m-0 text-primary fw-bold'>{data.price}</p>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col className='text-center '>
                            <button data-aos="zoom-out" className='btn btn-success rounded-4 btn-lg' onClick={() => navigate("/menu")}>Lihat Semua Menu 
                            <p className='fa-solid fa-chevron-right ms-1'/></button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default HomePage