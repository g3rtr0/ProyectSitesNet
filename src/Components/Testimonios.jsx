import Smith from '../assets/clients/smith.png'
import Messi from '../assets/clients/messi.png'
const Testimonios = () => {
    return (
      <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container text-center">
          <h2 className="text-primary fw-bold mb-5">Lo que dicen nuestros clientes</h2>
          <div className="row gy-4">
            {/* Testimonio 1 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img
                    src={Smith}
                    alt="Cliente 1"
                    className="rounded-circle mb-3 img-fluid"
                  />
                  <p className="text-muted fst-italic">
                    Gracias a este sitio web, mi negocio creció exponencialmente.
                    El diseño es increíble y muy fácil de usar. ¡Lo recomiendo
                    totalmente!
                  </p>
                  <h5 className="text-primary mb-0">Juan Pérez</h5>
                  <p className="text-muted small">Emprendedor</p>
                </div>
              </div>
            </div>
            {/* Testimonio 2 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img
                    src={Messi}
                    alt="Cliente 2"
                    className="rounded-circle mb-3 img-fluid"
                  />
                  <p className="text-muted fst-italic">
                    La atención al cliente y la calidad del servicio fueron
                    excepcionales. Ahora mi página web se ve profesional y atractiva.
                  </p>
                  <h5 className="text-primary mb-0">Ana López</h5>
                  <p className="text-muted small">Freelancer</p>
                </div>
              </div>
            </div>
            {/* Testimonio 3 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Cliente 3"
                    className="rounded-circle mb-3"
                  />
                  <p className="text-muted fst-italic">
                    Estoy muy feliz con el resultado. Mi sitio web es rápido,
                    moderno y perfecto para atraer nuevos clientes.
                  </p>
                  <h5 className="text-primary mb-0">Carlos García</h5>
                  <p className="text-muted small">Propietario de tienda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonios;
  