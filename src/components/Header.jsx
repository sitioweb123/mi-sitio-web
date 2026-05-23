import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`navbar-transition py-3 ${scrolled ? 'scrolled' : ''}`}
      style={{
        background: scrolled ? 'rgba(10, 22, 40, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="hero"
          smooth
          duration={500}
          className="d-flex align-items-center gap-2"
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--accent-green), var(--accent-orange))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '700',
              fontSize: '1.2rem',
            }}
          >
            N
          </div>
          <span
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: '1.4rem',
              letterSpacing: '1px',
            }}
          >
            Nova<span style={{ color: 'var(--accent-green)' }}>Tech</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{ border: 'none', color: 'white' }}
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto gap-1">
            {['Inicio', 'Nosotros', 'Servicios', 'Galería', 'Contacto'].map(
              (item) => (
                <Nav.Link
                  key={item}
                  as={Link}
                  to={item === 'Inicio' ? 'hero' : item.toLowerCase()}
                  smooth
                  duration={500}
                  onClick={closeNavbar}
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    padding: '8px 18px',
                    borderRadius: '8px',
                    transition: 'var(--transition)',
                    fontWeight: '500',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'rgba(255,255,255,0.85)';
                  }}
                >
                  {item}
                </Nav.Link>
              )
            )}
          </Nav>
          <Button
            variant="outline-light"
            as={Link}
            to="contacto"
            smooth
            duration={500}
            onClick={closeNavbar}
            className="d-flex align-items-center gap-2 px-4 py-2"
            style={{
              borderRadius: '50px',
              fontWeight: '500',
              borderColor: 'var(--accent-green)',
              color: 'var(--accent-green)',
            }}
          >
            <FaPhone size={14} />
            Contáctanos
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;