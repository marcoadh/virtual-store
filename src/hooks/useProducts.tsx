import { useEffect, useState } from "react";
import Product from "../interfaces/Product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/products.json')
      .then(data => data.json())
      .then(products => setProducts(products))
      .catch((err) => console.log(err));
  }, [])

  const findProduct = (productId: string | undefined ) => {
    return products.find(product => product.id === productId)
  }

  return { products, findProduct }
}