import Smith from "../assets/clients/smith.png";
import Messi from "../assets/clients/messi.png";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const TestimoniosSection = styled.section`
  padding: 80px 0;
  background-color: #f4f7fb;
  text-align: center;
  border-top: 4px solid #0056b3;
`;

const Title = styled.h2`
  color: #0056b3;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const CarouselWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const TestimonialImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #f1f1f1;
  margin-bottom: 20px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-color: #0056b3;
  }
`;

const TestimonialText = styled.p`
  color: #6c757d;
  font-size: 1.15rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 30px;
  padding: 0 15px;
`;

const ClientName = styled.h5`
  color: #343a40;
  font-size: 1.3rem;
  margin-bottom: 5px;
  font-weight: 600;
`;

const ClientRole = styled.p`
  color: #007bff;
  font-size: 1.05rem;
  margin-bottom: 20px;
`;

const Testimonios = () => {
  return (
    <TestimoniosSection>
      <div className="container">
        <Title>Lo que dicen nuestros clientes</Title>
        <CarouselWrapper>
          <Carousel interval={5000} indicators={false} controls={true}>
            {/* Testimonio 1 */}
            <Carousel.Item>
              <TestimonialCard className="p-4">
                <TestimonialImage
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Cliente 1"
                />
                <TestimonialText>
                  "Este sitio web transformó completamente la manera en que mi
                  negocio interactúa con los clientes. El diseño es simple,
                  elegante y muy efectivo. ¡Altamente recomendado!"
                </TestimonialText>
                <ClientName>Juan Pérez</ClientName>
                <ClientRole>Emprendedor</ClientRole>
              </TestimonialCard>
            </Carousel.Item>

            {/* Testimonio 2 */}
            <Carousel.Item>
              <TestimonialCard className="p-4">
                <TestimonialImage
                  src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Cliente 2"
                />
                <TestimonialText>
                  "Gracias al equipo de desarrollo, mi página web ahora es más
                  rápida y atractiva que nunca. No podría estar más feliz con el
                  resultado."
                </TestimonialText>
                <ClientName>Jorge López</ClientName>
                <ClientRole>Freelancer</ClientRole>
              </TestimonialCard>
            </Carousel.Item>

            {/* Testimonio 3 */}
            <Carousel.Item>
              <TestimonialCard className="p-4">
                <TestimonialImage
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                  alt="Cliente 3"
                />
                <TestimonialText>
                  "Una experiencia increíble con esta empresa. Mi página web no
                  solo es funcional, sino también completamente personalizada a
                  mis necesidades. ¡Excelente servicio!"
                </TestimonialText>
                <ClientName>Carlos García</ClientName>
                <ClientRole>Propietario de tienda</ClientRole>
              </TestimonialCard>
            </Carousel.Item>
          </Carousel>
        </CarouselWrapper>
      </div>
    </TestimoniosSection>
  );
};

export default Testimonios;
