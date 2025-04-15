const Testimonials = () => {
  return (
    <div>
      <section className="bg-[#F0F4F8] py-12 md:py-16">
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2D3748]">
                Student Success Stories
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Hear from students who have used CampusExchange
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col space-y-4 shadow-lg p-2 rounded-lg">
                  <div className="flex items-center space-x-4 ">
                    {/* <Image
                      src="/placeholder.svg"
                      alt="Student"
                      width={48}
                      height={48}
                      className="rounded-full"
                    /> */}
                    <img
                      src="/path/to/image.jpg"
                      alt="description"
                      loading="lazy"
                      className="rounded-xl "
                    />

                    <div>
                      <h3 className="font-semibold">Alex Johnson</h3>
                      <p className="text-sm text-muted-foreground">
                        Computer Science, Junior
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I saved over $200 on textbooks this semester by buying them
                    from other students on CampusExchange. The process was super
                    easy!"
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col space-y-4 rounded-lg shadow-lg p-2">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/path/to/image.jpg"
                      alt="description"
                      loading="lazy"
                      className="rounded-xl "
                    />

                    <div>
                      <h3 className="font-semibold">Maya Patel</h3>
                      <p className="text-sm text-muted-foreground">
                        Business, Senior
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "When I was moving out of my dorm, I sold all my furniture
                    on CampusExchange in just two days. It was so much easier
                    than trying to ship everything home."
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col space-y-4 rounded-lg shadow-lg p-2">
                  <div className="flex items-center space-x-4">
                    {/* <Image
                      src="/placeholder.svg"
                      alt="Student"
                      width={48}
                      height={48}
                      className="rounded-full"
                    /> */}
                    <img
                      src="/path/to/image.jpg"
                      alt="description"
                      loading="lazy"
                      className="rounded-xl "
                    />

                    <div>
                      <h3 className="font-semibold">Tyler Williams</h3>
                      <p className="text-sm text-muted-foreground">
                        Engineering, Freshman
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "I found a graphing calculator for half the retail price on
                    CampusExchange. The seller was in my dorm building, so I got
                    it the same day I needed it for class!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
