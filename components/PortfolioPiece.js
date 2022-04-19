import Image from 'next/image';
import Link from 'next/link';

const PortfolioPiece = ({ src, title, text, url }) => {
  return (
    <div className='group grid md:grid-cols-2 gap-6'>
      {/* portfolio text */}
      <div className='md:group-odd:order-2 md:group-even:text-right grid gap-4 content-center'>
        <p className='font-display font-bold text-5xl'>{title}</p>
        <p className='text-sm'>{text}</p>
        <Link href='/'>
          <a
            href={url}
            className='bg-sky-300 rounded shadow hover:-translate-y-0.5 hover:shadow-lg transition-all max-w-fit md:group-even:ml-auto px-8 py-2'
          >
            Részletek
          </a>
        </Link>
      </div>
      {/* portfolio img */}
      <div className='relative'>
        <Image
          src={src}
          width={4}
          height={3}
          layout={'responsive'}
          alt='product'
          className='rounded shadow'
        />
      </div>
    </div>
  );
};

export default PortfolioPiece;
