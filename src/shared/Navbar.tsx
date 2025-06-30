import { Search } from "lucide-react";
import { imageProvider } from "../utils/imageProvider";
import Container from "./Container";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-[#0F172A] py-3 ">
      <Container>
        <div className=" flex justify-between items-center">
        <div>
          <img src={imageProvider.Logo} alt="profile_image" />
        </div>
        <div>
          <div className="flex items-center ">
            <input placeholder="Search fo anything...." className=" text-black/80 rounded-l-sm focus:outline-none w-[800px] px-4 py-3  bg-white " type="text" name="" id="" />
            <button className="bg-[#00B795] px-4 rounded-r-sm cursor-pointer py-3 "><Search className="text-white" /></button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to={'/cart'}>
          <div className="relative">
            <img className="cursor-pointer" src={imageProvider.Cart} alt="Cart" />
            <div className="bg-red-500 w-5 h-5  absolute -top-2 -right-2 rounded-full text-white flex justify-center items-center text-sm">
                <h4>2</h4>
            </div>
          </div>
          </Link>
          <img className="cursor-pointer" src={imageProvider.Head} alt="Head" />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Navbar;
