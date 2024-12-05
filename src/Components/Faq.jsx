import { Accordion } from "react-bootstrap";
import styled from "styled-components";

const FAQSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const FAQTitle = styled.h2`
  color: #0056b3;
  font-weight: bold;
  margin-bottom: 40px;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
`;

const FAQ = () => {
  return (
    <FAQSection>
      <div className="container">
        <FAQTitle>Preguntas Frecuentes</FAQTitle>
        <Accordion defaultActiveKey="0">
          {/* Pregunta 1 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              ¿Qué incluye el servicio de diseño web?
            </Accordion.Header>
            <Accordion.Body>
              Nuestro servicio de diseño web incluye el diseño personalizado de
              la página, desarrollo responsivo para adaptarse a todos los
              dispositivos, integración con herramientas de análisis,
              optimización SEO básica, y soporte técnico durante el lanzamiento.
            </Accordion.Body>
          </Accordion.Item>

          {/* Pregunta 2 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿Cuánto tiempo tarda en estar lista mi página web?
            </Accordion.Header>
            <Accordion.Body>
              El tiempo de desarrollo varía según la complejidad del proyecto,
              pero generalmente, entregamos una página web funcional dentro de 3
              a 6 semanas. El tiempo también depende de la rapidez con la que
              nos proporciones los contenidos y retroalimentación.
            </Accordion.Body>
          </Accordion.Item>

          {/* Pregunta 3 */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ¿Puedo actualizar mi página web después de que esté en línea?
            </Accordion.Header>
            <Accordion.Body>
              ¡Por supuesto! Ofrecemos mantenimiento y actualizaciones continuas
              para asegurar que tu sitio web siempre esté actualizado. Esto
              incluye cambios en el contenido, actualizaciones de software y
              ajustes de diseño.
            </Accordion.Body>
          </Accordion.Item>

          {/* Pregunta 4 */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿Necesito tener conocimientos técnicos para administrar mi sitio
              web?
            </Accordion.Header>
            <Accordion.Body>
              No es necesario tener experiencia técnica. Diseñamos sitios web
              fáciles de usar, con paneles de administración intuitivos. Además,
              ofrecemos tutoriales y soporte para que puedas gestionar tu sitio
              web de manera autónoma.
            </Accordion.Body>
          </Accordion.Item>

          {/* Pregunta 5 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿Ofrecen servicios de optimización SEO?
            </Accordion.Header>
            <Accordion.Body>
              Sí, todos nuestros sitios web vienen con una optimización SEO
              básica para ayudar a que tu sitio sea visible en los motores de
              búsqueda. También ofrecemos servicios avanzados de SEO si
              necesitas una optimización más profunda para mejorar el
              rendimiento de tu sitio.
            </Accordion.Body>
          </Accordion.Item>

          {/* Pregunta 6 */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              ¿Ofrecen soporte después de la entrega del sitio web?
            </Accordion.Header>
            <Accordion.Body>
              Sí, ofrecemos soporte continuo una vez que tu sitio web esté en
              línea. Esto incluye corrección de errores, actualizaciones y
              asistencia general para garantizar que tu página web funcione sin
              problemas.
            </Accordion.Body>
          </Accordion.Item>

          {/* Pregunta 7 */}
          <Accordion.Item eventKey="6">
            <Accordion.Header>¿Cómo puedo hacer un pedido?</Accordion.Header>
            <Accordion.Body>
              Puedes hacer un pedido fácilmente a través de nuestro formulario
              de contacto en el sitio web, o si prefieres hablar directamente,
              puedes llamarnos o enviarnos un correo electrónico. Nos
              aseguraremos de comprender tus necesidades y te daremos un
              presupuesto personalizado.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </FAQSection>
  );
};

export default FAQ;
