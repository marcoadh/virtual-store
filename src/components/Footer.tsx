import './Footer.css'

function Footer() {
  return (
    <footer>
      <div id="footer" className="footer-container">
        <ul className="footer-ul">
          <li className="footer-main-item">
            <a className="footer-a" href="./index.html">Ofertas</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Laptops</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Audio</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Auriculares</a>
          </li>
        </ul>
        <ul className="footer-ul">
          <li className="footer-main-item">
            <a className="footer-a" href="./index.html">Cómo comprar</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Formas de pago</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Envios</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Devoluciones</a>
          </li>
        </ul>
        <ul className="footer-ul">
          <li className="footer-main-item">
            <a className="footer-a" href="./index.html">Costos y tarifas</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Impuestos</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Facturación</a>
          </li>
        </ul>
        <ul className="footer-ul">
          <li className="footer-main-item">
            <a className="footer-a" href="./index.html">Mis pedidos</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Pedir nuevamente</a>
          </li>
          <li className="footer-li">
            <a className="footer-a" href="./index.html">Lista de deseos</a>
          </li>
        </ul>
        <ul className="footer-ul">
          <li className="footer-main-item">
            <a className="footer-a" href="./index.html">Garantía</a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">Curso de HTML + CSS 2023</div>
    </footer>
  )
}

export default Footer