import React from "react";
import styled from "styled-components";

// Contenedor principal de la llamada a la acción
const CtaSection = styled.section`
  background-color: #007bff;
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

// Título de la llamada a la acción
const CtaTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

// Descripción de la llamada a la acción
const CtaDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

// Botón de la llamada a la acción
const CtaButton = styled.a`
  padding: 1rem 2.5rem;
  background-color: #28a745;
  color: white;
  font-size: 1.125rem;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const CallToAction = () => {
  return (
    <CtaSection>
      <CtaTitle>¡Lleva tu proyecto al siguiente nivel!</CtaTitle>
      <CtaDescription>
        Estamos listos para ayudarte a desarrollar y optimizar tu página web. Si
        tienes una idea o un proyecto en mente, contáctanos y comenzamos hoy
        mismo.
      </CtaDescription>
      <CtaButton href="/contacto">Solicita una consulta gratis</CtaButton>
    </CtaSection>
  );
};

export default CallToAction;
