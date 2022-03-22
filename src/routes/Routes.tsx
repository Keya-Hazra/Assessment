import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../layout'
import ProductsDetails from '../pages/landing/ProductsDetails'

const Landing = React.lazy(() => import('../pages/landing'))
const NotFound = React.lazy(() => import('../pages/notFound'))



function Routes() {
  const routes = {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/landing/ProductsDetails/:id', element: <ProductsDetails /> },
      
    ],
  }
  const notFound = {
    path: '*',
    element: <NotFound />,
  }


  return useRoutes([routes, notFound])
}

export default Routes
