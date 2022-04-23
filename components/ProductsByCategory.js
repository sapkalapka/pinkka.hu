import ProductCard from './ProductCard';

const ProductDisplayByCategory = ({
    title,
    products,
    lineItems,
    setLineItems,
    setNotification,
}) => {
    return (
        <div className="mb-12">
            <h1 className="text-3xl font-bold font-display">{title}</h1>
            <div className="grid grid-cols-3 gap-12 my-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        lineItems={lineItems}
                        setLineItems={setLineItems}
                        setNotification={setNotification}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductDisplayByCategory;
