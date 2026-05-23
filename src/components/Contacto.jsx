import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPlus,
  FaTrash,
  FaSearch,
  FaEdit,
} from 'react-icons/fa';

const Contacto = () => {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Juan Pérez', email: 'juan@email.com', mensaje: 'Consulta sobre desarrollo web', fecha: '2026-05-10' },
    { id: 2, nombre: 'María López', email: 'maria@email.com', mensaje: 'Solicito cotización de hosting', fecha: '2026-05-12' },
  ]);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [busqueda, setBusqueda] = useState('');
  const [editando, setEditando] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // INSERTAR
  const handleInsertar = () => {
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert('Por favor, complete todos los campos');
      return;
    }

    if (editando) {
      // ACTUALIZAR
      setContactos(
        contactos.map((c) =>
          c.id === editando ? { ...c, ...formData } : c
        )
      );
      setEditando(null);
    } else {
      // INSERTAR
      const nuevo = {
        id: Date.now(),
        ...formData,
        fecha: new Date().toISOString().split('T')[0],
      };
      setContactos([...contactos, nuevo]);
    }

    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  // ELIMINAR
  const handleEliminar = (id) => {
    if (window.confirm('¿Está seguro de eliminar este registro?')) {
      setContactos(contactos.filter((c) => c.id !== id));
    }
  };

  // BUSCAR
  const handleBuscar = (e) => {
    setBusqueda(e.target.value);
  };

  // EDITAR (cargar datos al formulario)
  const handleEditar = (contacto) => {
    setFormData({
      nombre: contacto.nombre,
      email: contacto.email,
      mensaje: contacto.mensaje,
    });
    setEditando(contacto.id);
    document.getElementById('nombre').focus();
  };

  const contactosFiltrados = contactos.filter(
    (c) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.email.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.mensaje.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section
      id="contacto"
      style={{
        padding: '100px 0',
        background: 'var(--gray-light)',
      }}
    >
      <Container>
        <div className="section-title fade-in">
          <h2>Contáctanos</h2>
          <p>Envíanos un mensaje y te responderemos pronto</p>
        </div>

        <Row>
          {/* Formulario */}
          <Col lg={5} className="mb-4 mb-lg-0">
            <div
              className="fade-in"
              style={{
                background: 'var(--white)',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow)',
                height: '100%',
              }}
            >
              <h4
                style={{
                  fontWeight: '700',
                  color: 'var(--primary-dark)',
                  marginBottom: '1.5rem',
                }}
              >
                {editando ? '✏️ Actualizar Mensaje' : '📩 Nuevo Mensaje'}
              </h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label style={{ fontWeight: '500' }}>Nombre</Form.Label>
                  <Form.Control
                    id="nombre"
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px',
                      border: '2px solid #e9ecef',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontWeight: '500' }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px',
                      border: '2px solid #e9ecef',
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontWeight: '500' }}>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    style={{
                      borderRadius: '12px',
                      padding: '12px 16px',
                      border: '2px solid #e9ecef',
                      resize: 'none',
                    }}
                  />
                </Form.Group>

                <div className="d-flex gap-2 mb-3">
                  <Button
                    onClick={handleInsertar}
                    style={{
                      borderRadius: '12px',
                      padding: '12px 24px',
                      fontWeight: '600',
                      background: editando
                        ? 'var(--accent-orange)'
                        : 'var(--accent-green)',
                      border: 'none',
                      flex: 1,
                    }}
                  >
                    {editando ? (
                      <>
                        <FaEdit className="me-2" /> Actualizar
                      </>
                    ) : (
                      <>
                        <FaPlus className="me-2" /> Insertar
                      </>
                    )}
                  </Button>
                  {editando && (
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setEditando(null);
                        setFormData({ nombre: '', email: '', mensaje: '' });
                      }}
                      style={{ borderRadius: '12px', padding: '12px 24px' }}
                    >
                      Cancelar
                    </Button>
                  )}
                </div>
              </Form>

              {/* Info de contacto */}
              <div className="mt-4">
                {[
                  {
                    icon: <FaMapMarkerAlt />,
                    label: 'Av. Tecnológica #123, CDMX, México',
                  },
                  { icon: <FaPhone />, label: '+52 (55) 1234-5678' },
                  { icon: <FaEnvelope />, label: 'contacto@novatech.com' },
                ].map((info, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center gap-3 mb-3"
                  >
                    <div
                      style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '12px',
                        background: 'rgba(0,200,83,0.1)',
                        color: 'var(--accent-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--gray-medium)' }}>
                      {info.label}
                    </span>
                  </div>
                ))}

                {/* Redes Sociales */}
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
                        width: '45px',
                        height: '45px',
                        borderRadius: '12px',
                        background: `${red.color}15`,
                        color: red.color,
                        fontSize: '1.1rem',
                        transition: 'var(--transition)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = red.color;
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${red.color}15`;
                        e.currentTarget.style.color = red.color;
                      }}
                    >
                      {red.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Tabla CRUD */}
          <Col lg={7}>
            <div
              className="fade-in"
              style={{
                background: 'var(--white)',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow)',
              }}
            >
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                <h4 style={{ fontWeight: '700', color: 'var(--primary-dark)' }}>
                  📋 Mensajes Recibidos
                </h4>
                <div className="input-group" style={{ maxWidth: '300px' }}>
                  <span
                    className="input-group-text"
                    style={{
                      borderRadius: '12px 0 0 12px',
                      border: '2px solid #e9ecef',
                      borderRight: 'none',
                      background: 'transparent',
                    }}
                  >
                    <FaSearch style={{ color: 'var(--gray-medium)' }} />
                  </span>
                  <Form.Control
                    type="text"
                    placeholder="Buscar contactos..."
                    value={busqueda}
                    onChange={handleBuscar}
                    style={{
                      borderRadius: '0 12px 12px 0',
                      border: '2px solid #e9ecef',
                      borderLeft: 'none',
                      padding: '10px 14px',
                    }}
                  />
                </div>
              </div>

              <div className="table-responsive">
                <Table hover className="mb-0">
                  <thead>
                    <tr>
                      <th className="py-3" style={{ color: 'var(--primary-dark)', fontWeight: '600' }}>
                        Nombre
                      </th>
                      <th className="py-3" style={{ color: 'var(--primary-dark)', fontWeight: '600' }}>
                        Email
                      </th>
                      <th className="py-3" style={{ color: 'var(--primary-dark)', fontWeight: '600' }}>
                        Mensaje
                      </th>
                      <th className="py-3 text-center" style={{ color: 'var(--primary-dark)', fontWeight: '600' }}>
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contactosFiltrados.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center py-4" style={{ color: 'var(--gray-medium)' }}>
                          No se encontraron resultados
                        </td>
                      </tr>
                    ) : (
                      contactosFiltrados.map((contacto) => (
                        <tr key={contacto.id}>
                          <td className="align-middle" style={{ fontWeight: '500' }}>
                            {contacto.nombre}
                          </td>
                          <td className="align-middle" style={{ color: 'var(--gray-medium)' }}>
                            {contacto.email}
                          </td>
                          <td
                            className="align-middle"
                            style={{
                              maxWidth: '200px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              color: 'var(--gray-medium)',
                            }}
                          >
                            {contacto.mensaje}
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex gap-2 justify-content-center">
                              <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={() => handleEditar(contacto)}
                                style={{
                                  borderRadius: '8px',
                                  padding: '6px 12px',
                                }}
                                title="Editar"
                              >
                                <FaEdit />
                              </Button>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleEliminar(contacto.id)}
                                style={{
                                  borderRadius: '8px',
                                  padding: '6px 12px',
                                }}
                                title="Eliminar"
                              >
                                <FaTrash />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>

              <div
                className="mt-3 d-flex justify-content-between align-items-center"
                style={{ fontSize: '0.9rem', color: 'var(--gray-medium)' }}
              >
                <span>
                  Total: <strong>{contactosFiltrados.length}</strong> registros
                </span>
                {busqueda && (
                  <Button
                    variant="link"
                    onClick={() => setBusqueda('')}
                    style={{ color: 'var(--accent-green)', padding: 0 }}
                  >
                    Limpiar búsqueda
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacto;