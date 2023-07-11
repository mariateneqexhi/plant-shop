import * as React from "react"
import Layout from "../components/layout";
import AboutPage from "../components/about";

const ContactsPage = () => {
  return (
    <Layout>
      <main className="mt-12">
      <AboutPage />
      </main>
    </Layout>
  )
}

export default ContactsPage

export const Head = () => <title>Contacts Page</title>
