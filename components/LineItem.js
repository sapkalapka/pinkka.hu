import Image from 'next/image';
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai';

const LineItem = ({ lineItem, setLineItems }) => {
  const handlePlus = (lineItem) => {
    setLineItems((prev) => {
      let result = prev.map((item) => {
        if (item.handle === lineItem.handle) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        } else {
          return item;
        }
      });
      return result;
    });
  };
  const handleMinus = (lineItem) => {
    setLineItems((prev) => {
      let result = prev.map((item) => {
        if (item.handle === lineItem.handle && item.qty - 1 > 0) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        } else {
          return item;
        }
      });
      return result;
    });
  };

  return (
    <div className='grid grid-cols-3 items-center gap-2 py-2 border-b '>
      <div className='flex items-center gap-1'>
        <Image src={lineItem.src} width={50} height={50} alt='product' className='rounded-full' />
        <span>{lineItem.title}</span>
      </div>

      <div className='flex grow justify-end gap-1'>
        <AiFillPlusSquare onClick={() => handlePlus(lineItem)} size={25} className='text-sky-400 cursor-pointer' />
        <p className='text-xl'>{lineItem.qty}</p>
        <AiFillMinusSquare onClick={() => handleMinus(lineItem)} size={25} className='text-sky-400 cursor-pointer' />
      </div>
      <p className='ml-auto'>{lineItem.price} Ft</p>
    </div>
  );
};

export default LineItem;
