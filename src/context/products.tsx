import { createContext } from "react"

export const ProductsContext = createContext({})

export function ProductsProvider({ children }) {
  return (
    <ProductsContext.Provider value={{}}>
      {children}
    </ProductsContext.Provider>
  )
}