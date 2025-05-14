import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container max-w-[1440px] mx-auto max-sm:px-4">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-dark/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex items-center mt-[30px] gap-2">
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight cursor-pointer">
                Get for free
              </button>
              <button className=" text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight cursor-pointer gap-1 border border-dark">
                <span>Learn more</span>
                <Image
                  src="/assets/arrow-right.svg"
                  alt="arrow right"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="mt-20 mx-auto md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src="/assets/cog.png"
              alt="cog image"
              width={650}
              height={500}
              className="md:absolute md:h-full md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src="/assets/cylinder.png"
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src="/assets/noodle.png"
              alt="noodle image"
              className="absolute top-[524px] left-[448px] hidden lg:block rotate-[30deg]"
              width={220}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
