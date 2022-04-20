import '../styles/globals.css';
import Layout from '../components/Layout';

const products = [
  {
    src: '/img1.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
    title: 'Hátizsák',
    handle: 'hatizsak',
    price: 9990,
  },
  {
    src: '/img2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
    title: 'Neszesszer',
    handle: 'neszesszer',
    price: 4990,
  },
  {
    src: '/img3.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
    title: 'Könyvtok',
    handle: 'konyvtok',
    price: 4990,
  },
  {
    src: '/img5.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
    title: 'Laptop táska',
    handle: 'laptoptaska',
    price: 12990,
  },
  //   {
  //     src: '/img4.jpg',
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
  //     title: 'Egyéb',
  //     handle: 'egyeb',
  //     url: 'https://google.com',
  //   },
];
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} products={products} />
    </Layout>
  );
}

export default MyApp;
