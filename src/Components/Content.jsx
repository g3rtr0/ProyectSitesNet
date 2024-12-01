const Content = () => {
  return (
    <section className="container my-5 d-flex align-items-center justify-content-center" style={{ height: '75vh' }}>
      <div className="row w-100">
        {/* Columna de texto */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="display-4 text-primary">Bienvenido a nuestro sitio web</h2>
          <p className="lead">
            Aquí podrás encontrar una variedad de productos, servicios y contenido útil que te ayudarán en tu día a día.
            Explora nuestras secciones y no dudes en ponerte en contacto con nosotros si tienes alguna pregunta.
          </p>
          <button className="btn btn-success btn-lg">Explorar</button>
        </div>

        {/* Columna de imagen */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="https://via.placeholder.com/500"
            alt="Imagen descriptiva"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
