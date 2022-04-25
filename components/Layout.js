import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="p-6 grow my-6 xl:w-9/12 xl:mx-auto ">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
