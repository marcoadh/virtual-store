import './Main.css'
import ProductCard from './ProductCard.js'
import Product from '../interfaces/Product.js'
import { useProducts } from '../hooks/useProducts.js'

function MainHome() {
  const { products } = useProducts()

  return (
    <main>
      <div className="product-container" id="products">
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  )
}

export default MainHome