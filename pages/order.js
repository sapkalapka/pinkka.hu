import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ButtonGroup from '../components/ButtonGroup';
import ButtonGroupMultiselect from '../components/ButtonGroupMultiselect';

import { BsAsterisk } from 'react-icons/bs';
import InputPlusLabel from '../components/InputPlusLabel';
import LineItem from '../components/LineItem';

const Order = ({ products }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [lineItems, setLineItems] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [otherDescription, setOtherDescription] = useState('');

  useEffect(() => {
    setLineItems(selectedProducts.map((item) => ({ ...products[item], qty: 1 })));
  }, [products, selectedProducts]);

  useEffect(() => {
    console.log(lineItems);
  }, [lineItems]);

  useEffect(() => {
    if (!lineItems) return;
    setOrderTotal(
      lineItems
        .map((product) => {
          return product;
        })
        .reduce((total, { price, qty }) => {
          return total + price * qty;
        }, 0)
    );
  }, [lineItems]);

  const shippingProviders = [
    {
      title: 'GLS - 1290Ft',
      handle: 'gls',
    },
    {
      title: 'Személyes átvét - 0Ft',
      handle: 'szemelyes-atvet',
    },
  ];
  const paymentProviders = [
    {
      title: 'Átutalás',
      handle: 'atutalas',
    },
    {
      title: 'Utánvét',
      handle: 'utanvet',
    },
  ];

  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <div>
        <h2 className='text-2xl font-bold underline underline-offset-2 decoration-2 decoration-sky-600'>
          Személyes adatok
        </h2>
        <InputPlusLabel
          title='Vezetéknév'
          type='text'
          isRequired={true}
          placeholder='Bekő'
          setParentState={setLastName}
        />
        <InputPlusLabel
          title='Keresztnév'
          type='text'
          isRequired={true}
          placeholder='Tóni'
          setParentState={setFirstName}
        />
        <InputPlusLabel
          title='Email'
          type='email'
          isRequired={true}
          placeholder='beko.toni@morcigarazs.hu'
          setParentState={setEmail}
        />
        <h2 className='text-2xl mt-8 font-bold underline underline-offset-2 decoration-2 decoration-sky-600'>
          Rendelés adatok
        </h2>
        <ButtonGroup title='Szállítási mód' setParentState={setSelectedShipping} options={shippingProviders} />
        {selectedShipping === 'GLS - 1290Ft' && (
          <>
            <InputPlusLabel type='text' title='Város' isRequired={true} placeholder='Budapest' />
            <InputPlusLabel
              type='text'
              title='Utca,házszám'
              isRequired={true}
              placeholder='Balkán utca 16. 3. emelet 11. ajtó'
            />
          </>
        )}
        <ButtonGroup title='Fizetési mód' setParentState={setSelectedPayment} options={paymentProviders} />

        <ButtonGroupMultiselect
          title='Mit szeretnél rendelni?'
          parentState={selectedProducts}
          setParentState={setSelectedProducts}
          options={products}
        />
        {/* {selectedProducts.includes('egyeb') && (
		  <>
			<p className='mt-4'>Írd meg mire gondolsz!</p>
			<textarea
			  rows={5}
			  onChange={(e) => setOtherDescription(e.target.value)}
			  className='w-full border resize-y outline-sky-600 rounded'
			></textarea>
			<p className='text-justify'>
			  <BsAsterisk className='text-red-600 inline pb-2' />
			  Kérlek vedd figyelembe a termékpalettát a döntésedkor. Nem
			  garantált, hogy képes vagyok teljesíteni a kérésed, de biztosan
			  felveszem veled a kapcsolatot.{' '}
			</p>
		  </>
		)} */}
      </div>
      {lineItems && (
        <div className='md:border-l md:px-6 '>
          <h2 className='text-2xl font-bold underline underline-offset-2 decoration-2 decoration-sky-600'>
            Rendelés összefoglaló
          </h2>
          <div className='flex justify-between mt-4'>
            <p>Termék</p>
            <p>Darabszám</p>
            <p>Ár</p>
          </div>
          {lineItems.map((lineItem, i) => (
            <LineItem key={`lineItem-${i}`} lineItem={lineItem} setLineItems={setLineItems} />
          ))}
          <p className='text-right font-bold mt-8'>Összesen: {orderTotal} Ft</p>
        </div>
      )}
    </div>
  );
};

export default Order;
