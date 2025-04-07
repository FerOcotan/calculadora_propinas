
import { use, useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
};

export default function OrderTotals({order,tip,placeOrder}: OrderTotalsProps) {

    const subtotalAmount = useMemo  (() => {
        return order.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
    , [order])

    const tipAmount = useMemo(() => subtotalAmount * tip , [tip,order]) 
    const totalAmount = useMemo(() => subtotalAmount + tipAmount , [tip,order]) 

  return (
    
    <>
    
        <div className="flex justify-between items-center border-b pb-2">
            <p className="text-lg font-bold">Totales y propina</p>
            <p>Subtotal a pagar: {''}
                <span className="font-black text-gray-600">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-black text-gray-600">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-black text-gray-600">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
        className='bg-lime-900 text-white p-4 rounded-lg w-full mt-5 hover:bg-lime-800 transition-colors duration-300 ease-in-out disabled:opacity-50'

        onClick={() => {
            placeOrder();
            alert('Gracias por su compra!');
        }}

        disabled={totalAmount === 0}
        type='button'


      
        >
            Guardar orden
        </button>
    
    </>


  )
}
