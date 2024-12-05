import styled from "styled-components";

const BannerContainer = styled.div`
  background-color: #007bff; /* Color de fondo azul */
  color: white;
  padding: 2rem 0;
  text-align: center;
  font-size: 1.5rem;
`;

const Banner = () => (
  <BannerContainer>
    <p>
      ¡Aprovecha nuestra oferta de fin de semana! Descuentos del 20% en nuestras
      Landing Pages.
    </p>
  </BannerContainer>
);

export default Banner;
