import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  padding: 3rem 0;
  text-align: center;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 0 auto;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    margin: 0 1rem;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const SocialIcons = styled.div`
  font-size: 1.5rem;

  a {
    color: white;
    margin: 0 1rem;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const FooterInfo = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 1rem;

  p {
    margin: 0.5rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterSection>
          <FooterLinks>
            <a href="/">Inicio</a>
            <a href="/about">Acerca de</a>
            <a href="/services">Servicios</a>
            <a href="/contact">Contacto</a>
          </FooterLinks>

          <SocialIcons>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </SocialIcons>
        </FooterSection>

        <FooterInfo>
          <p>
            &copy; {new Date().getFullYear()} Sites NET. Todos los derechos
            reservados.
          </p>
          <p>Diseñado por Sites Net</p>
        </FooterInfo>
      </div>
    </FooterContainer>
  );
};

export default Footer;
