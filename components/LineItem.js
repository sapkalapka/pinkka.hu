import Image from 'next/image';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

const LineItem = ({ title, handle, price, quantity, src, setLineItems }) => {
    const handlePlus = () => {
        setLineItems((state) => {
            return state.map((item) => {
                const { quantity, price, ...rest } = item;
                if (item.handle === handle) {
                    return {
                        ...rest,
                        quantity: quantity + 1,
                        price: price + price / quantity,
                    };
                } else {
                    return item;
                }
            });
        });
    };
    const handleMinus = () => {
        setLineItems((state) => {
            if (quantity - 1 === 0) {
                return state.filter((item) => item.handle !== handle);
            } else
                return state.map((item) => {
                    const { quantity, price, ...rest } = item;
                    if (item.handle === handle) {
                        return {
                            ...rest,
                            quantity: quantity - 1,
                            price: price - price / quantity,
                        };
                    } else {
                        return item;
                    }
                });
        });
    };

    return (
        <div className="grid grid-cols-4 p-2 items-center gap-2 border-b">
            <img src={src} alt="product" className="w-full rounded shadow" />
            <p>{title}</p>
            <div className="flex gap-1 justify-end items-center">
                <p>{quantity} db</p>
                <AiFillMinusSquare
                    onClick={handleMinus}
                    className="text-sky-500 cursor-pointer"
                    size={20}
                />
                <AiFillPlusSquare
                    onClick={handlePlus}
                    className="text-sky-500 cursor-pointer"
                    size={20}
                />
            </div>
            <p className="text-right font-bold">{price}Ft</p>
        </div>
    );
};

export default LineItem;
