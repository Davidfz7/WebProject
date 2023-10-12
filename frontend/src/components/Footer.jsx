import "../styles/Footer.scss";
export function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <img src="logo.png" alt="Mi Logo" />
        </div>
        <div class="footer-links">
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de nosotros</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
