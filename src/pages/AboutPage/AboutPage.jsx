/**
 * Página "Sobre Nayla" - Biografía y información personal
 * 
 * Muestra la historia, habilidades, formación y pasiones de Nayla
 * de manera atractiva y profesional.
 * 
 * @component
 * @example
 * return (
 *   <AboutPage />
 * )
 */

import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <div className="about-hero__image-container">
              <div className="about-hero__image-placeholder">
                📸 Foto de Nayla
              </div>
            </div>
            <div className="about-hero__text">
              <h1 className="about-hero__title">
                Conoce a Nayla
              </h1>
              <p className="about-hero__subtitle">
                Joven actriz con un corazón lleno de sueños y un talento innato
              </p>
              <p className="about-hero__description">
                Con solo 10 años, Nayla ya demuestra una pasión extraordinaria 
                por la interpretación. Su energía contagiosa y dedicación en 
                cada proyecto la convierten en una promesa del mundo actoral.
              </p>
              <div className="hero__actions">
                <Link to="/portfolio" className="btn btn--primary btn--lg">
                  Ver Trabajos
                </Link>
                <Link to="/contacto" className="btn btn--outline btn--lg">
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biografía */}
      <section className="about-bio">
        <div className="container">
          <div className="about-bio__content">
            <h2 className="about-bio__title">Mi Historia</h2>
            <div className="about-bio__text">
              <p>
                Desde muy pequeña, Nayla mostró un interés natural por las artes escénicas. 
                Lo que comenzó como juegos de imitación y pequeñas representaciones familiares, 
                pronto se convirtió en una verdadera pasión por la interpretación.
              </p>
              
              <div className="about-bio__highlight">
                "Cada personaje es una nueva aventura, una oportunidad para contar una historia 
                y conectar con el público de una manera especial."
              </div>

              <p>
                Actualmente se forma en la prestigiosa academia <strong>"Primera Toma"</strong>, 
                donde desarrolla sus habilidades actorales bajo la guía de profesionales 
                experimentados. Su versatilidad le permite abordar tanto papeles dramáticos 
                como cómicos con igual convicción.
              </p>

              <p>
                Cuando no está en clases o en sets de grabación, Nayla disfruta de la lectura, 
                el ballet y pasar tiempo con su familia y amigos. Cree firmemente que la 
                disciplina y la alegría son igualmente importantes en el camino del arte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="about-skills">
        <div className="container">
          <h2 className="section-title">Habilidades y Fortalezas</h2>
          <div className="about-skills__grid">
            <div className="skill-card">
              <div className="skill-card__icon">🎭</div>
              <h3 className="skill-card__title">Interpretación</h3>
              <p className="skill-card__description">
                Capacidad para conectar con personajes diversos y transmitir 
                emociones auténticas en cada actuación.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-card__icon">🎤</div>
              <h3 className="skill-card__title">Expresión Vocal</h3>
              <p className="skill-card__description">
                Dicción clara y capacidad para modular la voz según las 
                necesidades del personaje y la escena.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-card__icon">💃</div>
              <h3 className="skill-card__title">Expresión Corporal</h3>
              <p className="skill-card__description">
                Conciencia del movimiento y capacidad para usar el cuerpo 
                como herramienta expresiva fundamental.
              </p>
            </div>

            <div className="skill-card">
              <div className="skill-card__icon">👂</div>
              <h3 className="skill-card__title">Escucha Activa</h3>
              <p className="skill-card__description">
                Habilidad para reaccionar de manera orgánica a las 
                interpretaciones de otros actores en escena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="about-education">
        <div className="container">
          <h2 className="section-title">Formación Actoral</h2>
          <div className="about-education__timeline">
            <div className="timeline-item">
              <div className="timeline-item__year">2023</div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">Academia "Primera Toma"</h3>
                <p className="timeline-item__description">
                  Formación integral en interpretación frente a cámara, 
                  teatro y técnicas de actuación para cine y televisión.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-item__year">2022</div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">Taller de Expresión Corporal</h3>
                <p className="timeline-item__description">
                  Especialización en el uso del cuerpo como herramienta 
                  expresiva y comunicación no verbal.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-item__year">2022</div>
              <div className="timeline-item__content">
                <h3 className="timeline-item__title">Curso de Voz y Dicción</h3>
                <p className="timeline-item__description">
                  Técnicas de proyección vocal, articulación y modulación 
                  para diferentes tipos de personajes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pasiones */}
      <section className="about-passions">
        <div className="container">
          <h2 className="section-title">Mis Pasiones</h2>
          <div className="about-passions__grid">
            <div className="passion-card">
              <span className="passion-card__emoji">📚</span>
              <h3 className="passion-card__title">Lectura</h3>
              <p className="passion-card__description">
                Adoro sumergirme en historias y personajes a través de los libros, 
                especialmente cuentos y novelas juveniles.
              </p>
            </div>

            <div className="passion-card">
              <span className="passion-card__emoji">🩰</span>
              <h3 className="passion-card__title">Ballet</h3>
              <p className="passion-card__description">
                La danza me ayuda a conectar con mi cuerpo y desarrollar 
                la disciplina y gracia que también aplico en la actuación.
              </p>
            </div>

            <div className="passion-card">
              <span className="passion-card__emoji">🎨</span>
              <h3 className="passion-card__title">Arte y Dibujo</h3>
              <p className="passion-card__description">
                Expresarme a través del dibujo me permite explorar mi 
                creatividad desde otra perspectiva.
              </p>
            </div>

            <div className="passion-card">
              <span className="passion-card__emoji">🌳</span>
              <h3 className="passion-card__title">Naturaleza</h3>
              <p className="passion-card__description">
                Disfruto de los paseos al aire libre y conectar con la 
                naturaleza, que me inspira y recarga energías.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__content">
            <h2 className="about-cta__title">¿Listo para trabajar juntos?</h2>
            <p className="about-cta__description">
              Si buscas una joven actriz con talento, dedicación y una sonrisa contagiosa, 
              estaré encantada de formar parte de tu próximo proyecto.
            </p>
            <div className="about-cta__actions">
              <Link to="/contacto" className="btn about-cta__btn btn--lg">
                Contactar Ahora
              </Link>
              <Link to="/portfolio" className="btn about-cta__btn--outline btn--lg">
                Ver Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage