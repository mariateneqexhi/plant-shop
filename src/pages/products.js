import * as React from "react"
import Layout from "../components/layout";
import Category from "../components/categories";
import TopProducts from "../components/topProducts";
import AboutPage from "../components/about";


const ProductsPage = () => {
  return (
    <Layout>
      <main>
      <TopProducts />
      <Category />
      <AboutPage />
      </main>
    </Layout>
  )
}

export default ProductsPage

export const Head = () => <title>Products Page</title>
