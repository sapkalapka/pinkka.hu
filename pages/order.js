import React, { useState, useEffect } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import InputPlusLabel from '../components/InputPlusLabel';
import OrderRowTitle from '../components/OrderRowTitle';
import OrderSummary from '../components/OrderSummary';

const Order = ({
    products,
    shippingMethods,
    paymentMethods,
    lineItems,
    setLineItems,
}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [shipping, setShipping] = useState({ price: 0 });
    const [payment, setPayment] = useState('');

    const handleShippingChange = (e) => {
        setShipping(
            ...shippingMethods.filter(
                (method) => method.handle === e.target.value
            )
        );
    };

    const handlePaymentChange = (e) => {
        setPayment(
            ...paymentMethods.filter(
                (method) => method.handle === e.target.value
            )
        );
    };

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
                    onClick={handlePaymentChange}
                    active={payment.handle}
                    data={paymentMethods}
                />
                <ButtonGroup
                    title="Szállítási mód"
                    onClick={handleShippingChange}
                    active={shipping.handle}
                    data={shippingMethods}
                />
                {shipping.handle === 'gls' && (
                    <>
                        <InputPlusLabel
                            type="text"
                            title="Telefonszám"
                            isRequired={true}
                            placeholder="+36704445566"
                            onChange={setStreet}
                        />
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
                            onChange={setPhone}
                        />
                    </>
                )}
            </div>
            <OrderSummary
                products={products}
                shipping={shipping}
                lineItems={lineItems}
                setLineItems={setLineItems}
            />
        </div>
    );
};

export default Order;
