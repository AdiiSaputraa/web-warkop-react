import { Container, Col, Row } from "react-bootstrap"
import { MenuMakanan } from "../data"
const MenuPages = () => {
    return (

        <div className="menu-pages">
        <div className="menu min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="fw-bold text-center">Semua Menu</h1>
                        <p className="text-center">Ini adalah daftar menu kami</p>
                        <p className="text-center">Masih banyak menu lainnya yang gak kami cantumkan jadi langsung cek aja di tempat</p>
                    </Col>
                </Row>
                <Row>
                {MenuMakanan.map((data) => {
                            return(
                                <Col key={data.id} data-aos="zoom-out">
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
            </Container>
        </div>
        </div>
    )
}

export default MenuPages