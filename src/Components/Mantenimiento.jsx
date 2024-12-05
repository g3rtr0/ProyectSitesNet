import React from "react";
import styled from "styled-components";

const MantenimientoSection = styled.section`
  background-color: #f9fafb;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
`;

const MantenimientoContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2.5rem 2rem;
  text-align: center;
  width: 100%;
  max-width: 700px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 1.5rem;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const MantenimientoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  font-size: 1rem;
  text-align: left;
`;

const MantenimientoItem = styled.li`
  display: flex;
  align-items: center;
  color: #007bff;
  margin-bottom: 0.8rem;

  &::before {
    content: "✔";
    margin-right: 8px;
    color: #28a745;
    font-size: 1.2rem;
  }

  &:hover {
    color: #0056b3;
    transform: translateX(3px);
    transition: all 0.2s ease;
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const MantenimientoPagina = () => {
  return (
    <MantenimientoSection>
      <MantenimientoContainer>
        <SectionTitle>Servicios de Mantenimiento Web</SectionTitle>
        <SectionDescription>
          Mantenemos tu página web al día, optimizada y segura, para ofrecer la
          mejor experiencia a tus usuarios.
        </SectionDescription>
        <MantenimientoList>
          <MantenimientoItem>Actualización de contenido</MantenimientoItem>
          <MantenimientoItem>Optimización de rendimiento</MantenimientoItem>
          <MantenimientoItem>Revisión de errores técnicos</MantenimientoItem>
          <MantenimientoItem>Actualización de seguridad</MantenimientoItem>
        </MantenimientoList>
        <ActionButton href="/contacto">Solicita más información</ActionButton>
      </MantenimientoContainer>
    </MantenimientoSection>
  );
};

export default MantenimientoPagina;
