import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started for Free</p>
          <Image
            src="assets/arrow-right.svg"
            alt="arrow right"
            width={24}
            height={24}
            className="inline-flex items-center justify-center filter invert"
          />
        </div>
      </div>
      <div className="py-5 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/logosaas.png"
              alt="Logo"
              width={40}
              height={40}
            />
            <Image
              src="/assets/menu.svg"
              alt="menu icon"
              width={24}
              height={24}
              className="md:hidden"
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight cursor-pointer">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
