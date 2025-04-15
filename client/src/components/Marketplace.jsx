import ItemCard from "./ItemCard";

const items = [
  {
    category: "Textbooks",
    condition: "Like New",
    title: "Calculus Textbook",
    price: 45,
  },
  {
    category: "Furniture",
    condition: "Good",
    title: "Desk Lamp",
    price: 15,
  },
  {
    category: "Electronics",
    condition: "Excellent",
    title: "TI-84 Calculator",
    price: 60,
  },
];

const Marketplace = () => {
  return (
    <div className="bg-gray-100 px-4 py-10">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2D3748]">
          Featured Items
        </h2>
        <p>Check out these popular items from students on your campus</p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center ">
        {items.map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
