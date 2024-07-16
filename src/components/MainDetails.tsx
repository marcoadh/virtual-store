import { useParams } from "react-router-dom"
import ProductDetailCheckout from "./Details/ProductDetailCheckout"
import ProductDetailDescription from "./Details/ProductDetailDescription"
import ProductDetailImages from "./Details/ProductDetailImages"
import { useProducts } from "../hooks/useProducts"

function MainDetails() {

  const { id } = useParams()
  const { findProduct } = useProducts()
  const findedProduct = findProduct(id)

  if (!findedProduct) {
    return <p>Cargando</p>
  }

  const { title, description, price, stock, images, colors } = findedProduct

  return (
    <>
      <main>
        <div className="details-container">
          <div id="details" className="columns-container">
            <ProductDetailImages images={images} title={title} />
            <ProductDetailDescription title={title} colors={colors} description={description} />
            <ProductDetailCheckout price={price} stock={stock} />
          </div>
        </div>
      </main>
    </>
  )
}

export default MainDetails