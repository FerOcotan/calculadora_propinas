import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>
      <button
        className="bg-white
      text-gray-800
      border-2 border-gray-300
      hover:border-lime-900
    mb-4
      
      shadow-md rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-lime-900 hover:text-white transition-all duration-300 ease-in-out"
      onClick={() => addItem(item)}

     >
        <p>{item.name}</p>
        <p className="font-black text-gray-600">{item.price}</p>
      </button>
    </>
  );
}
