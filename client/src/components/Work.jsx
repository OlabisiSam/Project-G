import { FiSearch, FiShoppingBag, FiMessageSquare } from "react-icons/fi";

const Work = () => {
  return (
    <div>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2D3748]">
                How It Works
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Simple steps to buy and sell items on campus
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4F6BED]/10">
                <FiSearch className="h-8 w-8 text-[#4F6BED]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Browse Listings</h3>
                <p className="text-muted-foreground">
                  Search for items by category, price, or condition to find what
                  you need.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#38B2AC]/10">
                <FiMessageSquare className="h-8 w-8 text-[#38B2AC]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Contact Seller</h3>
                <p className="text-muted-foreground">
                  Message the seller directly through our secure messaging
                  system.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6AD55]/10">
                <FiShoppingBag className="h-8 w-8 text-[#F6AD55]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Meet & Exchange</h3>
                <p className="text-muted-foreground">
                  Arrange a safe meeting on campus to complete your transaction.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-[#4F6BED] hover:bg-[#4F6BED]/90" asChild>
              <a href="/how-it-works">Learn More</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
