import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import TopProducts from "../components/topProducts";
import AboutPage from "../components/about";
import Category from "../components/categories";
import Reviews from "../components/reviews";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <TopProducts />
        <AboutPage />
        <Category />
        <Reviews />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
