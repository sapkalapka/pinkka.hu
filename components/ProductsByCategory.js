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
            <h1 className="text-3xl tracking-wide font-display font-medium">
                {title}
            </h1>
            <div className="grid grid-cols-4 gap-4 my-4">
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
