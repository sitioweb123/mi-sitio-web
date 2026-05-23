import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHistory, FaBullseye, FaEye, FaHeart } from 'react-icons/fa';

const Nosotros = () => {
  const valores = [
    {
      icon: <FaHistory />,
      title: 'Nuestra Historia',
      desc: 'Fundada en 2014, NovaTech Solutions nació con la visión de democratizar la tecnología para empresas de todos los tamaños. Desde entonces, hemos crecido hasta convertirnos en referentes del sector tecnológico.',
    },
    {
      icon: <FaBullseye />,
      title: 'Misión',
      desc: 'Brindar soluciones tecnológicas innovadoras, accesibles y de alta calidad que impulsen el crecimiento sostenible de nuestros clientes y la sociedad.',
    },
    {
      icon: <FaEye />,
      title: 'Visión',
      desc: 'Ser la empresa líder en transformación digital en Latinoamérica, reconocida por la excelencia de nuestros servicios y el impacto positivo en la comunidad.',
    },
    {
      icon: <FaHeart />,
      title: 'Valores',
      desc: 'Innovación, integridad, compromiso con el cliente, trabajo en equipo, excelencia y responsabilidad social guían cada una de nuestras decisiones y proyectos.',
    },
  ];

  return (
    <section
      id="nosotros"
      style={{
        padding: '100px 0',
        background: 'var(--white)',
      }}
    >
      <Container>
        <div className="section-title fade-in">
          <h2>Sobre Nosotros</h2>
          <p>Conoce más acerca de quiénes somos y lo que nos motiva</p>
        </div>

        <Row>
          {valores.map((item, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card
                className="h-100 border-0 hover-card"
                style={{
                  boxShadow: 'var(--shadow)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: index === 0 ? 'var(--primary-dark)' : 'var(--white)',
                  border: index > 0 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                }}
              >
                <Card.Body className="p-4">
                  <div
                    className="d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background:
                        index === 0
                          ? 'rgba(0,200,83,0.15)'
                          : 'linear-gradient(135deg, var(--primary-blue), var(--accent-green))',
                      color: index === 0 ? 'var(--accent-green)' : 'white',
                      fontSize: '1.5rem',
                    }}
                  >
                    {item.icon}
                  </div>
                  <h5
                    style={{
                      fontWeight: '700',
                      color: index === 0 ? 'white' : 'var(--primary-dark)',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                    style={{
                      color: index === 0 ? 'rgba(255,255,255,0.8)' : 'var(--gray-medium)',
                      fontSize: '0.95rem',
                    }}
                  >
                    {item.desc}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Nosotros;