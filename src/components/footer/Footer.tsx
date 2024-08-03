import React from 'react';
import './Footer.css'; // Asegúrate de tener el archivo CSS correspondiente

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container__footer">
        <div className="content__footer">
          <div className="footer__jllc">
            <div className="footer__jllc-item">
              {/* <img src="./assets/images/logo-jllc.png" alt="Logo de la Empresa" /> */}
              <h2>Carwash</h2>
            </div>
          </div>
          <div className="legal">
            <h4>Legales</h4>
            <p>Política de privacidad</p>
            <p>Términos y condiciones</p>
            <p>Política de Cookies</p>
            <p>Política de términos y condiciones de contratación</p>
          </div>
          <div className="contact">
            <h4>Contacto</h4>
            <div className="contact__item">
              <i className="fa-brands fa-whatsapp"></i>
              <p>+52 998 486 9828</p>
            </div>
            <div className="contact__item">
              <i className="fa-solid fa-envelope"></i>
              <p>info@carwash.com</p>
            </div>
            <div className="contact__item">
              <i className="fa-solid fa-location-dot"></i>
              <p>Cancún Quintana Roo, México</p>
            </div>
          </div>
          <div className="social__networks">
            <h4>Redes Sociales</h4>
            <div className="social__networks-item">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="final__foot">
          <div>
            <h5>Carwash & Carwash WEB</h5>
            <small>Carwash © 2023. Todos los derechos reservados.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
