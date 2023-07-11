import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.module.scss";


export default function Layout({ children }) {
  return (
    <div className="font-[Poppins]" style={{ margin: `0 auto`, padding: `0 0rem` }}>
        <Header />
        {children}
        <Footer />
    </div>
  )
}