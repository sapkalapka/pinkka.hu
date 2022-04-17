import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-6 grow my-12 lg:w-9/12 lg:mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
