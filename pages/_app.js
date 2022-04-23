import '../styles/globals.css';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Notification from '../components/Notification';
import ProductJSON from '../public/pinkkaproducts.json';

// const fetchProducts = async () => {
//     const data = JSON.parse(await fs.readFile('/pinkkaproducts.json', 'utf8'));
//     return data;
// };

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
                products={ProductJSON}
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
