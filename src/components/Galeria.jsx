import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Galeria = () => {
  const imagenes = [
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
      title: 'Equipo de Desarrollo',
    },
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
      title: 'Dashboard Analytics',
    },
    {
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
      title: 'Oficinas Modernas',
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
      title: 'Workshop Creativo',
    },
    {
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600',
      title: 'Reunión con Clientes',
    },
    {
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
      title: 'Tecnología Avanzada',
    },
  ];

  return (
    <section
      id="galeria"
      style={{
        padding: '100px 0',
        background: 'var(--white)',
      }}
    >
      <Container>
        <div className="section-title fade-in">
          <h2>Galería Multimedia</h2>
          <p>Un vistazo a nuestro trabajo y espacios</p>
        </div>

        <Row>
          {imagenes.map((img, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card
                className="border-0 hover-card overflow-hidden"
                style={{ borderRadius: '16px', boxShadow: 'var(--shadow)' }}
              >
                <div
                  style={{
                    overflow: 'hidden',
                    height: '250px',
                    position: 'relative',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={img.src}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      padding: '20px',
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '1.1rem',
                    }}
                  >
                    {img.title}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Video / iframe section */}
        <Row className="mt-4">
          <Col lg={8} className="mx-auto mb-4">
            <div
              className="ratio ratio-16x9"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/dQw4W9WgXcQ"
                title="Video Presentación"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
          </Col>
        </Row>

        {/* Google Maps iframe */}
        <Row>
          <Col lg={10} className="mx-auto">
            <div
              className="ratio ratio-21x9"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.0!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1234567890"
                title="Ubicación"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 'none' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Galeria;