import Image from "next/image";

const acmeLogo = "/assets/logo-acme.png";
const quantumLogo = "/assets/logo-quantum.png";
const echoLogo = "/assets/logo-echo.png";
const celestialLogo = "/assets/logo-celestial.png";
const pulseLogo = "/assets/logo-pulse.png";
const apexLogo = "/assets/logo-apex.png";

const LogoTicker = () => {
  return (
    <div className="py-8 bt-white">
      <div className="primary-container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
          <div className="flex gap-14 flex-none">
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              width={220}
              height={220}
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              width={220}
              height={220}
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Logo"
              width={220}
              height={220}
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              width={220}
              height={220}
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              width={220}
              height={220}
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              width={220}
              height={220}
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
