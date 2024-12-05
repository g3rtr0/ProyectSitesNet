import styled from "styled-components";

// Sección de proyectos
const ProjectsSection = styled.section`
  background-color: #f9f9f9;
  padding: 3rem 0;
  text-align: center;
`;

// Contenedor de los proyectos
const ProjectsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

// Tarjeta de proyecto (ahora ocupa toda la fila)
const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

// Imagen del proyecto
const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Contenedor para la información del proyecto
const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Título del proyecto
const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #343a40;
`;

// Descripción completa del proyecto
const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

// Botón para ver más detalles del proyecto
const ViewButton = styled.a`
  padding: 0.8rem 1.8rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 2rem; /* Ajusta el valor según sea necesario */
`;

// Datos de los proyectos
const projects = [
  {
    id: 1,
    title: "Proyecto 1: Desarrollo Web Responsivo",
    image: "/project1.jpg",
    description:
      "Sitio web completamente responsivo que se adapta a cualquier dispositivo, utilizando HTML, CSS y JavaScript para mejorar la experiencia del usuario.",
    link: "/proyecto-1",
  },
  {
    id: 2,
    title: "Proyecto 2: Optimización de Performance Web",
    image: "/project2.jpg",
    description:
      "Mejora de tiempo de carga de una página web mediante optimización de imágenes, lazy loading y minimización de archivos.",
    link: "/proyecto-2",
  },
  {
    id: 3,
    title: "Proyecto 3: Implementación de Ecommerce",
    image: "/project3.jpg",
    description:
      "Desarrollo de una plataforma ecommerce con React y API, incluyendo un sistema de gestión de inventario en tiempo real.",
    link: "/proyecto-3",
  },
  {
    id: 4,
    title: "Proyecto 4: Rediseño de Interfaz de Usuario",
    image: "/project4.jpg",
    description:
      "Rediseño de interfaz móvil utilizando principios UX/UI, herramientas como Figma para una experiencia limpia y moderna.",
    link: "/proyecto-4",
  },
  {
    id: 5,
    title: "Proyecto 4: Rediseño de Interfaz de Usuario",
    image: "/project5.jpg",
    description:
      "Rediseño de interfaz móvil utilizando principios UX/UI, herramientas como Figma para una experiencia limpia y moderna.",
    link: "/proyecto-4",
  },
  {
    id: 6,
    title: "Proyecto 4: Rediseño de Interfaz de Usuario",
    image: "/project6.jpg",
    description:
      "Rediseño de interfaz móvil utilizando principios UX/UI, herramientas como Figma para una experiencia limpia y moderna.",
    link: "/proyecto-4",
  },
];

// Componente de la sección de proyectos
const Projects = () => {
  return (
    <ProjectsSection id="proyectos">
      <Title>Proyectos Realizados</Title>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ViewButton href={project.link}>Ver Proyecto</ViewButton>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
