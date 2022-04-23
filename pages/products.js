import ProductDisplay from '../components/ProductDisplay';
import ProductsByCategory from '../components/ProductsByCategory';

const Products = ({ products, lineItems, setLineItems, setNotification }) => {
    return (
        <>
            <p className="text-justify mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                numquam mollitia eum laudantium impedit? Et distinctio, minima
                quo fuga laudantium nulla doloribus possimus assumenda magnam
                dolorem, eius nisi, cumque fugiat debitis minus. Dolorem in
                expedita quam mollitia nostrum voluptatem.
            </p>
            <div className="grid gap-4">
                {Object.entries(products).map(([key, value]) => (
                    <ProductsByCategory
                        key={key}
                        title={key}
                        products={value}
                        lineItems={lineItems}
                        setLineItems={setLineItems}
                        setNotification={setNotification}
                    />
                ))}
            </div>
        </>
    );
};

export default Products;
