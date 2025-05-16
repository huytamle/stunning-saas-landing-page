import Image from "next/image";

const checkIcon = "/assets/check.svg";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="primary-container">
        <div className="section-heading">
          <h2 className="section-title py-5">Pricing</h2>
          <p className="section-description my-4">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:px-12 py-4">
          {pricingTiers.map((item, index) => (
            <div
              key={index}
              className={`p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] md:my-4 ${
                item.inverse && "bg-black border-black text-white"
              }`}
            >
              <div className="flex justify-between">
                <h3
                  className={`text-lg font-bold text-black/50 ${
                    item.inverse && "text-white/60"
                  }`}
                >
                  {item.title}
                </h3>
                {item.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${item.monthlyPrice}
                </span>
                <span
                  className={`tracking-tight font-bold text-black/50 ${
                    item.inverse && "invert"
                  }`}
                >
                  /month
                </span>
              </div>
              <button
                className={`btn btn-primary my-4 ${
                  item.inverse && "!bg-white !text-black"
                }`}
              >
                {item.buttonText}
              </button>
              <ul className="mt-4">
                {item.features.map((feature, id) => (
                  <li key={id} className="flex flex-row gap-2 leading-8">
                    <Image
                      src={checkIcon}
                      alt="Check Icon"
                      width={24}
                      height={24}
                      className={`${item.inverse && "invert"}`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
