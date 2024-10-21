import FbSvg from "../../svg/FbSvg";
import InstaSvg from "../../svg/InstaSvg";
import LinkedIn from "../../svg/LinkedinSvg";
import Logo from "../../svg/Logo";
import TwitterSvg from "../../svg/TwitterSvg";

const Footer1 = () => {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
      <div className="mb-10 w-full">
        <a
          href="javascript:void(0)"
          className="mb-6 inline-block  max-h-[100px]"
        >
          <Logo />
        </a>
        <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
          We create digital experiences for brands and companies by using
          technology.
        </p>
        <div className="-mx-3 flex items-center">
          <a
            href="javascript:void(0)"
            className="px-3 text-gray-7 hover:text-white"
          >
            <FbSvg />
          </a>
          <a
            href="javascript:void(0)"
            className="px-3 text-gray-7 hover:text-white"
          >
            <TwitterSvg />
          </a>
          <a
            href="javascript:void(0)"
            className="px-3 text-gray-7 hover:text-white"
          >
            <InstaSvg />
          </a>
          <a
            href="javascript:void(0)"
            className="px-3 text-gray-7 hover:text-white"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
