import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-6 grow py-12 md:w-8/12 md:mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
