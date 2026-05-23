import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaCheck, FaClock, FaDollarSign } from 'react-icons/fa';

const TablaInfo = () => {
  const servicios = [
    { nombre: 'Diseño Web', precio: '$3,000', duracion: '7 días', disponible: true },
    { nombre: 'Hosting Anual', precio: '$800', duracion: '1 año', disponible: true },
    { nombre: 'App Móvil', precio: '$8,500', duracion: '30 días', disponible: true },
    { nombre: 'E-commerce', precio: '$5,500', duracion: '15 días', disponible: true },
    { nombre: 'SEO Básico', precio: '$1,200', duracion: '10 días', disponible: true },
    { nombre: 'Mantenimiento', precio: '$500/mes', duracion: 'Mensual', disponible: true },
  ];

  return (
    <section
      id="tabla"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-blue))',
      }}
    >
      <Container>
        <div className="section-title fade-in">
          <h2 style={{ color: 'white' }}>Nuestros Planes y Precios</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div
          className="fade-in"
          style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="table-responsive">
            <Table
              variant="dark"
              className="mb-0"
              style={{ background: 'transparent' }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(0,200,83,0.3)' }}>
                  <th className="py-4 px-4" style={{ color: 'var(--accent-green)' }}>
                    <FaDollarSign className="me-2" />
                    Servicio
                  </th>
                  <th className="py-4 px-4" style={{ color: 'var(--accent-green)' }}>
                    <FaClock className="me-2" />
                    Precio
                  </th>
                  <th className="py-4 px-4" style={{ color: 'var(--accent-green)' }}>
                    <FaClock className="me-2" />
                    Duración
                  </th>
                  <th className="py-4 px-4 text-center" style={{ color: 'var(--accent-green)' }}>
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((servicio, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      transition: 'var(--transition)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0,200,83,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <td className="py-3 px-4" style={{ color: 'white', fontWeight: '500' }}>
                      {servicio.nombre}
                    </td>
                    <td className="py-3 px-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {servicio.precio}
                    </td>
                    <td className="py-3 px-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      {servicio.duracion}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        style={{
                          background: 'rgba(0,200,83,0.15)',
                          color: 'var(--accent-green)',
                          padding: '6px 14px',
                          borderRadius: '50px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                        }}
                      >
                        <FaCheck className="me-1" />
                        Disponible
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TablaInfo;