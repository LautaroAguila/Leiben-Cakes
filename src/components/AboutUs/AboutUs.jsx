import React from 'react';
import foto from './AboutUsImage/trabajando.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
    return (
        <div id='Nosotros'  className="container" style={{ backgroundColor: '#F9EBC7' }}>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img src={foto} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div className='tex-about-us'>
                        <p className="text-center mb-4">Durante la pandemia, descubrimos que la pasión por la pastelería puede transformar los momentos difíciles en oportunidades dulces. Así nació nuestro emprendimiento, con una visión clara: compartir el arte de la repostería.</p>
                        <p className="text-center mb-4">Soy Luciana Ortiz, pastelera titulada con 8 años de experiencia en el mundo de los dulces. Desde chica me encantaba comer cosas dulces, y a los 8 años ya practicaba algunas recetas para tener mi merienda y postre. Comencé en el año 2016 haciendo mi primer curso de pastelería. Ahí aprendí lo básico de cualquier receta, y siempre he buscado aportar mi toque personal a cada una.</p>
                        <p className="text-center mb-4">Una vez concluido exitosamente ese curso, decidí que mi profesión era esa; la pastelería no solo se volvió mi oficio, sino también mi pasión, y con esto me refiero a lo que me llena el alma. Por ende, cada una de mis recetas y productos se distinguen porque están hechos con amor.</p>
                        <p className="text-center mb-4">Comencé vendiendo productos a mis conocidos y familiares, y creé un grupo por Facebook que, aunque no tuvo mucho éxito económico, me brindó mucho aprendizaje. Trabajé en otros rubros para poder pagar y cursar la carrera de pastelería, que logré completar con éxito en 2017.</p>
                        <p className="text-center mb-4">Desde entonces, he trabajado como pastelera en hoteles, restaurantes, salones de eventos y locales afines, además de haber tenido la oportunidad de viajar para trabajar en otras provincias. Esto me brindó mayor sabiduría, experiencia, y crecimiento tanto personal como profesional; pero nunca dejé de vender.</p>
                        <p className="text-center mb-4">Con más seguridad, en pandemia 2020 creé una página de Facebook e Instagram Lieben.cake, donde he seguido subiendo contenido, generando seguidores y clientes. Hoy en día, mis redes sociales siguen activas, y mi meta sigue siendo hacer crecer mi propio negocio.</p>
                        <p className="text-center mb-4">El nombre "Lieben" proviene del alemán y significa "amor", representando la dedicación y el cariño que ponemos en cada torta, pastel y creación que elaboramos para vos.</p>
                        <h2 className="text-center">¡Bienvenidos a nuestro rincón dulce!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
