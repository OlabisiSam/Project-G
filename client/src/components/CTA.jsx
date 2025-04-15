const CTA = () => {
  return (
    <div>
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg bg-gradient-to-r from-[#4F6BED] to-[#38B2AC] p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                    Ready to buy or sell?
                  </h2>
                  <p className="text-white/90 md:text-xl">
                    Join thousands of students on your campus who are saving
                    money and reducing waste.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    className="bg-white text-[#4F6BED] hover:bg-white/90 p-2 rounded-lg"
                    size="lg"
                    
                  >
                    <a href="/register">Sign Up Now</a>
                  </button>
                  <button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                    size="lg"
                    asChild
                  >
                    <a href="/how-it-works">Learn More</a>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* <Image
                  src="/placeholder.svg"
                  alt="Students using CampusExchange"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                /> */}
                <img
                  src="/path/to/image.jpg"
                  alt="description"
                  loading="lazy"
                  className="rounded-xl "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
