import { Container, Col, Row } from "react-bootstrap"
const AboutUsPage = () => {
    return (
        <div className="about-pages">
        <div className=" about min-vh-100">
            <Container>
                <Row>
                    <Col md={12}>
                        <h1 className="fw-bold text-center">About Us Page</h1>
                        <p className="text-center">This is the about us page.</p>
                    </Col>
                </Row>
                <Row className="animate__animated animate__fadeInUp animate__delay-1s">
                    <Col>
                        <p>  
Selamat datang di King Zero, tempat di mana rasa dan kehangatan berpadu menjadi satu!  

Kami adalah warmindo yang menyediakan berbagai pilihan makanan dan minuman untuk memenuhi selera Anda. Dari makanan berat yang menggugah selera hingga camilan ringan yang pas untuk menemani waktu santai, semuanya tersedia di sini. Kami juga memiliki beragam minuman, mulai dari kopi aromatik yang memanjakan pencinta kafein hingga minuman non-kopi yang menyegarkan.  

Di King Zero, kami percaya bahwa setiap sajian memiliki cerita, dan kami ingin menjadi bagian dari momen terbaik Anda, baik itu untuk sarapan cepat, makan siang santai, atau sekadar nongkrong bersama teman.  

Mari datang dan rasakan sendiri cita rasa istimewa yang hanya bisa Anda temukan di King Zero.  
Kami siap melayani Anda dengan penuh kehangatan dan senyuman! 😊  

<br className="fe-bold"/>King Zero - Lebih dari sekadar warmindo, kami adalah bagian dari hari Anda!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default AboutUsPage