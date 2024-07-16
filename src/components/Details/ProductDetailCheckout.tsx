interface Props {
  price: number
}

function ProductDetailCheckout({ price }: Props) {
  return (
    <div className="product-checkout-block">
      <div className="checkout-container">
        <span className="checkout-total-label">Total:</span>
        <h2 id="price" className="checkout-total-price">
          ${price.toLocaleString()}
        </h2>
        <p className="checkout-description">
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
          50711 haciendo la solicitud en AFIP.
        </p>
        <ul className="checkout-policy-list">
          <li>
            <span className="policy-icon">
              <img src="/assets/truck.png" alt="Truck" />
            </span>
            <span className="policy-desc">
              Agrega el producto al carrito para conocer los costos de
              envío
            </span>
          </li>
          <li>
            <span className="policy-icon">
              <img src="/assets/plane.png" alt="Plane" />
            </span>
            <span className="policy-desc">
              Recibí aproximadamente entre 10 y 15 días hábiles,
              seleccionando envío normal
            </span>
          </li>
        </ul>
        <div className="checkout-process">
          <div className="top">
            <input type="number" min="1" defaultValue="1" />
            <button type="button" className="cart-btn">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCheckout