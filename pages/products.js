import ProductDisplay from '../components/ProductDisplay';

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
            <div className="grid gap-12">
                {products.map((product, i) => (
                    <ProductDisplay
                        key={`ProductDisplay-${i}`}
                        product={product}
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
