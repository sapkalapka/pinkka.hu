import React, { useEffect, useState } from 'react';
import LineItem from '../components/LineItem';
import OrderRowTitle from './OrderRowTitle';

const OrderSummary = ({ lineItems, setLineItems, shipping }) => {
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
                }, shipping.price)
        );
    }, [lineItems, shipping.price]);

    return (
        <div className="md:border-l md:px-6 select-none">
            <OrderRowTitle title={'Összegzés'} />
            {lineItems.length ? (
                <>
                    <ul className="grid gap-2">
                        {lineItems.map((lineItem) => (
                            <LineItem
                                key={lineItem.id}
                                id={lineItem.id}
                                title={lineItem.title}
                                quantity={lineItem.quantity}
                                price={lineItem.price}
                                src={lineItem.src}
                                setLineItems={setLineItems}
                            />
                        ))}
                    </ul>
                    {shipping.handle === 'gls' && (
                        <p className="text-right my-2">
                            + {shipping.title} {shipping.price} Ft
                        </p>
                    )}
                    <p
                        className={`${
                            shipping.handle === 'gls' && 'border-t'
                        } text-right max-w-fit ml-auto font-bold my-2 pt-2`}
                    >
                        Összesen: {orderTotal} Ft
                    </p>
                </>
            ) : (
                <p>Még nem adtál kosárhoz egy terméket sem.</p>
            )}
        </div>
    );
};

export default OrderSummary;
