import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCode, FaMobileAlt, FaPalette, FaServer, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const Servicios = () => {
  const servicios = [
    {
      icon: <FaCode />,
      title: 'Desarrollo Web',
      desc: 'Sitios web modernos, rápidos y escalables con las últimas tecnologías.',
      color: '#00c853',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Apps Móviles',
      desc: 'Aplicaciones nativas e híbridas para iOS y Android de alto rendimiento.',
      color: '#ff6d00',
    },
    {
      icon: <FaPalette />,
      title: 'Diseño UI/UX',
      desc: 'Interfaces intuitivas y atractivas centradas en la experiencia del usuario.',
      color: '#2196f3',
    },
    {
      icon: <FaServer />,
      title: 'Cloud & Hosting',
      desc: 'Infraestructura en la nube segura, escalable y con alto rendimiento.',
      color: '#9c27b0',
    },
    {
      icon: <FaDatabase />,
      title: 'Bases de Datos',
      desc: 'Diseño, optimización y administración de bases de datos empresariales.',
      color: '#f44336',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Ciberseguridad',
      desc: 'Protección integral de datos y sistemas contra amenazas digitales.',
      color: '#00bcd4',
    },
  ];

  return (
    <section
      id="servicios"
      style={{
        padding: '100px 0',
        background: 'var(--gray-light)',
      }}
    >
      <Container>
        <div className="section-title fade-in">
          <h2>Nuestros Servicios</h2>
          <p>Descubre las soluciones que tenemos para tu negocio</p>
        </div>

        <Row>
          {servicios.map((servicio, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card
                className="h-100 border-0 hover-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow)',
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    height: '4px',
                    background: `linear-gradient(90deg, ${servicio.color}, ${servicio.color}88)`,
                  }}
                />
                <Card.Body className="p-4">
                  <div
                    className="d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: `${servicio.color}15`,
                      color: servicio.color,
                      fontSize: '2rem',
                    }}
                  >
                    {servicio.icon}
                  </div>
                  <h5 style={{ fontWeight: '700', marginBottom: '0.8rem' }}>
                    {servicio.title}
                  </h5>
                  <p
                    style={{
                      color: 'var(--gray-medium)',
                      fontSize: '0.95rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {servicio.desc}
                  </p>
                  <Button
                    variant="outline-primary"
                    style={{
                      borderRadius: '50px',
                      borderColor: servicio.color,
                      color: servicio.color,
                      fontWeight: '600',
                    }}
                  >
                    Más información
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Servicios;