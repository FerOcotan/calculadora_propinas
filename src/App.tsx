import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";



function App() {
  

  const {order, addItem,removeItem,tip,setTip,placeOrder} = useOrder()


  return (
    <>
      <header className="bg-lime-900 text-white p-4 flex justify-center items-center">
        <h1 className="container mx-auto text-2xl font-bold text-center">
          Calculadora de propinas y consumo
        </h1>
      </header>
      
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 
          className="text-2xl font-bold text-center mb-4"
          >Menu</h2>

          <div
          className="grid grid-cols-2 gap-4"
          >

          {menuItems.map(item => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
           
           <>
            <OrderContents 
            order={order}
            removeItem={removeItem}
           />

           <TipPercentageForm
            tip={ tip}
            setTip={setTip}
           
           />
            
            <OrderTotals
              order={order}
              tip={tip}
              placeOrder={placeOrder}
            />
           </>
          ) : (
            <p className="text-center text-gray-500">No hay items en la orden.</p>
          )}
          
        </div>
      </main>
    </>
  );
}

export default App;
