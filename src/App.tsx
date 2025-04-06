import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";




function App() {
  console.log(menuItems);

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
            />
          ))}
          </div>
        </div>
        <div>
            <h2>
              consumo
            </h2>
        </div>
      </main>
    </>
  );
}

export default App;
