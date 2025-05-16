import Image from "next/image";

const logo = "/assets/logosaas.png";

const socialIcon = [
  {
    name: "socialX",
    link: "/assets/social-x.svg",
  },
  {
    name: "socialInstagram",
    link: "/assets/social-insta.svg",
  },
  {
    name: "socialLinkedIn",
    link: "/assets/social-linkedin.svg",
  },
  {
    name: "socialPin",
    link: "/assets/social-pin.svg",
  },
  {
    name: "socialYoutube",
    link: "/assets/social-youtube.svg",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="primary-container">
        {/* <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:w-full before:blur bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] before:absolute">
          <Image
            src={logo}
            alt="Logo"
            height={40}
            width={40}
            className="relative"
          />
        </div> */}
        <div className="inline-flex relative">
          <div className="absolute inset-x-0 blur-sm bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] z-0 left-0 right-0 bottom-0 h-[85%] rounded-bl-md"></div>
          <Image
            src={logo}
            alt="Logo"
            height={50}
            width={50}
            className="relative z-10"
          />
        </div>

        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex flex-col justify-center gap-6 mt-6">
          <div className="flex flex-row justify-center items-center gap-6 invert py-4">
            {socialIcon.map((item, id) => (
              <div className="" key={id}>
                <Image src={item.link} alt={item.name} width={24} height={24} />
              </div>
            ))}
          </div>
          <div className="w-[400px] h-[1px] bg-neutral-400 mx-auto"></div>
          <p className="text-neutral-400">
            &copy; 2025 Huy-Tam Lee, Inc. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
