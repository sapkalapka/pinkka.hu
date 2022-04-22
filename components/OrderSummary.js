import React, { useEffect, useState } from 'react';
import LineItem from '../components/LineItem';
import OrderRowTitle from './OrderRowTitle';

const OrderSummary = ({ lineItems, setLineItems, selectedShipping }) => {
    const [orderTotal, setOrderTotal] = useState(0);
    useEffect(() => {
        if (!lineItems.length) return;
        setOrderTotal(
            lineItems
                .map((product) => {
                    return product.price;
                })
                .reduce((total, price) => {
                    return total + price;
                }, 0)
        );
    }, [lineItems]);

    return (
        <div className="md:border-l md:px-6 select-none">
            <OrderRowTitle title={'Rendelés összefoglaló'} />
            {lineItems.length ? (
                <ul className="grid gap-2">
                    {lineItems.map((lineItem) => (
                        <LineItem
                            key={lineItem.handle}
                            title={lineItem.title}
                            handle={lineItem.handle}
                            quantity={lineItem.quantity}
                            price={lineItem.price}
                            src={lineItem.src}
                            setLineItems={setLineItems}
                        />
                    ))}
                </ul>
            ) : (
                <p>Még nem adtál kosárhoz egy terméket sem.</p>
            )}

            <p className="text-right font-bold mt-8">
                Összesen: {orderTotal} Ft
            </p>
        </div>
    );
};

export default OrderSummary;
