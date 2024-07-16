import { Link } from "react-router-dom"
import Product from "../interfaces/Product"

function ProductCard({ id, title, price, colors, images }: Product) {
  return (
    <Link className="product-card" to={`/product/${id}/details`}>
      <img className="product-img" src={images[0]} alt={id} />
      <div className="product-info">
        <span className="product-title">{title}</span>
        <span className="product-description">{colors[0]}</span>
        <div className="product-price-block">
          <span className="product-price">{price}</span>
          <span className="product-discount">50% Off</span>
        </div>
        <div className="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </Link>
  )
}

export default ProductCard