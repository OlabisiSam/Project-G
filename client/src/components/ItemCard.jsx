import { BsBookmark, BsImage } from 'react-icons/bs';

const ItemCard = ({ category, condition, title, price }) => {
  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm relative w-full max-w-xs">
      <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center">
        <BsImage className="text-4xl text-gray-400" />
      </div>

      <button className="absolute top-4 right-4 text-gray-500 hover:text-blue-500">
        <BsBookmark className="text-xl" />
      </button>

      <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
          {category}
        </span>
        <span>{condition}</span>
      </div>

      <h3 className="font-semibold mt-2 text-sm">{title}</h3>
      <p className="font-bold mt-1">${price}</p>
    </div>
  );
};

export default ItemCard;
