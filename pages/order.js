import React, { useState, useEffect } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import InputPlusLabel from '../components/InputPlusLabel';
import LineItem from '../components/LineItem';

const Order = ({ products }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [lineItems, setLineItems] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  useEffect(() => {
    if (selectedShipping) setOrderTotal((prev) => prev + selectedShipping);
  }, [selectedShipping]);

  useEffect(() => {
    if (!lineItems) return;
    setOrderTotal(
      lineItems
        .map((product) => {
          return product;
        })
        .reduce((total, { price, qty }) => {
          return total + price * qty;
        }, selectedShipping.price)
    );
  }, [lineItems, selectedShipping]);

  const shippingProviders = [
    {
      title: 'GLS - 1290Ft',
      handle: 'gls',
      price: 1290,
    },
    {
      title: 'Személyes átvét - 0Ft',
      handle: 'szemelyes-atvet',
      price: 0,
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
        <h2 className='text-2xl font-bold underline underline-offset-2 decoration-2 decoration-sky-400'>
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
        <h2 className='text-2xl mt-8 font-bold underline underline-offset-2 decoration-2 decoration-sky-400'>
          Rendelés adatok
        </h2>
        <ButtonGroup title='Fizetési mód' setParentState={setSelectedPayment} data={paymentProviders} />
        <ButtonGroup title='Szállítási mód' setParentState={setSelectedShipping} data={shippingProviders} />
        {selectedShipping.handle === 'gls' && (
          <>
            <InputPlusLabel
              type='text'
              title='Város'
              isRequired={true}
              placeholder='Budapest'
              setParentState={setCity}
            />
            <InputPlusLabel
              type='text'
              title='Utca,házszám'
              isRequired={true}
              placeholder='Balkán utca 16. 3. emelet 11. ajtó'
              setParentState={setStreet}
            />
          </>
        )}
      </div>
      {lineItems.length > 0 && (
        <div className='md:border-l md:px-6 '>
          <h2 className='text-2xl font-bold underline underline-offset-2 decoration-2 decoration-sky-400'>
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
