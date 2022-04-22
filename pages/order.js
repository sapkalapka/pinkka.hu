import React, { useState, useEffect } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import InputPlusLabel from '../components/InputPlusLabel';
import OrderRowTitle from '../components/OrderRowTitle';
import OrderSummary from '../components/OrderSummary';

const Order = ({ products, shipping, payment, lineItems, setLineItems }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [selectedShipping, setSelectedShipping] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('');

    return (
        <div className="grid gap-6 md:grid-cols-2">
            <div>
                <OrderRowTitle title={'Személyes adatok'} />
                <InputPlusLabel
                    title="Vezetéknév"
                    type="text"
                    isRequired={true}
                    placeholder="Bekő"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <InputPlusLabel
                    title="Keresztnév"
                    type="text"
                    isRequired={true}
                    placeholder="Tóni"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <InputPlusLabel
                    title="Email"
                    type="email"
                    isRequired={true}
                    placeholder="beko.toni@morcigarazs.hu"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <OrderRowTitle title={'Rendelés adatok'} />
                <ButtonGroup
                    title="Fizetési mód"
                    onClick={(e) => setSelectedPayment(e.target.value)}
                    active={selectedPayment}
                    data={payment}
                />
                <ButtonGroup
                    title="Szállítási mód"
                    onClick={(e) => setSelectedShipping(e.target.value)}
                    active={selectedShipping}
                    data={shipping}
                />
                {selectedShipping === 'gls' && (
                    <>
                        <InputPlusLabel
                            type="text"
                            title="Város"
                            isRequired={true}
                            placeholder="Budapest"
                            onChange={setCity}
                        />
                        <InputPlusLabel
                            type="text"
                            title="Utca,házszám"
                            isRequired={true}
                            placeholder="Balkán utca 16. 3. emelet 11. ajtó"
                            onChange={setStreet}
                        />
                    </>
                )}
            </div>
            <OrderSummary
                products={products}
                selectedShipping={selectedShipping}
                lineItems={lineItems}
                setLineItems={setLineItems}
            />
        </div>
    );
};

export default Order;
