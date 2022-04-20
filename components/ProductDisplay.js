import Image from 'next/image';
import Link from 'next/link';

const ProductDisplay = ({ src, title, text, url }) => {
  return (
    <div className='group grid sm:grid-cols-2 gap-6'>
      <div className='sm:group-odd:order-2 sm:group-even:text-right grid gap-4 content-center'>
        <p className='font-display font-bold text-5xl'>{title}</p>
        <p className='text-sm'>{text}</p>
        <button className='sm:group-even:ml-auto bg-sky-400 text-white rounded shadow hover:-translate-y-0.5 hover:shadow-lg transition-all max-w-fit px-8 py-2'>
          Kosárba
        </button>
      </div>
      <div className='relative'>
        <Image src={src} width={4} height={3} layout={'responsive'} alt='product' className='rounded shadow' />
      </div>
    </div>
  );
};

export default ProductDisplay;
