import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaArrowDown, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(26,58,92,0.88) 100%), url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background shapes */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,200,83,0.15), transparent)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,109,0,0.12), transparent)',
          animation: 'pulse 5s ease-in-out infinite 1s',
        }}
      />

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div
              className="fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <span
                style={{
                  background: 'rgba(0,200,83,0.15)',
                  color: 'var(--accent-green)',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '1.5rem',
                }}
              >
                ✨ Bienvenidos a NovaTech Solutions
              </span>

              <h1
                style={{
                  color: 'white',
                  fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                }}
              >
                Soluciones Innovadoras
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-green), var(--accent-orange))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Para Tu Futuro
                </span>
              </h1>

              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '1.2rem',
                  maxWidth: '600px',
                  marginBottom: '2.5rem',
                  lineHeight: '1.8',
                }}
              >
                Transformamos ideas en experiencias digitales extraordinarias.
                Nuestro equipo de expertos te acompañará en cada paso de tu
                transformación digital.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Button
                  as={Link}
                  to="nosotros"
                  smooth
                  duration={500}
                  className="btn-primary-custom text-white"
                >
                  Conócenos
                </Button>
                <Button
                  variant="outline-light"
                  className="d-flex align-items-center gap-2 px-4 py-2"
                  style={{ borderRadius: '50px', fontWeight: '500' }}
                >
                  <FaPlay size={12} />
                  Ver Video
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="col-lg-4 d-none d-lg-block mt-4 mt-lg-0">
            <div
              className="fade-in"
              style={{
                animationDelay: '0.5s',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {[
                { number: '150+', label: 'Proyectos Completados' },
                { number: '50+', label: 'Clientes Satisfechos' },
                { number: '10+', label: 'Años de Experiencia' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center py-3"
                  style={{
                    borderBottom:
                      index < 2
                        ? '1px solid rgba(255,255,255,0.1)'
                        : 'none',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent-green)',
                      fontSize: '2rem',
                      fontWeight: '700',
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      textAlign: 'right',
                      fontSize: '0.95rem',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.5)',
          animation: 'bounce 2s infinite',
        }}
      >
        <FaArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;