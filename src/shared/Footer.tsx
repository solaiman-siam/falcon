import { Mail, MapPin, Phone } from "lucide-react";
import { imageProvider } from "../utils/imageProvider";
import Container from "./Container";
import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0f172A] py-10">
      <Container>
        <div className="flex items-start text-white/80 justify-between">
          <div>
            <img className="w-52" src={imageProvider.FooterLogo} alt="" />
            <p className="text-white/80 text-sm pt-4 pb-5 w-10/12">
              Experience our new platform & Enjoy exiting deals and offers on
              your day to day
            </p>
            {/* contact detials */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="size-7 text-black/90 hover:bg-white flex justify-center cursor-pointer items-center rounded-full bg-white/90 transition-all duration-200">
                  <MapPin size={16} />
                </div>
                <h4 className="text-sm w-7/12">
                  House #64, Road 13, ASA Center, Uttara, Dhaka-1402
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-7 text-black/90 hover:bg-white flex justify-center cursor-pointer items-center rounded-full bg-white/90 transition-all duration-200">
                  <Phone size={16} />
                </div>
                <h4 className="text-sm">01729-1497201</h4>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-7 text-black/90 hover:bg-white flex justify-center cursor-pointer items-center rounded-full bg-white/90 transition-all duration-200">
                  <Mail size={16} />
                </div>
                <h4 className="text-sm">falcon@gmail.com</h4>
              </div>
            </div>
          </div>
          {/* abouts links */}
          <div>
            <h3 className="uppercase text-white/60">ABOUT</h3>
            <div className="flex flex-col **:text-[15px] pt-4 gap-2">
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Contact Us</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>About Us</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Careers</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Press</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Cancellation & Returns</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Terms of Use</h4>
              </Link>
            </div>
          </div>
          {/* help links */}
          <div>
            <h3 className="uppercase text-white/60">Help</h3>
            <div className="flex flex-col **:text-[15px] pt-4 gap-2">
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Contact Us</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>About Us</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Careers</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Press</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Cancellation & Returns</h4>
              </Link>
              <Link to={""}>
                <h4 className={'hover:text-white transition-all duration-200'}>Terms of Use</h4>
              </Link>
            </div>
          </div>
          <div>
            {/* support links */}
            <div>
              <h3 className="uppercase text-white/60 pb-4">Need Support</h3>
              <div className=" border px-2 py-1.5 cursor-pointer rounded-sm text-[15px] border-white/70 flex items-center justify-center gap-2">
                {" "}
                <img src={imageProvider.Headphone} className="" alt="" />{" "}
                10724-7814XX
              </div>
            </div>
            {/* download app */}
            <div>
              <h3 className="uppercase text-white/60 pb-4 pt-8">
                Download App
              </h3>
              <div className="flex flex-col gap-3">
                <img
                  className="cursor-pointer"
                  src={imageProvider.Google}
                  alt=""
                />
                <img
                  className="cursor-pointer"
                  src={imageProvider.Apple}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-8 items-center ">
            {/* follow us on */}
          <div className="flex items-center gap-3 ">
            <h4 className="text-white/80">Follow us on</h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="size-7 flex justify-center cursor-pointer hover:bg-white text-black/80 items-center transition-all duration-200 rounded-full bg-white/90">
                  <FaFacebookF size={15} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-7 flex justify-center cursor-pointer hover:bg-white text-black/80 items-center transition-all duration-200 rounded-full bg-white/90">
                  <FaInstagram size={15} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-7 flex justify-center cursor-pointer hover:bg-white text-black/80 items-center transition-all duration-200 rounded-full bg-white/90">
                  <FaTwitter size={15} />
                </div>
              </div>
            </div>
          </div>
          {/* payment accepted */}
          <div className="flex items-center gap-3 ">
            <h4 className="uppercase text-white/60">Payment Accepted </h4>
            <div className="pt-2">
                <img src={imageProvider.CreditCards} alt="" />
            </div>
          </div>
        </div>
        <hr className="text-white/20 mt-8"/>
        <p className="text-center pt-6 text-white/90 text-sm">Falcon ©2025. Design by Solaiman Siam</p>
      </Container>
    </div>
  );
};

export default Footer;
