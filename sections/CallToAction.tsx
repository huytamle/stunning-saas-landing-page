import Image from "next/image";

const arrowRight = "/assets/arrow-right.svg";
const starImage = "/assets/star.png";
const springImage = "/assets/spring.png";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="primary-container">
        <div className="section-heading relative">
          <h2 className="section-title pb-8">Sign up for free today</h2>
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={starImage}
            alt="Star Image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px] z-50"
          />
          <Image
            src={springImage}
            alt="Spring Image"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px] z-50"
          />
        </div>

        <div className="flex gap-4 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            Learn more
            <span className="space-x-4">
              <Image
                src={arrowRight}
                alt="Arrow Right Icon"
                width={24}
                height={24}
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
