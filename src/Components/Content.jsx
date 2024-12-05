import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Fija el fondo para un efecto de parallax */
  position: relative;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(
    0,
    0,
    0,
    0.4
  ); /* Oscurece el fondo para mejorar la legibilidad */
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Agrega sombra para mejorar la visibilidad */
`;

const Description = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.6;
  font-family: "Arial", sans-serif;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); /* Sombra en el texto */
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px; /* Bordes más redondeados */
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease;

  &:hover {
    background-color: #0069d9;
    transform: translateY(-5px); /* Efecto de elevación al pasar el ratón */
  }

  &:focus {
    outline: none;
  }
`;
const scrollToProjects = () => {
  const section = document.getElementById("proyectos");

  // Desplazarse a la sección con un desplazamiento suave
  window.scrollTo({
    top: section.offsetTop - 75, // Restamos 100px para darle espacio al título
    behavior: "smooth",
  });
};

const CallToAction = () => {
  return (
    <div>
      {/* Aquí va tu título y descripción */}
      <Button onClick={scrollToProjects}>Ver productos</Button>
    </div>
  );
};

const Content = () => {
  return (
    <ContentContainer>
      <Overlay />
      <ContentWrapper>
        <Title>¡Bienvenido a Sites NET!</Title>
        <Description>
          En nuestro equipo de expertos en diseño y desarrollo web, nos
          especializamos en crear sitios web atractivos, funcionales y adaptados
          a las necesidades de tu negocio. Ya sea que necesites una página web
          sencilla o una plataforma personalizada, ¡tenemos la solución perfecta
          para ti!
        </Description>
        <CallToAction />
      </ContentWrapper>
    </ContentContainer>
  );
};

export default Content;
