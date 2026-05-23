import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHeart,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, var(--primary-dark), #060d17)',
        color: 'rgba(255,255,255,0.7)',
        paddingTop: '80px',
      }}
    >
      <Container>
        <Row>
          {/* Brand */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--accent-green), var(--accent-orange))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.3rem',
                }}
              >
                N
              </div>
              <h4 style={{ color: 'white', fontWeight: '700' }}>
                Nova<span style={{ color: 'var(--accent-green)' }}>Tech</span>
              </h4>
            </div>
            <p style={{ lineHeight: '1.8', maxWidth: '350px' }}>
              Transformamos ideas en experiencias digitales extraordinarias.
              Tu socio tecnológico de confianza desde 2014.
            </p>
            <div className="d-flex gap-3 mt-3">
              {[
                { icon: <FaFacebookF />, color: '#1877f2' },
                { icon: <FaTwitter />, color: '#1da1f2' },
                { icon: <FaInstagram />, color: '#e4405f' },
                { icon: <FaLinkedinIn />, color: '#0077b5' },
              ].map((red, index) => (
                <a
                  key={index}
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'var(--transition)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = red.color;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  {red.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={4} className="mb-4 mb-md-0">
            <h5 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem' }}>
              Enlaces
            </h5>
            {['Inicio', 'Nosotros', 'Servicios', 'Galería', 'Contacto'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  padding: '6px 0',
                  transition: 'var(--transition)',
                  fontSize: '0.95rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-green)';
                  e.currentTarget.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                {link}
              </a>
            ))}
          </Col>

          {/* Services */}
          <Col lg={3} md={4} className="mb-4 mb-md-0">
            <h5 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem' }}>
              Servicios
            </h5>
            {[
              'Desarrollo Web',
              'Apps Móviles',
              'Diseño UI/UX',
              'Cloud Hosting',
              'Ciberseguridad',
            ].map((service) => (
              <a
                key={service}
                href="#"
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  padding: '6px 0',
                  transition: 'var(--transition)',
                  fontSize: '0.95rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-green)';
                  e.currentTarget.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                {service}
              </a>
            ))}
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={4}>
            <h5 style={{ color: 'white', fontWeight: '700', marginBottom: '1.5rem' }}>
              Contacto
            </h5>
            {[
              { icon: <FaMapMarkerAlt />, text: 'Av. Tecnológica #123, CDMX' },
              { icon: <FaPhone />, text: '+52 (55) 1234-5678' },
              { icon: <FaEnvelope />, text: 'contacto@novatech.com' },
            ].map((info, index) => (
              <div
                key={index}
                className="d-flex align-items-start gap-3 mb-3"
                style={{ fontSize: '0.95rem' }}
              >
                <span style={{ color: 'var(--accent-green)', marginTop: '3px' }}>
                  {info.icon}
                </span>
                <span>{info.text}</span>
              </div>
            ))}
          </Col>
        </Row>

        {/* Copyright */}
        <hr
          style={{
            borderColor: 'rgba(255,255,255,0.1)',
            margin: '40px 0 30px',
          }}
        />
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0" style={{ fontSize: '0.9rem' }}>
              © {currentYear} NovaTech Solutions. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0" style={{ fontSize: '0.9rem' }}>
              Hecho con <FaHeart style={{ color: '#e74c3c' }} /> en México
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;