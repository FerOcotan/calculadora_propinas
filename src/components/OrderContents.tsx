import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
type OrderContentsProps = {
  order: OrderItem[];
    removeItem: (id: OrderItem["id"]) => void;
};

export default function OrderContents({ order,removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">Orden</h2>
      <div className="flex flex-col gap-4">
        {order.length === 0 ? ( 
            <p className="text-center text-gray-500">No hay items en la orden</p>
            ) : (
            order.map((item) => (
                <div
                key={item.id}
                className="flex justify-between items-center border-b border-slate-300 pb-2"
                >
                <p>{item.name}</p>
                <p className="font-black text-gray-600">{formatCurrency(item.price)}</p>
                <p className="text-gray-500">x{item.quantity}</p>
                <p className="font-black text-gray-600">{formatCurrency(item.price * item.quantity)}</p>

                <button
                  onClick={() => removeItem(item.id)}
                >
                  
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                </div>
            ))
            )}

      </div>
    </div>
  );
}
