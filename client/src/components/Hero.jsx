import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#4F6BED]/10 to-[#38B2AC]/10 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#2D3748]">
                  Campus Marketplace for Students
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Buy, sell, or trade textbooks, furniture, and other items with
                  students on your campus.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                
                  <button
                    className="bg-[#4F6BED] hover:bg-[#4F6BED]/90 p-2 rounded-lg text-white"
                    size="lg"
                  >
                    
                  </button>
                

                <button variant="outline" size="lg" >
                  <a href="/sell">Sell an Item</a>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/path/to/image.jpg"
                alt="description"
                loading="lazy"
                className="rounded-xl "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
