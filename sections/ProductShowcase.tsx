import Image from "next/image";

const productImage = "/assets/product-image.png";
const pyramidImage = "/assets/pyramid.png";
const tubeImage = "/assets/tube.png";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="primary-container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <div className="mt-10 flex justify-center items-center">
            <Image
              src={productImage}
              alt="Product Image"
              width={1200}
              height={1200}
            />
          </div>

          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="max-sm:hidden md:absolute -right-24 -top-32 z-50"
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            width={248}
            height={248}
            className="max-sm:hidden md:absolute bottom-24 -left-24 z-50"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
