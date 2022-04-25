import Image from 'next/image';
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
        <div className="shadow rounded relative overflow-hidden">
            <div className="relative w-30 h-52">
                <Image
                    src={
                        'https://i.pinimg.com/originals/ac/97/dc/ac97dc327207607985ea0770cea39a06.jpg'
                    }
                    alt="product"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="p-4">
                <p className="text-xl">{product.title}</p>
                <div className="flex justify-between items-center">
                    <span className="font-bold">{product.price} Ft</span>
                    <HiOutlineShoppingBag
                        size={30}
                        onClick={handleClick}
                        className="text-cyan-600 hover:text-cyan-500 active:rotate-45 transition-all cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
