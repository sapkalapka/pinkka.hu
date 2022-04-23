import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsInfoLg } from 'react-icons/bs';

const ProductCard = ({ product, lineItems, setLineItems, setNotification }) => {
    // const handleClick = () => {
    //     setNotification('Sikeresen a kosárba helyezted a terméket!');
    // };

    const handleClick = () => {
        setLineItems((state) => {
            const lineItem = { ...product, quantity: 1 };
            if (lineItems.some((item) => item.id === lineItem.id)) {
                setNotification('A termék már szerepel a kosaradban!');

                return state;
            } else {
                setNotification('Sikeresen kosárhoz adtad a terméket.');
                return [...state, lineItem];
            }
        });
    };
    return (
        <div className="shadow relative rounded-lg overflow-hidden">
            <p className="absolute top-0 right-0 py-1 px-3 cursor-pointer text-white text-sm bg-cyan-700 rounded-bl-lg tracking-wide">
                Részletek
            </p>

            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TtqCA6s8_rxgGpNtXQj80LnhOwixa1cMVNcrQgvbp9nTeJoc4YXVrbStUxEo4Lm98mg&usqp=CAU"
                width="100%"
            />
            <div className="p-4">
                <p className="text-xl">{product.title}</p>
                <div className=" flex justify-between items-center">
                    <span className="font-bold">{product.price} Ft</span>
                    <HiOutlineShoppingBag
                        size={30}
                        onClick={handleClick}
                        className="text-cyan-700 hover:text-cyan-600 active:rotate-45 transition-all cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
