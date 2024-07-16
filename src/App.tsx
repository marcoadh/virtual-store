import './App.css'
import { ProductsProvider } from "./context/products.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './views/Home'
import Details from './views/Details'

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product/:id/details", element: <Details /> }
])

function App() {
  return (
    <ProductsProvider>
      <RouterProvider router={routes} />
    </ProductsProvider>
  )
}

export default App
