import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Select from '../components/Select';
import { BsAsterisk } from 'react-icons/bs';

const Order = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedShipping, setSelectedShipping] = useState('GLS - 1290Ft');
  const [selectedPayment, setSelectedPayment] = useState('');

  return (
    <div className='grid grid-cols-2 gap-6'>
      <div>
        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit
          deserunt sequi. Obcaecati nobis distinctio magni, minima quo quam
          harum animi aut veniam libero velit dolores.
        </p>
        <h2 className='text-2xl font-bold mt-8 underline underline-offset-2 decoration-2 decoration-sky-300'>
          Személyes adatok
        </h2>
        <p className='mt-4'>Vezetéknév</p>
        <input
          required
          placeholder='Bekő'
          type='text'
          className='border w-full shadow-sm rounded outline-sky-300 px-1'
        />
        <p className='mt-4'>Keresztnév</p>
        <input
          required
          placeholder='Tóni'
          type='text'
          className='border w-full shadow-sm rounded outline-sky-300 px-1'
        />
        <p className='mt-4'>Email</p>
        <input
          required
          placeholder='beko.toni@morciszerviz.hu'
          type='email'
          className='border w-full shadow-sm rounded outline-sky-300 px-1'
        />
        <p className='mt-4'>Szállítási mód</p>
        <Select
          setParentState={setSelectedShipping}
          options={['GLS - 1290Ft', 'Személyes átvét - 0Ft']}
        />
        {selectedShipping === 'GLS - 1290Ft' && (
          <>
            <p className='mt-4'>Város</p>
            <input
              required
              placeholder='Budapest'
              type='text'
              className='border w-full shadow-sm rounded outline-sky-300 px-1'
            />
            <p className='mt-4'>Utca, házszám</p>
            <input
              required
              placeholder='Balkán utca 16. 3. emelet 11. ajtó'
              type='text'
              className='border w-full shadow-sm rounded outline-sky-300 px-1'
            />
          </>
        )}
        <p className='mt-4'>Fizetési mód</p>
        <Select
          setParentState={setSelectedPayment}
          options={['Átutalás', 'Utánvét', 'Személyes átvét']}
        />

        <h2 className='text-2xl font-bold mt-8 mb-2 underline underline-offset-2 decoration-2 decoration-sky-300'>
          Mit szeretnél rendelni?
        </h2>
        <Select
          setParentState={setSelectedProduct}
          options={['Táska', 'Hátizsák', 'Neszesszer', 'Egyéb']}
        />
        {selectedProduct === 'Egyéb' && (
          <>
            <textarea
              rows={5}
              className='w-full border mt-4 resize-y outline-sky-300 rounded'
            ></textarea>
            <p className='text-justify'>
              <BsAsterisk className='text-red-600 inline pb-2' />
              Kérlek vedd figyelembe a termékpalettát a döntésedkor. Nem
              garantált, hogy képes vagyok teljesíteni a kérésed, de biztosan
              felveszem veled a kapcsolatot.{' '}
            </p>
          </>
        )}
      </div>
      <Image
        src={'/order_bg.webp'}
        width={9}
        height={9}
        layout={'responsive'}
        alt=''
      />
    </div>
  );
};

export default Order;
