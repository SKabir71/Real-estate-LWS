import Footer1 from "./FooterContent/Footer1";
import FooterAbout from "./FooterContent/FooterAbout";
import FooterBlog from "./FooterContent/FooterBlog";
import FooterFeature from "./FooterContent/FooterFeature";

const Footer = () => {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <Footer1 />
          <FooterAbout />
          <FooterFeature />
          <FooterBlog />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
