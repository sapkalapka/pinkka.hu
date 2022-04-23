import '../styles/globals.css';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Notification from '../components/Notification';

const products = [
    {
        src: '/img1.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
        title: 'Hátizsák',
        handle: 'hatizsak',
        price: 9990,
    },
    {
        src: '/img2.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
        title: 'Neszesszer',
        handle: 'neszesszer',
        price: 4990,
    },
    {
        src: '/img3.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
        title: 'Könyvtok',
        handle: 'konyvtok',
        price: 4990,
    },
    {
        src: '/img5.jpg',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores earum molestiae, ducimus quia perspiciatis doloremque exercitationem.',
        title: 'Laptop táska',
        handle: 'laptoptaska',
        price: 12990,
    },
];
const shippingMethods = [
    {
        title: 'GLS Házhozszállítás',
        handle: 'gls',
        price: 1290,
    },
    {
        title: 'Személyes átvét',
        handle: 'szemelyes-atvet',
        price: 0,
    },
];
const paymentMethods = [
    {
        title: 'Átutalás',
        handle: 'atutalas',
    },
    {
        title: 'Utánvét',
        handle: 'utanvet',
    },
];

function MyApp({ Component, pageProps }) {
    const [lineItems, setLineItems] = useState([]);
    const [notification, setNotification] = useState(null);

    return (
        <Layout>
            <Notification
                notification={notification}
                setNotification={setNotification}
            />
            <Component
                {...pageProps}
                products={products}
                shippingMethods={shippingMethods}
                paymentMethods={paymentMethods}
                lineItems={lineItems}
                setLineItems={setLineItems}
                setNotification={setNotification}
            />
        </Layout>
    );
}

export default MyApp;
