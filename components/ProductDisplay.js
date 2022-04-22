import Image from 'next/image';
import Button from './Button';

const ProductDisplay = ({ product, lineItems, setLineItems }) => {
    const handleClick = () => {
        setLineItems((state) => {
            const lineItem = { ...product, quantity: 1 };
            if (lineItems.some((item) => item.handle === lineItem.handle)) {
                return state;
            } else {
                return [...state, lineItem];
            }
        });
    };

    return (
        <div className="group grid sm:grid-cols-2 gap-6">
            <div className="sm:group-odd:order-2 sm:group-even:text-right grid gap-4 content-center">
                <p className="font-display font-bold text-5xl">
                    {product.title}
                </p>
                <p className="text-sm">{product.description}</p>
                <Button text={'Kosárba'} onClick={handleClick} />
            </div>
            <div className="relative">
                <Image
                    src={product.src}
                    width={4}
                    height={3}
                    layout={'responsive'}
                    alt="product"
                    className="rounded shadow"
                />
            </div>
        </div>
    );
};

export default ProductDisplay;
